import React from 'react';
import styled from '@emotion/styled';
import CalendarBlock from './CalendarBlock';
import UploadBackground from './UploadBackground';
import ProfileStatistics from './ProfileStatistics';
import FriendsList from './FriendList';
import { Comment } from './../Shared';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <CalendarBlock />
      <MiddleBlockWrapper>
        <UploadBackground />
        <MiddleContainer>
          <ProfileStatistics />
          <Social>
            <FriendsList />
            <Comment />
          </Social>
        </MiddleContainer>
      </MiddleBlockWrapper>
      <RightBlock></RightBlock>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

const MiddleBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64%;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 34%;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  background-color: white;
`;
