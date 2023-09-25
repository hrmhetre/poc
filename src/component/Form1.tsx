import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserContext } from "../utils/UserContext";
import { TextField, Button, Paper, Container, Stack } from "@mui/material";
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
});
const UserForm: React.FC = () => {
  const { dispatch } = useUserContext();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
      desigination: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newUser = {
        id: Date.now(),
        username: values.username.trim(),
        email: values.email.trim(),
        address: values.address.trim(),
        desigination: values.address.trim(),
        phoneNumber: values.address.trim(),
      };
      dispatch({ type: "ADD_USER", payload: newUser });
      dispatch({ type: "SELECT_USER", payload: newUser.id });
      formik.resetForm();
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <h2>Register details</h2>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Enter username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Enter E-mail"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!formik.isValid}
            >
              Add User
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
