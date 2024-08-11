import React from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../../../static/images/photo_user.png';
import { FriendCard } from '../../Shared';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants';

const mockData = [
  {
    id: 1,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
  {
    id: 2,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
  {
    id: 3,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
  {
    id: 4,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
  {
    id: 5,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
  {
    id: 6,
    photo: LogoIcon,
    userName: 'Kayn V',
    url: '/friendList',
  },
];

const FriendsList: React.FC = () => {
  const navigate = useNavigate();

  const toFriendListPage = () => {
    navigate(`${Routes.friendList}`);
  };

  return (
    <Wrapper>
      <Flex>
        <Title>Friends (9)</Title>
        <LinkText onClick={toFriendListPage}>See all</LinkText>
      </Flex>
      <ItemWrapper>
        {mockData.map((item) => (
          <FriendCard item={item} />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default FriendsList;

const Wrapper = styled.div`
  height: 64%;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

const LinkText = styled.a`
  color: #f368d0;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;
  flex-wrap: wrap;
`;
