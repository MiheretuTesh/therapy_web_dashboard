export interface ILoginFormValues {
  email: string;
  password: string;
  terms: boolean;
}

export interface IRegistrationForm extends ILoginFormValues {
  name: string;
}

export interface IRegistrationInfoForm {
  age: string;
  mainLanguage: string;
  additionalLanguage: string;
  gender: string;
  profession: string;
  relationshipStatus: string;
}

export interface IRegistrationValues
  extends IRegistrationForm,
    IRegistrationInfoForm {}
