import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const login = async (values,handleLogin) => {
    setIsLoading(true);
    const config = {
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body, config)
      .then((response) => {
        if (response.data) {
          setIsLoading(false);
          localStorage.setItem("userId", response?.data?.data?.userId);

          if (response?.data) {
            enqueueSnackbar("Login successfully.", {
              variant: "success",
            });
            
          }
          // console.log(response);
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: response.data.data?.firstName,
              lastName: response.data.data?.lastName,
              email: values.email,
              password: values.password,
              token: response.data.data.authentication.accessToken,
            }),
          );
          handleLogin();
          // console.log(sessionStorage.getItem("loginData"))
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
  return { login };
};
