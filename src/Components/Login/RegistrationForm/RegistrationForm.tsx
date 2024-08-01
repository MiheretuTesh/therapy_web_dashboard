import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Google, Apple, Facebook } from "@mui/icons-material";
import { Field, Form, Formik, FieldProps, FormikProps } from "formik";
import * as Yup from "yup";
import { CustomInputField } from "../../Shared";
import { ISignUpFormValues } from "../../../constants/types";
import { Routes } from "../../../constants/routes";

const Wrapper = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  white-space: nowrap;
  font-size: 60px;
  color: #130a38;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
`;

const OrText = styled.span`
  font-size: 20px;
  color: #f368d0;
  font-weight: 800;
  margin: 20px 0;
  font-family: "Montserrat", sans-serif;
`;

const LoginSocialButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  display: flex;
  width: 47%;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 1250px) {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
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

const LinkText = styled.a`
  color: #f368d0;
  font-weight: 800;
  cursor: pointer;
  text-decoration: underline;
`;

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const toLogInPage = () => {
    navigate(`${Routes.logIn}`);
  };

  const initialValues: ISignUpFormValues = useMemo(
    () => ({
      name: "",
      email: "",
      password: "",
      terms: false,
    }),
    []
  );

  const handleSubmit = (values: ISignUpFormValues) => {
    console.log(values);
  };

  const authValidationSchema = Yup.object({
    name: Yup.string().required(t("required")),
    email: Yup.string().email(t("invalidEmail")).required(t("required")),
    password: Yup.string().min(8, t("passwordMin")).required(t("required")),
    terms: Yup.bool().oneOf([true], t("acceptTerms")),
  });

  return (
    <Wrapper>
      <Title>{t("createAccount")}</Title>
      <LoginSocialButtonsWrapper>
        <SocialButton>
          <Google /> {t("signUpWith")} Google
        </SocialButton>
        <SocialButton>
          <Facebook /> {t("signUpWith")} Facebook
        </SocialButton>
        <SocialButton>
          <Apple /> {t("signUpWith")} Apple ID
        </SocialButton>
      </LoginSocialButtonsWrapper>
      <OrText>- {t("OR")} -</OrText>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={authValidationSchema}
      >
        <Form>
          <Field
            name="name"
            component={CustomInputField}
            label="Name"
            fullWidth
            margin="normal"
          />
          <Field
            name="email"
            component={CustomInputField}
            label="Email Address"
            fullWidth
            margin="normal"
          />
          <Field
            name="password"
            component={CustomInputField}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <Field name="terms">
            {({
              field,
              form,
              meta,
            }: FieldProps<boolean, FormikProps<ISignUpFormValues>>) => (
              <TermsContainer>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value}
                      onChange={(e) =>
                        form.setFieldValue(field.name, e.target.checked)
                      }
                    />
                  }
                  label={
                    <>
                      {t("iAccept")}{" "}
                      <LinkText target="_blank" href="https://www.google.com">
                        {t("termsOfUse")}
                      </LinkText>{" "}
                      {t("and")}{" "}
                      <LinkText target="_blank" href="https://www.google.com">
                        {t("privacyPolicy")}
                      </LinkText>
                    </>
                  }
                />
                {meta.touched && meta.error && (
                  <FormHelperText error>{meta.error}</FormHelperText>
                )}
              </TermsContainer>
            )}
          </Field>
          <SubmitButton type="submit">{t("createAccount")}</SubmitButton>
        </Form>
      </Formik>
      <div>
        {t("alreadyHaveAnAccount")}{" "}
        <LinkText onClick={toLogInPage}>{t("logIn")}</LinkText>
      </div>
    </Wrapper>
  );
};

export default RegistrationForm;
