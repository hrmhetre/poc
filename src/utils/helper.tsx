import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.number()
    .required("Phone Number is required")
    .min(10, "PhoneNumber must be at least 10 number"),
  desigination: Yup.string().required("desigination is required"),
});
