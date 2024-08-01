export interface ILoginFormValues {
  email: string;
  password: string;
  terms: boolean;
}

export interface ISignUpFormValues extends ILoginFormValues {
  name: string;
}
