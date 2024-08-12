import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface DropdownProps {
  defaultValue: string;
  label: string;
  values: string[];
  labelColor: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  defaultValue,
  label,
  values,
  labelColor,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    handleClose();
  };

  return (
    <DropdownContainer>
      <Label color={labelColor}>{label}:</Label>
      <DropdownHeader onClick={handleClick}>
        <SelectedText>{selectedValue || defaultValue}</SelectedText>
        <IconButton>
          {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </DropdownHeader>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {values.map((value, index) => (
          <MenuItem key={index} onClick={() => handleSelect(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const Label = styled.span<{ color: string }>`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: ${(props) => props.color};
`;

const SelectedText = styled.span`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8e94a7;
`;

const DropdownHeader = styled.div`
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
  color: #8e94a7;
`;
