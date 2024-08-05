import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../../static/images/home_background.png";
import HeaderComponent from "../Header";
import Sidebar from "../Sidebar";

interface IProps {
  children: ReactElement;
}

const ContentWrapper: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Sidebar />
      <ContentBox>
        <HeaderComponent />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ContentBox>
    </Wrapper>
  );
};

export default ContentWrapper;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
`;

const ChildrenWrapper = styled.div`
  color: white;
  width: 100%;
  height: 95%;
  padding: 20px;
`;
