import React from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../../../static/images/photo_user.png';

const mockData = [
  {
    id: 1,
    photo: LogoIcon,
    userName: 'Kayn Vampyr',
    text: 'My most vampire brother of all, I consider you godsend.',
  },
  {
    id: 2,
    photo: LogoIcon,
    userName: 'Kayn Vampyr',
    text: 'My most vampire brother of all, I consider you godsend.',
  },
  {
    id: 3,
    photo: LogoIcon,
    userName: 'Kayn Vampyr',
    text: 'My most vampire brother of all, I consider you godsend.',
  },
  {
    id: 4,
    photo: LogoIcon,
    userName: 'Kayn Vampyr',
    text: 'My most vampire brother of all, I consider you godsend.',
  },
  {
    id: 5,
    photo: LogoIcon,
    userName: 'Kayn Vampyr',
    text: 'My most vampire brother of all, I consider you godsend.',
  },
];

const Comment: React.FC = () => {
  return (
    <Wrapper>
      <Title>Comments (39)</Title>
      {mockData.map((item) => (
        <CommentWrapper key={item.id}>
          <LabelWrapper>
            <UserPhoto src={item.photo} alt="Logo" />
            <Label>{item.userName}</Label>
          </LabelWrapper>
          <Description>{item.text}</Description>
        </CommentWrapper>
      ))}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  height: 34%;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  overflow: auto;
  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 34%;
`;

const CommentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ed2590;
  padding: 10px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
`;

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding-left: 35px;
`;
