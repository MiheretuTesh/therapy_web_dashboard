import styled from '@emotion/styled';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants';

interface IProps {
  item: {
    id: number;
    photo: any;
    userName: string;
  };
}

const FriendCard: React.FC<IProps> = ({ item }) => {
  const navigate = useNavigate();

  const toFriendListPage = () => {
    navigate(`${Routes.friendList}`);
  };

  return (
    <Item key={item.id}>
      <UserPhoto src={item.photo} alt="Logo" />
      <Label>{item.userName}</Label>
      <ButtonCustom onClick={toFriendListPage}>
        <RemoveRedEyeIcon />
        View
      </ButtonCustom>
    </Item>
  );
};

export default FriendCard;

const Item = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 33%;
`;

const UserPhoto = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 10px;
`;

const Label = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

const ButtonCustom = styled.button`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background-color: #f368d0;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;
