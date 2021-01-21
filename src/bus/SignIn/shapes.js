import { object, string } from "yup";

export const signIn = {
  shape: {
    username: "",
    password: "",
    rules: false,
    role: "",
  },
  schema: object().shape({
    password: string()
      .matches(/^(?!.* )/, "No space")
      .matches(/(?=.*?[0-9])/, "Need number")
      .matches(/(?=.*?[a-z])/, "Need lover case letter")
      .min(6, "Need min 6 letters")
      .required("Password is required"),
    username: string().required("Email is required"),
  }),
};
