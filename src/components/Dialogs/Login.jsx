import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useTheme } from "@mui/material/styles";
import * as yup from "yup";
import { useLogin } from "../../hooks/useLogin";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email.").required('Email is required.'),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 character long.")
    .required(),
});

const Login = (props) => {
  const theme = useTheme();
  const { open, onClose ,handleLogin} = props;
  const {login} = useLogin();

  const handleClose = () => onClose();

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleClose();
      // handleLogin();
      // console.log(values);
      await login(values,handleLogin)
      formikLogin.resetForm();
      
      
    },
  });
  return (
    <>
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
      }}
      >
        <DialogTitle variant="h3" sx={{ textAlign: "center", py: 5 }}>
          Login Your Account
        </DialogTitle>
        <DialogContent sx={{ mx: { lg: 5 } }}>
          <form onSubmit={formikLogin.handleSubmit}>
            <Box sx={{ mb: 4 }}>
              <label htmlFor="email">Email</label>
              <TextField
                fullWidth
                id="email"
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.email}
                error={formikLogin.errors.email}
              />
              <FormHelperText sx={{color:'error.main'}}>
                {formikLogin.errors.email}
              </FormHelperText>
            </Box>
            <Box>
              <label htmlFor="password">Password</label>
              <TextField
                fullWidth
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.password}
                error={formikLogin.errors.password}
              />
              <FormHelperText sx={{color:'error.main'}}>
                {formikLogin.errors.password}
              </FormHelperText>
            </Box>
            <Box sx={{textAlign:'end',mb:1}}>
              <Link>Forgot Password?</Link>
            </Box>
            <Box>
              <FormControlLabel
                label='Remember me next time'
                control={<Checkbox/>}
              />
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
              Login
            </Button>
          </form>
          <Box sx={{display:'flex',justifyContent:'center',mt:4}}>
            <Typography>Don't have account? <Link>  Sign up</Link></Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
