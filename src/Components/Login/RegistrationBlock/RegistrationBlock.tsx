import React, { useState } from "react";
import styled from "@emotion/styled";
import { SignUpStep } from "../../../constants";
import RegistrationForm from "./RegistrationForm";
import RegistrationInfoForm from "./RegistrationInfoForm";
import RegistrationTopicsForm from "./RegistrarionTopicsForm";
import {
  IRegistrationInfoForm,
  IRegistrationForm,
} from "../../../constants/types";

const Wrapper = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  align-items: center;
`;

const RegistrationBlock: React.FC = () => {
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

  const handleSubmit = () => {
    console.log("Request send with values:", requestObj);
  };

  return (
    <Wrapper>
      {isForm && <RegistrationForm handleStepChange={handleStepChange} />}
      {isFillInfo && (
        <RegistrationInfoForm handleStepChange={handleStepChange} />
      )}
      {isTopics && <RegistrationTopicsForm onSubmit={handleSubmit} />}
    </Wrapper>
  );
};

export default RegistrationBlock;
