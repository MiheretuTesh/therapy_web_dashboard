import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HelpOutline, Logout } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import LogoIcon from "../../../static/images/logo.png";
import { sidebarRoutes } from "../../../constants";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <SidebarWrapper>
      <SidebarBox>
        <LogoWrapper>
          <img src={LogoIcon} alt="Logo" />
        </LogoWrapper>
        {sidebarRoutes.map((item) => (
          <SidebarLinkBox key={item.id} pathname={pathname} url={item.url}>
            <SidebarLink to={item.url} pathname={pathname} url={item.url}>
              <IconWrapper>
                <item.Icon />
              </IconWrapper>
              {t(`${item.label}`)}
            </SidebarLink>
          </SidebarLinkBox>
        ))}
      </SidebarBox>
      <SidebarBox>
        <SidebarLinkBox pathname={pathname} url={"/help"}>
          <SidebarLink to={"/help"} pathname={pathname} url={"/help"}>
            <IconWrapper>
              <HelpOutline />
            </IconWrapper>
            {t("help")}
          </SidebarLink>
        </SidebarLinkBox>
        <SidebarLinkBox>
          <SidebarLink to={"/login"}>
            <IconWrapper>
              <Logout />
            </IconWrapper>
            {t("logout")}
          </SidebarLink>
        </SidebarLinkBox>
      </SidebarBox>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  padding: 20px 0;
  height: 100%;
  background-color: #140a38;
`;

const SidebarBox = styled.div`
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SidebarLinkBox = styled.div<{ pathname?: string; url?: string }>`
  width: 100%;
  margin: 10px 0;
  padding-left: 20px;
  background-color: ${({ pathname, url }) =>
    pathname && url && pathname.includes(url) ? "white" : "transparent"};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const SidebarLink = styled(Link)<{ pathname?: string; url?: string }>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${({ pathname, url }) =>
    pathname && url && pathname.includes(url) ? "#140a38" : "white"};
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;

  svg {
    width: 40px;
    height: 40px;
  }
`;
