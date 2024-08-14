import React from 'react';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

interface SidebarProps {
  activeItem: string;
  menuItems: string[];
  onMenuItemClick: (item: string) => void;
}

const LeftSidebar: React.FC<SidebarProps> = ({
  activeItem,
  menuItems,
  onMenuItemClick,
}) => {
  return (
    <Wrapper>
      <Heading>Settings</Heading>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon style={{ color: '#705cf6' }} />
        </SearchIconWrapper>
        <SearchBox placeholder="Search Settings" />
      </SearchContainer>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            selected={item === activeItem}
            onClick={() => onMenuItemClick(item)}
          >
            {item}
            {item === activeItem && <ChevronRightIcon />}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default LeftSidebar;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;

const Heading = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #48c1fe 0%, #e617b2 95%);
  padding: 8px 16px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const SearchIconWrapper = styled.div`
  margin-right: 8px;
`;

const SearchBox = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: #333;
  font-size: 14px;

  &::placeholder {
    color: #333;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li<{ selected?: boolean }>`
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  margin: 10px 0;
  padding: 12px 16px;
  background: ${(props) =>
    props.selected
      ? 'linear-gradient(90deg, #48c1fe 0%, #e617b2 95%)'
      : '#fff'};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) =>
    props.selected ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background: ${(props) =>
      props.selected
        ? 'linear-gradient(90deg, #48c1fe 0%, #e617b2 95%)'
        : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const ChevronRightIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid white;
`;
