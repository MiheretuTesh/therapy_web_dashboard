import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const SubjectDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(
    "Psychology"
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    handleClose();
  };

  const handleClearSelection = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setSelectedSubject(null);
  };

  return (
    <DropdownContainer>
      <Label>Discussion subj:</Label>
      <DropdownHeader onClick={handleClick}>
        <SelectedText>
          {selectedSubject || "Select"}
          {selectedSubject && (
            <IconButton
              size="small"
              onClick={handleClearSelection}
              style={{
                padding: 0,
                margin: 0,
                color: "white",
                border: "1px solid white",
                borderRadius: 50,
              }}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </SelectedText>
        <IconButton>
          {anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
      </DropdownHeader>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={() => handleSubjectSelect("Psychology")}>
          Psychology
        </MenuItem>
        <MenuItem onClick={() => handleSubjectSelect("History")}>
          History
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
};

export default SubjectDropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #8e94a7;
  margin-bottom: 5px;
`;

const SelectedText = styled.span`
  width: 150px;
  padding: 10px;
  background-color: #7d12a3;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const DropdownHeader = styled.div`
  height: 45px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8e94a7;
`;
