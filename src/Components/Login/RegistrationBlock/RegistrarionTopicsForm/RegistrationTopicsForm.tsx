import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  onSubmit: () => void;
}

const RegistrationTopicsForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("topicsThatYouInterestIn")}</Title>
      <Description>{t("youCanChangeAnytime")}</Description>
      <SubmitButton onClick={onSubmit}>{t("createAccount")}</SubmitButton>
    </Wrapper>
  );
};

export default RegistrationTopicsForm;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  color: #130a38;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
`;

const Description = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  margin: 10px 0;
  width: 100%;
  padding: 20px !important;
  background: linear-gradient(90deg, #e617b2 0%, #48c1fe 100%);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 1s ease;

  &:hover {
    background: linear-gradient(90deg, #48c1fe 0%, #e617b2 95%);
  }
`;
