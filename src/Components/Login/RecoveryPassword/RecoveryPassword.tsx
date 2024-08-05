import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomInputField, SubmitButton } from "../../Shared";
import { Routes } from "../../../constants/routes";

const RecoveryPassword: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const initialValues: { email: string } = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const handleSubmit = (values: { email: string }) => {
    console.log("Request send with values:", values);
    navigate(Routes.homePage);
  };

  const authValidationSchema = Yup.object({
    email: Yup.string().email(t("invalidEmail")).required(t("required")),
  });
  return (
    <Wrapper>
      <Title>{t("recoveryPassword")}</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={authValidationSchema}
      >
        <Form style={{ width: "100%" }}>
          <Field
            name="email"
            component={CustomInputField}
            label={t("email")}
            fullWidth
            margin="normal"
          />
          <SubmitButton type="submit">{t("sendMessage")}</SubmitButton>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default RecoveryPassword;

const Wrapper = styled.div`
  display: flex;
  width: 65%;
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
