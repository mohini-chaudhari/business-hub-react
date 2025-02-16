import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEditProfile } from "../../hooks/useEditProfile";
import profileUpdate from "../../resources/images/svg/profile_update.svg";

const validationSchema = yup.object({
  firstName: yup.string().required("Pleasse enter firstname.").trim(),
  lastName: yup.string().required("Pleasse enter lastname.").trim(),
  gender: yup.string().required("Please select your gender.").trim(),
  companyName: yup.string().required("PLease enter company name").trim(),
  jobTitle: yup.string().required("Please enter job role.").trim(),
  education: yup.string().required("Please enter edication").trim(),
  qualification: yup
    .string()
    .required("Please enter your qualification.")
    .trim(),
  aboutMe: yup.string().required("Please enter somthing about you").trim(),
  experienceYearMin: yup
    .number()
    .min(0, "Please enter valid number")
    .required("Required field."),
  experienceYearMax: yup
    .number()
    .min(yup.ref("experienceYearMin"), "Please enter valid number")
    .required("Required field."),
  educationYearMin: yup
    .number()
    .min(0, "Should be less than eding year")
    .required("Required field."),
  educationYearMax: yup
    .number()
    .min(yup.ref("experienceYearMin"), "Should be greater than starting year")
    .required("Required field."),
});
const EditProfile = ({ open, onClose }) => {
  const theme = useTheme();
  const { update } = useEditProfile();

  const userData = JSON.parse(sessionStorage.getItem("loginData"));

  const initialValues = {
    firstName: userData ? userData.firstName : "",
    lastName: userData ? userData.lastName : "",
    email: userData ? userData.email : "",
    gender: userData ? userData.gender : "",
    companyName: userData ? userData.companyName : "",
    education: userData ? userData.education : "",
    jobTitle: userData ? userData.jobTitle : "",
    aboutMe: userData ? userData.aboutMe : "",
    qualification: userData ? userData.qualification : "",
    experienceYearMin: userData ? userData.experienceYearMin : "",
    experienceYearMax: userData ? userData.experienceYearMax : "",
    educationYearMin: userData ? userData.educationYearMin : "",
    educationYearMax: userData ? userData.educationYearMax : "",
  };

  const formikEditProfile = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onClose();
      await update(values);
      console.log(values);
    },
  });

  return (
    <>
      <Dialog
        scroll="body"
        open={open}
        onClose={onClose}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "15px",
          },
        }}
      >
        <DialogTitle variant="h3" sx={{ textAlign: "center", py: 5 }}>
          Edit Profile
        </DialogTitle>
        <DialogContent sx={{ mx: { lg: 5 } }}>
          <form onSubmit={formikEditProfile.handleSubmit}>
            <Box>
              <label>Profile Picture</label>
              <Box position={"relative"}>
                <Avatar
                  sx={{
                    height: "100px",
                    width: "100px",
                    mb: 4,
                    bgcolor: theme.palette.primary.main,
                  }}
                ></Avatar>
                <img
                  src={profileUpdate}
                  style={{ position: "absolute", top: "40px", left: "35px" }}
                />
              </Box>
            </Box>
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
                    onChange={formikEditProfile.handleChange}
                    value={initialValues.firstName}
                    error={formikEditProfile.errors.firstName}
                  />
                  {/* <FormHelperText sx={{ color: "error.main" }}>
                    {formikEditProfile.errors.firstName}
                  </FormHelperText> */}
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
                    onChange={formikEditProfile.handleChange}
                    value={initialValues.lastName}
                    error={formikEditProfile.errors.lastName}
                  />
                  {/* <FormHelperText sx={{ color: "error.main" }}>
                    {formikEditProfile.errors.lastName}
                  </FormHelperText> */}
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mb: 4 }}>
              <label htmlFor="email">Email Address</label>
              <TextField
                disabled
                fullWidth
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formikEditProfile.handleChange}
                value={initialValues.email}
                error={formikEditProfile.errors.email}
              />
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.email}
              </FormHelperText>
            </Box>
            <Box sx={{ mb: 4 }}>
              <label htmlFor="gender">Gender</label>
              <Select
                id="gender"
                name="gender"
                onChange={formikEditProfile.handleChange}
                variant="outlined"
                fullWidth
                defaultValue={initialValues.gender}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.gender}
              </FormHelperText>
            </Box>
            <Box fullWidth px={0}>
              <label>Experience</label>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="companyName"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      onChange={formikEditProfile.handleChange}
                      value={initialValues.companyName}
                      error={formikEditProfile.errors.companyName}
                    />
                    <FormHelperText sx={{ color: "error.main" }}>
                      {formikEditProfile.errors.companyName}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="jobTitle"
                      type="text"
                      name="jobTitle"
                      placeholder="Job role"
                      onChange={formikEditProfile.handleChange}
                      value={initialValues.jobTitle}
                      error={formikEditProfile.errors.jobTitle}
                    />
                    <FormHelperText sx={{ color: "error.main" }}>
                      {formikEditProfile.errors.jobTitle}
                    </FormHelperText>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
              <Stack
                direction={"row"}
                width={"50%"}
                gap={1}
                alignItems={"center"}
                mt={"10px"}
              >
                <TextField
                  id="experienceYearMin"
                  name="experienceYearMin"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  // value={values.experienceYearMin}
                  sx={{ width: "50%" }}
                  defaultValue={initialValues.experienceYearMin}
                ></TextField>

                <Typography fontSize={"14px"}>TO</Typography>

                <TextField
                  id="experienceYearMax"
                  name="experienceYearMax"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  // value={values.experienceYearMax}
                  sx={{ width: "50%" }}
                  defaultValue={initialValues.experienceYearMax}
                ></TextField>
              </Stack>
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.experienceYearMin}
              </FormHelperText>
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.experienceYearMax}
              </FormHelperText>
            </Box>
            <Box fullWidth px={0}>
              <label>Education</label>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="education"
                      type="text"
                      name="education"
                      placeholder="School/College"
                      onChange={formikEditProfile.handleChange}
                      value={initialValues.education}
                      error={formikEditProfile.errors.education}
                    />
                    <FormHelperText sx={{ color: "error.main" }}>
                      {formikEditProfile.errors.education}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="qualification"
                      type="text"
                      name="qualification"
                      placeholder="Qualification"
                      onChange={formikEditProfile.handleChange}
                      value={initialValues.qualification}
                      error={formikEditProfile.errors.qualification}
                    />
                    <FormHelperText sx={{ color: "error.main" }}>
                      {formikEditProfile.errors.qualification}
                    </FormHelperText>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
              <Stack
                direction={"row"}
                width={"50%"}
                gap={1}
                alignItems={"center"}
                mt={"10px"}
              >
                <TextField
                  id="educationYearMin"
                  name="educationYearMin"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  // value={values.experienceYearMin}
                  sx={{ width: "50%" }}
                  defaultValue={initialValues.educationYearMin}
                ></TextField>

                <Typography fontSize={"14px"}>TO</Typography>

                <TextField
                  id="educatinYearMax"
                  name="educationYearMax"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  // value={values.experienceYearMax}
                  sx={{ width: "50%" }}
                  defaultValue={initialValues.educationYearMax}
                ></TextField>
              </Stack>
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.educationYearMax}
              </FormHelperText>
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.educationYearMin}
              </FormHelperText>
            </Box>

            <Box sx={{ mb: 4 }}>
              <label htmlFor="aboutMe">About you</label>
              <TextField
                multiline
                fullWidth
                id="aboutMe"
                type="aboutMe"
                name="aboutMe"
                placeholder="Write somthing avout you..."
                onChange={formikEditProfile.handleChange}
                value={initialValues.aboutMe}
                error={formikEditProfile.errors.aboutMe}
              />
              <FormHelperText sx={{ color: "error.main" }}>
                {formikEditProfile.errors.aboutMe}
              </FormHelperText>
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                py: 2,
                mb: 4,
              }}
            >
              Update Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
