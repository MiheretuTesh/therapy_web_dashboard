import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const LanguageDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <DropdownContainer>
      <Label>Language:</Label>
      <DropdownHeader onClick={handleClick}>
        <SelectedText>{selectedLanguage}</SelectedText>
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
        <MenuItem onClick={() => handleLanguageSelect("English")}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("German")}>
          German
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("French")}>
          French
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
};

export default LanguageDropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Label = styled.span`
  font-size: 18px;
  color: #8e94a7;
  margin-bottom: 5px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectedText = styled.span`
  padding: 10px;
  width: 80px;
  background-color: #7d12a3;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
