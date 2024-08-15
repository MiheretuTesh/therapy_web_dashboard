import React, { useState } from 'react';
import MainContent from './MainContent';
import LeftSidebar from './LeftSidebar';
import styled from '@emotion/styled';
import { SubmitButton } from '../Shared';
import ChatRooms from '../Profile/ChatRooms';

const Settings: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Your account');

  const menuItems = [
    'Your account',
    'Security and account access',
    'Privacy and safety',
    'Notifications',
    'Accessibility, display, and languages',
    'Additional resources',
  ];

  return (
    <Container>
      <LeftSidebar
        activeItem={activeItem}
        menuItems={menuItems}
        onMenuItemClick={setActiveItem}
      />
      <MainContent activeItem={activeItem} />
      <RightBlockContainer>
        <SubmitButton>Create a meeting</SubmitButton>
        <ChatRooms />
      </RightBlockContainer>
    </Container>
  );
};

export default Settings;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
`;

const RightBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  padding: 20px;
`;
