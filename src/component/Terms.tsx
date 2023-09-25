import { Checkbox, FormControlLabel, Grid } from "@mui/material";

import { useFormik } from "formik";
import { validationSchema } from "../utils/helper";

const Terms: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Grid item xs={12}>
        <FormControlLabel
          required
          control={<Checkbox name="agreeToTerms" />}
          label={"I agree to the Terms and Conditions"}
        />
      </Grid>
    </div>
  );
};
export default Terms;
