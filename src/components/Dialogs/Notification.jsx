import { Avatar, Dialog, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react'

const Notification = ({open,onClose,notification}) => {

  const userData = JSON.parse(sessionStorage.getItem("loginData"));
  if(userData){
    return (
      <>
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDialog-container": {
            height: "auto",
            textAlign: "right",
          },
        }}
        PaperProps={{
          sx: {
            height: "410px",
            width: "360px",
            borderRadius: "15px",
          },
        }}
      >
        <List>
            {notification.map((msg, index) => (
              <>
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={`${msg.profile}`} />
                  </ListItemAvatar>
                  <ListItemText>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {msg.message.split(" ").splice(0, 2).join(" ")}
                    </span>
                    <span style={{ color: "#777777" }}>
                      {" "}
                      {msg.message.split(" ").splice(2).join(" ")}
                    </span>
                  </ListItemText>
                </ListItem>
                {index < notification.length - 1 ? (
                  <Divider key={index + msg.length} variant="middle" />
                ) : null}
              </>
            ))}
          </List>
      </Dialog>
      </>
    )
  }
}

export default Notification
