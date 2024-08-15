import React, { useState } from "react";
import styled from "@emotion/styled";
import { KeyboardArrowRight } from "@mui/icons-material";
import RightArrowIcon from "../../../../static/svg/RightArrowIcon.svg";
import { messageLst } from "../../../../constants/data/cardData";

interface MessageSectionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageSection: React.FC<MessageSectionProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType =
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/webp" ||
        file.type === "application/pdf";
      const isValidSize = file.size <= 2 * 1024 * 1024; // 2 MB

      return isValidType && isValidSize;
    });

    if (validFiles.length > 0) {
      setSelectedFiles(validFiles);
    } else {
      alert(
        "Please select valid files (PNG, JPG, JPEG, WEBP, PDF) under 2 MB."
      );
    }
  };

  return (
    <>
      <ChatBlock>
        <PopCardHeader onClick={handleIconClick}>
          <CardText>Chat</CardText>
          <RightIconContainer src={RightArrowIcon} />
        </PopCardHeader>

        <ChatMessageBlock>
          {messageLst.map((message, index) => (
            <ChatMessage key={index} isCurrent={message.current}>
              <Message isCurrent={message.current}>{message.message}</Message>
              <Name>{!message.current && message.name}</Name>
            </ChatMessage>
          ))}
        </ChatMessageBlock>
      </ChatBlock>

      <ChatInputBlock>
        <PopCardHeader>
          <CardText>Message</CardText>
          <FileUploadLabel>
            + Add files
            <FileInput
              type="file"
              accept=".png,.jpg,.jpeg,.webp,.pdf"
              onChange={handleFileChange}
              multiple
            />
          </FileUploadLabel>
        </PopCardHeader>
        <SelectedFilesContainer>
          {selectedFiles.map((file, index) => (
            <FileItem key={index}>{file.name}</FileItem>
          ))}
        </SelectedFilesContainer>
        <MessageContainer>
          <TextAreaInput placeholder="Write the message" />
          <Button>
            <SendIConWrapper />
          </Button>
        </MessageContainer>
      </ChatInputBlock>
    </>
  );
};

export default MessageSection;

const ChatBlock = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: 10px;
  gap: 10px;
`;

const ChatMessageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #333 !important;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff !important;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white !important;
  }
`;

const PopCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatMessage = styled.div<{ isCurrent: boolean }>`
  width: ${({ isCurrent }) => !isCurrent && "100%"};
  max-width: ${({ isCurrent }) => (!isCurrent ? "100%" : "90%")};

  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: ${({ isCurrent }) => (!isCurrent ? "start" : "end")};
`;

const Message = styled.p<{ isCurrent: boolean }>`
  color: ${({ isCurrent }) => (isCurrent ? "black" : "#8e94a7")};
`;

const Name = styled.div`
  color: #7d12a3;
`;
const CardText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const ChatInputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 28%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: 10px;
  gap: 10px;
  curso
`;

const RightIconContainer = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 10px 10px;
`;

const SendIConWrapper = styled(KeyboardArrowRight)`
  width: 30.58px;
  height: 29.84px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 18.65px;
  font-weight: 100;
  color: #3a3a3a;
  outline: none;
  font-family: "Roboto", sans-serif;
  outline: 0;
  resize: none;
`;

const Button = styled.button`
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in;
  color: white;
  border: none;
  border-radius: 8.69px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const FileUploadLabel = styled.label`
  cursor: pointer;
  color: white;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectedFilesContainer = styled.div`
  position: absolute;
  right: 30%;
  top: 10;
  display: flex;
  flex-direction: column;
  max-width: 150px;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  z-index: 1;
`;

const FileItem = styled.div`
  font-size: 12px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
