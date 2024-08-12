import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DateDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    handleClose();
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleClick}>
        <EventAvailableIcon />
        <SelectedDateContainer>
          {selectedDate ? selectedDate : "Any Date"}
        </SelectedDateContainer>
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
        <MenuItem onClick={() => handleDateSelect("Any Date")}>
          Any Date
        </MenuItem>
        <MenuItem onClick={() => handleDateSelect("Last Week")}>
          Last Week
        </MenuItem>
        <MenuItem onClick={() => handleDateSelect("Last Month")}>
          Last Month
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
};

export default DateDropdown;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8e94a7;
  width: 200px;
`;

const SelectedDateContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;
