import React from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
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
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { Routes } from "../../../constants";

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
          <Description>Portuguese, English</Description>
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
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.span`
  font-family: "Roboto", sans-serif;
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
  margin: 10px 0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #A4A4A5;
  padding-bottom: 5px;
  width: 25%;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: black;
  padding-bottom: 5px;
  width: 75%;
`;

const Votes = styled.span<{ color: string }>`
  font-family: "Roboto", sans-serif;
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
`;