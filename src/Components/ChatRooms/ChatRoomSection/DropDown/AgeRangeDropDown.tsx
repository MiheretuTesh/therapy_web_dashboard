import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AgeDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLowestAgeMenuOpen, setIsLowestAgeMenuOpen] = useState(false);
  const [isHighestAgeMenuOpen, setIsHighestAgeMenuOpen] = useState(false);
  const [selectedLowestAge, setSelectedLowestAge] = useState<string | null>(
    "18"
  );
  const [selectedHighestAge, setSelectedHighestAge] = useState<string | null>(
    "80"
  );

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    isLowest: boolean
  ) => {
    setAnchorEl(event.currentTarget);
    if (isLowest) {
      setIsLowestAgeMenuOpen(true);
      setIsHighestAgeMenuOpen(false);
    } else {
      setIsLowestAgeMenuOpen(false);
      setIsHighestAgeMenuOpen(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsLowestAgeMenuOpen(false);
    setIsHighestAgeMenuOpen(false);
  };

  const handleLowestAgeSelect = (age: string) => {
    setSelectedLowestAge(age);
    handleClose();
  };

  const handleHighestAgeSelect = (age: string) => {
    setSelectedHighestAge(age);
    handleClose();
  };

  const ageOptions = Array.from({ length: 65 }, (_, i) => (i + 16).toString());

  return (
    <DropdownContainer>
      <Label>Age Range:</Label>
      <DropdownHeader onClick={(e) => handleClick(e, true)}>
        <TextContainer>
          <SelectedText>{selectedLowestAge}</SelectedText>
          <BreakLine />
          <SelectedText>{selectedHighestAge}</SelectedText>
        </TextContainer>
        <IconButton>
          {isLowestAgeMenuOpen || isHighestAgeMenuOpen ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </DropdownHeader>

      <Menu
        anchorEl={anchorEl}
        open={isLowestAgeMenuOpen}
        onClose={handleClose}
        PaperProps={{
          style: { maxHeight: "200px", overflowY: "auto" },
        }}
      >
        <MenuItem disabled>Select Lowest Age</MenuItem>
        {ageOptions.map((age) => (
          <MenuItem key={age} onClick={() => handleLowestAgeSelect(age)}>
            {age}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleLowestAgeSelect("80")}>80</MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorEl}
        open={isHighestAgeMenuOpen}
        onClose={handleClose}
        PaperProps={{
          style: { maxHeight: "200px", overflowY: "auto" },
        }}
      >
        <MenuItem disabled>Select Highest Age</MenuItem>
        {ageOptions.map((age) => (
          <MenuItem key={age} onClick={() => handleHighestAgeSelect(age)}>
            {age}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleHighestAgeSelect("80")}>80</MenuItem>
      </Menu>
    </DropdownContainer>
  );
};

export default AgeDropdown;

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

const DropdownHeader = styled.div`
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

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SelectedText = styled.span`
  padding: 10px;
  background-color: #7d12a3;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 50%;
`;

const BreakLine = styled.span`
  margin-top: 15px;
  border-top: 3px solid #7d12a3;
  padding: 10px;
`;
