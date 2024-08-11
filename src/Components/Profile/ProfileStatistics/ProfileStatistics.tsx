import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chip, Rating } from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  NavigateNext,
  Star,
  StarBorder,
  EmojiEmotions,
  InsertEmoticon,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from '@mui/icons-material';
import styled from '@emotion/styled';
import { Routes } from '../../../constants';

const topics = [
  'Family',
  'Cooking',
  'Food',
  'Parents',
  'Marriage',
  'Relationship',
  'Girlfriends',
  'Boyfriends',
  'Intimacy',
  'Sisters',
  'Dogs',
];

const ProfileStatistics: React.FC = () => {
  const navigate = useNavigate();

  const toPage = (link: string) => {
    navigate(link);
  };

  return (
    <Wrapper>
      <BreadCrumbs>
        <LinkText onClick={() => toPage(Routes.homePage)}>Home</LinkText>
        <NavigateNext fontSize="small" />
        <LinkText onClick={() => toPage(Routes.profile)}>Profile</LinkText>
      </BreadCrumbs>
      <Name>Dulce Maria</Name>
      <MessageBox>
        <Triangle />I Only See Ghosts; They Are Inside You (8)
      </MessageBox>
      <StatBlock>
        <StatItem>
          <Label>Celebrity</Label>
          <Votes color="#FACF41">85 votes</Votes>
          <StyledRating
            color="#FACF41"
            name="customized-color"
            size="small"
            readOnly
            defaultValue={4}
            precision={0.5}
            icon={<Star fontSize="inherit" />}
            emptyIcon={<StarBorder fontSize="inherit" />}
          />
        </StatItem>
        <StatItem>
          <Label>Trustiness</Label>
          <Votes color="#F368D0">12 votes</Votes>
          <StyledRating
            color="#F368D0"
            name="customized-color"
            size="small"
            readOnly
            defaultValue={2}
            precision={0.5}
            icon={<EmojiEmotions fontSize="inherit" />}
            emptyIcon={<InsertEmoticon fontSize="inherit" />}
          />
        </StatItem>
        <StatItem>
          <Label>Friendly</Label>
          <Votes color="#26CAFF">54 votes</Votes>
          <StyledRating
            color="#26CAFF"
            name="customized-color"
            size="small"
            readOnly
            defaultValue={2.5}
            precision={0.5}
            icon={<ThumbUpAlt fontSize="inherit" />}
            emptyIcon={<ThumbUpOffAlt fontSize="inherit" />}
          />
        </StatItem>
        <StatItem>
          <Label>Sexy</Label>
          <Votes color="#ff6d75">16 votes</Votes>
          <StyledRating
            color="#ff6d75"
            name="customized-color"
            size="small"
            readOnly
            defaultValue={2.5}
            precision={0.5}
            icon={<Favorite fontSize="inherit" />}
            emptyIcon={<FavoriteBorder fontSize="inherit" />}
          />
        </StatItem>
      </StatBlock>
      <InfoBlock>
        <InfoItem>
          <Label>Relationships</Label>
          <Description>Single</Description>
        </InfoItem>
        <InfoItem>
          <Label>Gender</Label>
          <Description>Male</Description>
        </InfoItem>
        <InfoItem>
          <Label>Orientation</Label>
          <Description>Pansexual</Description>
        </InfoItem>
        <InfoItem>
          <Label>About Myself</Label>
          <Description>
            Just an emo boy looking for people to share art and music :3
          </Description>
        </InfoItem>
        <InfoItem>
          <Label>Country</Label>
          <Description>Brazil</Description>
        </InfoItem>
        <InfoItem>
          <Label>Languages</Label>
          <Description>Portuguese, English</Description>
        </InfoItem>
        <InfoItem>
          <Label>Favorites</Label>
          <ChipWrapper>
            {topics.map((topic, index) => (
              <StyledChip
                key={topic}
                label={topic}
                variant="filled"
                color={index % 2 === 0 ? 'secondary' : 'primary'}
              />
            ))}
          </ChipWrapper>
        </InfoItem>
      </InfoBlock>
    </Wrapper>
  );
};

export default ProfileStatistics;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  width: 64%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

const LinkText = styled.a`
  color: #f368d0;
  font-weight: 800;
  cursor: pointer;
`;

const StatBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
`;

const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #a4a4a5;
  padding-bottom: 5px;
  width: 25%;
`;

const Description = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: black;
  padding-bottom: 5px;
  width: 75%;
`;

const Votes = styled.span<{ color: string }>`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.color};
  padding-bottom: 5px;
`;

const StyledRating = styled(Rating)<{ color: string }>`
  & .MuiRating-iconFilled {
    color: ${(props) => props.color};
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  display: flex;
  margin: 3px;
`;

const ChipWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const StyledChip = styled(Chip)`
  cursor: pointer;
  border-radius: 0;
`;

const MessageBox = styled.div`
  position: relative;
  background-color: #f1f5f9;
  border-radius: 10px;
  padding: 8px 16px;
  display: inline-block;
  font-size: 16px;
  color: #374151;
  margin: 10px 0;
`;

const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #f1f5f9;
  transform: translateY(-50%);
`;
