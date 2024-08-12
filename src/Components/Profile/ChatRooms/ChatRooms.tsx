import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants';
import styled from '@emotion/styled';
import ChatRoomCard from '../../Shared/ChatRoomCard';

const mockDataToday = [
  {
    id: 1,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 2,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 3,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
];

const mockDataWeek = [
  {
    id: 1,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 2,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 3,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 4,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 5,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 6,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },  {
    id: 7,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 8,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
  {
    id: 9,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: 'Video Room:',
    label: 'Why We Love Music',
    date: '12.10 | 12:00',
    url: '/chatRooms',
  },
];

const ChatRooms: React.FC = () => {
  const navigate = useNavigate();

  const toChatRoomsPage = () => {
    navigate(`${Routes.chatRooms}`);
  };

  return (
    <Wrapper>
      <Flex>
        <Title>Chat Rooms (9)</Title>
        <LinkText color="#f368d0" onClick={toChatRoomsPage}>
          See all
        </LinkText>
      </Flex>
      <LinkText color="#f368d0" onClick={toChatRoomsPage}>
        Schedulled Today:
      </LinkText>
      <ItemWrapper>
      {mockDataToday.map((item) => (
          <ChatRoomCard key={item.id} item={item} />
        ))}
      </ItemWrapper>
      <LinkText color="#f368d0" onClick={toChatRoomsPage}>
        Schedulled This Week:
      </LinkText>
      <ItemWrapper>
        {mockDataWeek.map((item) => (
          <ChatRoomCard key={item.id} item={item} />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default ChatRooms;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 10px;
  overflow-y: auto;
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

const LinkText = styled.a<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
