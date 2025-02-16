import axios from "axios";
import { useState } from "react"

export const useGetNotification = () => {
  const [notification,setNotification] = useState(null);

  let token;
  if(sessionStorage.getItem("loginData")){
    token = JSON.parse(sessionStorage.getItem("loginData")).token;
    
  }

  const getNotification = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${token}`,
      },
    };

    // const body = {};
    console.log(config);
    axios
    .post(`${process.env.REACT_APP_API_URL}/users/notifications`,{},config)
    .then((response) => {
      if (response.data){
        setNotification(response.data)
        console.log(response.data)
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return {getNotification,notification};
}