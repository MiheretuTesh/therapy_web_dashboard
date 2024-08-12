import React from "react";
import styled from "@emotion/styled";
import Card from "./Card/Card";
import UserOne from "../../../static/images/friend_one.png";
import UserTwo from "../../../static/images/friend_two.png";
import UserThree from "../../../static/images/friend_three.png";

const images = [UserTwo, UserOne, UserThree];

const texts = ["Von Dracula", "Olivia Joestar", "Аiavolo H."];

const cardDataArray = Array.from({ length: 8 }, (_, index) => ({
  imageSrc: `${images[index % images.length]}`,
  text: texts[index % texts.length],
}));

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Text>Friends (29)</Text>
        <Caption>See all</Caption>
      </TextContainer>

      <CardContainer>
        {cardDataArray.map((data, index) => (
          <Card
            key={index}
            imageSrc={data.imageSrc}
            text={data.text}
            request={false}
            blocked={false}
          />
        ))}
      </CardContainer>

      <TextContainer>
        <Text>Friend requests (9)</Text>
      </TextContainer>

      <CardContainer>
        {cardDataArray.map((data, index) => (
          <Card
            key={index}
            imageSrc={data.imageSrc}
            text={data.text}
            request={true}
            blocked={false}
          />
        ))}
      </CardContainer>

      <TextContainer>
        <Text>Block list (9)</Text>
      </TextContainer>

      <CardContainer>
        {cardDataArray.map((data, index) => (
          <Card
            key={index}
            imageSrc={data.imageSrc}
            text={data.text}
            request={false}
            blocked={true}
          />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 20px 5px;

  overflow: auto;

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

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: "Roboto", sans-serif;
`;

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 500;
`;
const Caption = styled.div`
  font-family: "Roboto", sans-serif;
  color: #ed2590;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
