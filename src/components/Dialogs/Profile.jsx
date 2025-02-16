import { Avatar, Box, Button, Dialog, Stack, Typography } from '@mui/material';
import React from 'react'

const Profile = ({open,onClose,openEditProfile}) => {
  const userData = JSON.parse(sessionStorage.getItem("loginData"));
  if(userData){
    return (
      <Dialog 
      open={open} 
      onClose={onClose}
      sx={{
        "& .MuiDialog-container": {
          height: "auto",
          position:'absolute',
          right:'10%'
        },
      }}
      PaperProps={{
        sx: {
          height: "406px",
          width: "360px",
          borderRadius: "15px",
        },
      }}
      >
        <Stack
          margin={"50px 20px 20px 20px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Avatar 
          sx={{
            maxHeight: "120px",
                maxWidth: "120px",
                width: "100%",
                height: "100%",
          }}
          />
          <Typography variant='h3' sx={{fontWeight:'bold'}}>
            {userData.firstName} {userData.lastName}{" "}
          </Typography>
          <Typography variant='body1' sx={{fontWeight:'#999999'}}>
            {userData.email}
          </Typography>
          <Box sx={{ marginTop: "40px", width: "100%" }}>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  height: "50px",
                  color: "primary.main",
                  backgroundColor: "#EBEAFF",
                }}
              >
                Change Password
              </Button>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  marginTop: "15px",
                  height: "50px",
                }}
                onClick={()=>{
                  onClose();
                  openEditProfile();
                }}
              >
                Edit Profile
              </Button>
            </Box>
        </Stack>
      </Dialog>
    )
  }
  
}

export default Profile
