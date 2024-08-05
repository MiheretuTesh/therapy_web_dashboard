import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const HeaderComponent: React.FC = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    console.log("Logout");
  };

  return (
    <Wrapper>
      <ToolbarWrapper>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="primary" />
          </Badge>
        </IconButton>
        <ProfileWrapper>
          <Avatar src="path_to_your_image.jpg" alt="Adamy Yang" />
          <Label>Adamy Yang</Label>
          <IconButton onClick={handleMenuOpen}>
            <ArrowDropDownIcon color="secondary" />
          </IconButton>
        </ProfileWrapper>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>
        </Menu>
      </ToolbarWrapper>
    </Wrapper>
  );
};

export default HeaderComponent;

const Wrapper = styled(AppBar)`
  display: flex;
  align-items: flex-end;
  height: 5%;
  width: 100%;
  background: transparent;
  box-shadow: none;
  position: static;
`;

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Label = styled(Typography)`
  margin-left: 8px;
`;
