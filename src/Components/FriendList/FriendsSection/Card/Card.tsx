import React from "react";
import styled from "@emotion/styled";
import IconButton from "../../../Shared/IconButton/IconButton";
import CloseSVG from "../../../../static/svg/close.svg";
import EyeSVG from "../../../../static/svg/eye.svg";
import AcceptSVG from "../../../../static/svg/accept.svg";
import PhoneSVG from "../../../../static/svg/Phone.svg";

const Card: React.FC<{
  imageSrc: string;
  text: string;
  request: boolean;
  blocked: boolean;
}> = ({ imageSrc, text, request, blocked }) => {
  return (
    <Container>
      <Image src={imageSrc} alt="Card Image" />
      <Text>{text}</Text>
      <IconButton
        imageSrc={EyeSVG}
        text="View"
        backgroundColor="#ff69b4"
        hoverBackgroundColor="#e05ec0"
        onClick={() => console.log("View button clicked")}
      />
      {!blocked && (
        <IconButton
          imageSrc={request ? AcceptSVG : PhoneSVG}
          text={request ? "Accept" : "Invite"}
          backgroundColor={`${request ? "#51EA7C" : "#8B9CFF"}`}
          hoverBackgroundColor={`${request ? "#4bd171" : "#7d8ffa"}`}
          onClick={() => console.log("View button clicked")}
        />
      )}
      <IconButton
        imageSrc={CloseSVG}
        text="Delete"
        backgroundColor="#E96C7A"
        hoverBackgroundColor="#d6636f"
        onClick={() => console.log("View button clicked")}
      />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 102px;
  padding: 0px 8px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 500;
  marign-bottom: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  padding: 0px 5px;
  margin-bottom: 5px;
`;
