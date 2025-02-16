import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const useCreateAccount = () => {
  const [success, setSuccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const signup =async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, body, config)
      .then((response) => {
        console.log(response);
        if (response?.data) {
          enqueueSnackbar("Account created successfully.", {
            variant: "success",
          });
        } else {
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
  return { signup }
};
