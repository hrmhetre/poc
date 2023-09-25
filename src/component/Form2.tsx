import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserContext } from "../utils/UserContext";
import { Button, TextField, Stack, Container, Paper } from "@mui/material";

const validationSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.number()
    .required("Phone Number is required")
    .min(3, "PhoneNumber must be at least 10 number"),
  desigination: Yup.string().required("desigination is required"),
});

const ContactForm: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const { users, selectedUserId } = state;

  const formik = useFormik({
    initialValues: {
      address: "",
      phoneNumber: "",
      desigination: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.address.trim() === "" || selectedUserId === null) return;

      const selectedUser = users.find((user) => user.id === selectedUserId);

      if (selectedUser) {
        const updatedUser = {
          ...selectedUser,
          address: values.address.trim(),
          phoneNumber: values.phoneNumber.trim(),
          desigination: values.desigination.trim(),
        };
        dispatch({ type: "EDIT_USER", payload: updatedUser });
      }

      formik.resetForm();
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <h2>Additional details</h2>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Enter Address"
              variant="outlined"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />

            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Enter Phone-Number"
              variant="outlined"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />

            <TextField
              fullWidth
              id="desigination"
              name="desigination"
              label="Enter Your desigination"
              variant="outlined"
              value={formik.values.desigination}
              onChange={formik.handleChange}
              error={
                formik.touched.desigination &&
                Boolean(formik.errors.desigination)
              }
              helperText={
                formik.touched.desigination && formik.errors.desigination
              }
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!formik.isValid}
            >
              Update details
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
