import axios from "axios";
import { useSnackbar } from "notistack";

export const useEditProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  let token;

  if (sessionStorage.getItem("loginData")) {
    token = JSON.parse(sessionStorage.getItem("loginData")).token;
  }

  const update = (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      companyName: values.companyName,
      education: values.education,
      jobTitle: values.jobTitle,
      aboutMe: values.aboutMe,
      qualification: values.qualification,
      experienceYearMin: parseInt(values.experienceYearMin),
      experienceYearMax: parseInt(values.experienceYearMax),
      educationYearMin: parseInt(values.educationYearMin),
      educationYearMax: parseInt(values.educationYearMax),
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/users/update`, body, config)
      .then((response) => {
        if (response.data) {
          if (response?.data) {
            enqueueSnackbar("Profile updaed successfully.", {
              variant: "success",
            });
          }
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              gender: values.gender,
              companyName: values.companyName,
              education: values.education,
              jobTitle: values.jobTitle,
              aboutMe: values.aboutMe,
              qualification: values.qualification,
              experienceYearMin: parseInt(values.experienceYearMin),
              experienceYearMax: parseInt(values.experienceYearMax),
              educationYearMin: parseInt(values.educationYearMin),
              educationYearMax: parseInt(values.educationYearMax),
              token: token,
            })
          );
        }else {
          enqueueSnackbar("An unexpected error occurred.", {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        const errorMessage =
          error?.response?.data?.message || "Error contacting server.";
        enqueueSnackbar(errorMessage, { variant: "error" });
      });
  };
  return { update };
};
