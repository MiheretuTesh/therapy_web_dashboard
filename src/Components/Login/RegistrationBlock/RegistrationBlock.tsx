import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import RegistrationInfoForm from "./RegistrationInfoForm";
import RegistrationTopicsForm from "./RegistrarionTopicsForm";
import { Routes, SignUpStep } from "../../../constants";
import {
  IRegistrationInfoForm,
  IRegistrationForm,
  IRegistrationTopicsForm,
} from "../../../constants/types";

const RegistrationBlock: React.FC = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(SignUpStep.Form);
  const [requestObj, setRequestObj] = useState({});

  const isForm = step === SignUpStep.Form;
  const isFillInfo = step === SignUpStep.FillInfo;
  const isTopics = step === SignUpStep.Topics;

  const handleStepChange = (
    num: number,
    values: IRegistrationForm | IRegistrationInfoForm
  ) => {
    setStep(num);
    setRequestObj({ ...requestObj, ...values });
  };

  const handleSubmit = (values: IRegistrationTopicsForm) => {
    console.log("Request send with values:", { ...values, ...requestObj });
    navigate(Routes.homePage);
  };

  return (
    <Wrapper>
      {isForm && <RegistrationForm handleStepChange={handleStepChange} />}
      {isFillInfo && (
        <RegistrationInfoForm handleStepChange={handleStepChange} />
      )}
      {isTopics && <RegistrationTopicsForm handleSubmit={handleSubmit} />}
    </Wrapper>
  );
};

export default RegistrationBlock;

const Wrapper = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  align-items: center;
`;
