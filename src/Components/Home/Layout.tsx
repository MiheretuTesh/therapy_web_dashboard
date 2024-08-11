import React from 'react';
import styled from '@emotion/styled';

const Layout: React.FC = () => {
  return <Wrapper>Home Page</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;
