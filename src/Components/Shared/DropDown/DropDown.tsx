import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown, Check } from "@mui/icons-material";

interface DropDownProps {
  icon?: React.ReactNode;
  labelText: string;
  options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ icon, labelText, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | null>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      setMenuWidth(dropdownRef.current.offsetWidth);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
    handleClose();
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={handleClick}>
        <Icon>{icon}</Icon>
        <Label>{labelText}</Label>
        <IconButton>
          {anchorEl ? (
            <KeyboardArrowUp style={{ color: "white" }} />
          ) : (
            <KeyboardArrowDown style={{ color: "white" }} />
          )}
        </IconButton>
      </DropdownHeader>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        PaperProps={{
          style: {
            width: menuWidth ? `${menuWidth}px` : undefined,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
          },
        }}
      >
        {options.map((option) => (
          <StyledMenuItem
            key={option}
            onClick={() => handleDateSelect(option)}
            selected={option === selectedDate}
          >
            {option}
            {option === selectedDate && <CheckIcon />}
          </StyledMenuItem>
        ))}
      </Menu>
    </DropdownContainer>
  );
};

export default DropDown;

const DropdownContainer = styled.div``;

const Icon = styled.div`
  color: #fff;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #fff;
`;

const DropdownHeader = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 10px 0px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8e94a7;
  white-space: nowrap;
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
`;

const CheckIcon = styled(Check)`
  color: green;
`;
