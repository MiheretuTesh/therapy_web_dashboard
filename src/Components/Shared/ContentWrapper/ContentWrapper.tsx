import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../../static/images/home_background.png";

interface IProps {
  children: ReactElement;
}

const ContentWrapper: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default ContentWrapper;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
