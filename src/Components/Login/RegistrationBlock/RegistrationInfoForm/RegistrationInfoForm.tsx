import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import { userRoleList } from "../../../../constants";
import { IRegistrationInfoForm } from "../../../../constants/types";
import { SubmitButton } from "../../../Shared";

interface IProps {
  handleStepChange: (num: number, values: any) => void;
}

const RegistrationInfoForm: React.FC<IProps> = (props) => {
  const { handleStepChange } = props;

  const { t } = useTranslation();

  const initialValues: IRegistrationInfoForm = useMemo(
    () => ({
      age: "",
      mainLanguage: "",
      additionalLanguage: "",
      gender: "",
      profession: "",
      relationshipStatus: "",
    }),
    []
  );

  const handleSubmit = (values: IRegistrationInfoForm) => {
    handleStepChange(2, values); //Change to ENUM later
  };

  const validationSchema = Yup.object({
    age: Yup.number().min(0).max(100).required("Required"),
    mainLanguage: Yup.string().required("Required"),
    additionalLanguage: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    profession: Yup.string().required("Required"),
    relationshipStatus: Yup.string().required("Required"),
  });

  return (
    <Wrapper>
      <Title>{t("pleaseFillYourInfo")}</Title>
      <Description>{t("youCanChangeAnytime")}</Description>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
        }: FormikProps<IRegistrationInfoForm>) => (
          <Form style={{ width: "100%" }}>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={touched.age && Boolean(errors.age)}
            >
              <TextField
                id="age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                inputProps={{
                  min: 0,
                  max: 100,
                }}
                variant="standard"
                label="Age"
                fullWidth
                error={Boolean(touched.age && errors.age)}
                helperText={touched.age && errors.age}
              />
            </FormControl>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={touched.mainLanguage && Boolean(errors.mainLanguage)}
            >
              <InputLabel>Main language that you use</InputLabel>
              <Select
                name="mainLanguage"
                value={values.mainLanguage}
                onChange={handleChange}
                variant="standard"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ru">Русский</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
              </Select>
              <FormHelperText>
                {touched.mainLanguage && errors.mainLanguage}
              </FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={
                touched.additionalLanguage && Boolean(errors.additionalLanguage)
              }
            >
              <InputLabel>Additional language that you use</InputLabel>
              <Select
                name="additionalLanguage"
                value={values.additionalLanguage}
                onChange={handleChange}
                variant="standard"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ru">Русский</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
              </Select>
              <FormHelperText>
                {touched.additionalLanguage && errors.additionalLanguage}
              </FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={touched.gender && Boolean(errors.gender)}
            >
              <InputLabel>Your gender</InputLabel>
              <Select
                name="gender"
                value={values.gender}
                onChange={handleChange}
                variant="standard"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <FormHelperText>{touched.gender && errors.gender}</FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={touched.profession && Boolean(errors.profession)}
            >
              <InputLabel>Specialization / Profession</InputLabel>
              <Select
                name="profession"
                value={values.profession}
                onChange={handleChange}
                variant="standard"
              >
                {userRoleList.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {t(item.label)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {touched.profession && errors.profession}
              </FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              error={
                touched.relationshipStatus && Boolean(errors.relationshipStatus)
              }
            >
              <InputLabel>Relationship status</InputLabel>
              <Select
                name="relationshipStatus"
                value={values.relationshipStatus}
                onChange={handleChange}
                variant="standard"
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <FormHelperText>
                {touched.relationshipStatus && errors.relationshipStatus}
              </FormHelperText>
            </FormControl>
            <SubmitButton type="submit">{t("nextStep")}</SubmitButton>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegistrationInfoForm;

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
