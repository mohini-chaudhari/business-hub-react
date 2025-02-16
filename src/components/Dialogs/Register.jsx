import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import * as yup from "yup";
import { useCreateAccount } from "../../hooks/useCreateAccount";


const validationSchema = yup.object({
  firstName:yup.string().required('First Name is required.'),
  lastName:yup.string().required('Last name is required.'),
  email:yup.string().email('Invlaid email.').required('Email is required.'),
  password:yup.string().min(6,"Password must be atleast 6 character long.").required(),
  confirmPassword:yup.string().required().oneOf([yup.ref('password'),null],'Password and Confirm password must be match.'),
})

const Register = (props) => {
  const theme = useTheme();
  const { open, onClose } = props;
  const {signup} =useCreateAccount();
  const handleClose = () => onClose();

  const formikRegister = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema:validationSchema,
    onSubmit: async (values) => {
      handleClose();
      // console.log(values);
      await signup(values)
      formikRegister.resetForm();
    },
  });
  return (
    <Dialog open={open} onClose={handleClose} fullWidth
    sx={{
      "& .MuiDialog-container": {
        height: "auto",
      },
    }}
    PaperProps={{
      sx: {
        borderRadius: "15px",
      },
    }}>
      <DialogTitle variant="h3" sx={{ textAlign: "center", py: 5 }}>
        Create Your Account
      </DialogTitle>
      <DialogContent sx={{ mx: { lg: 5 } }}>
        <form onSubmit={formikRegister.handleSubmit}>
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid lg={5.8}>
              <Box sx={{ mb: 4 }}>
                <label htmlFor="firstName">First Name</label>
                <TextField
                  fullWidth
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={formikRegister.handleChange}
                  value={formikRegister.values.firstName}
                  error={formikRegister.errors.firstName}
                />
                <FormHelperText sx={{ color: "error.main" }}>
                  {formikRegister.errors.firstName}
                </FormHelperText>
              </Box>
            </Grid>
            <Grid lg={5.8}>
              <Box sx={{ mb: 4 }}>
                <label htmlFor="lastName">Last Name</label>
                <TextField
                  fullWidth
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={formikRegister.handleChange}
                  value={formikRegister.values.lastName}
                  error={formikRegister.errors.lastName}
                />
                <FormHelperText sx={{ color: "error.main" }}>
                  {formikRegister.errors.lastName}
                </FormHelperText>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mb: 4 }}>
            <label htmlFor="email">Email Address</label>
            <TextField
              fullWidth
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.email}
              error={formikRegister.errors.email}
            />
            <FormHelperText sx={{ color: "error.main" }}>
              {formikRegister.errors.email}
            </FormHelperText>
          </Box>
          <Box sx={{ mb: 4 }}>
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.password}
              error={formikRegister.errors.password}
            />
            <FormHelperText sx={{ color: "error.main" }}>
              {formikRegister.errors.password}
            </FormHelperText>
          </Box>
          <Box sx={{ mb: 4 }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <TextField
              fullWidth
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.confirmPassword}
              error={formikRegister.errors.confirmPassword}
            />
            <FormHelperText sx={{ color: "error.main" }}>
              {formikRegister.errors.confirmPassword}
            </FormHelperText>
          </Box>
          <Button
              type="submit"
              fullWidth
              sx={{
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                borderRadius:'15px',
                py: 2,
              }}
            >
              Sign up
            </Button>
        </form>
        <Box sx={{display:'flex',justifyContent:'center',mt:6}}>
            <Typography>Already have an account? <Link>  Sign in</Link></Typography>
          </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
