import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Stack,
  Container,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logo from "../../resources/images/svg/BusinessHub..svg";
import { useTheme } from "@mui/material/styles";
import Login from "../Dialogs/Login";
import { deepOrange } from "@mui/material/colors";
import Register from "../Dialogs/Register";
import { Notifications } from "@mui/icons-material";
import { useGetNotification } from "../../hooks/useGetNotification";
import Profile from "../Dialogs/Profile";
import Notification from "../Dialogs/Notification";
import EditProfile from "../Dialogs/EditProfile";

const Header = () => {
  const loginUser = JSON.parse(sessionStorage.getItem("loginData"));
  const theme = useTheme();
  const { getNotification, notification } = useGetNotification();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pOpen, setPOpen] = useState(false);
  const [tOpen, setTOpen] = useState(false);
  const [productAnchor, setProductAnchor] = useState(null);
  const [templateAnchor, setTemplateAnchor] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("loginData"))
  );
  // const [userData,setUserData] = useState(null);

  const toggleDrawer = (newOpen) => () => setDrawerOpen(newOpen);
  const handleMenuOpen = (event, setter) => setter(event.currentTarget);
  const handleMenuClose = (setter) => setter(null);
  const handleOpenLogin = () => setLoginModal(true);
  const handleCloseLogin = () => setLoginModal(false);

  const handleOpenRegister = () => setRegisterModal(true);
  const handleCloseRegister = () => setRegisterModal(false);
  const handleOpenProfile = () => setProfileModal(true);
  const handleCloseProfile = () => setProfileModal(false);

  const handleOpenEditProfile = () => setEditProfileModal(true);
  const handleCloseEditProfile = () => setEditProfileModal(false);

  const handleOpenNotification = () => {
    setNotificationModal(true);
    getNotification();
  };
  const handleCloseNotification = () => setNotificationModal(false);
  const handleLogout = () => {
    setUserData(null);
    sessionStorage.removeItem("loginData");
  };
  const handleLogin = () => {
    console.log("login");
    setUserData(sessionStorage.getItem("loginData"));
  };

  const DrawerList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          p: 2,
        }}
      >
        <img src={logo} alt="app_logo" height={20} style={{ marginTop: 10 }} />
        <IconButton onClick={toggleDrawer(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItemButton onClick={() => setPOpen(!pOpen)}>
          <ListItemText primary="Product" />
          {pOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={pOpen} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>Product 1</ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>Product 2</ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>Product 3</ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => setTOpen(!tOpen)}>
          <ListItemText primary="Template" />
          {tOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={tOpen} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>Template 1</ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>Template 2</ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>Template 3</ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={toggleDrawer(false)}>
          <ListItemText primary="Blog" />
        </ListItemButton>
        <ListItemButton onClick={toggleDrawer(false)}>
          <ListItemText primary="Pricing" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          onClick={() => {
            toggleDrawer(false);
            handleOpenLogin();
          }}
        >
          <ListItemText
            primary="Sign In"
            sx={{
              textAlign: "center",
              border: "1px solid",
              borderColor: theme.palette.primary.main,
              py: 1,
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={toggleDrawer(false)}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            textAlign: "center",
            py: 1,
            mx: 2,
          }}
        >
          <ListItemText primary="Start Free" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: {
          lg: "80px!important",
          md: "40px!important",
          sm: "0 !important",
          xs: "0 !important",
        },
        zIndex: 5,
      }}
    >
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#f8f8f8" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            columnGap={{ lg: 25, md: 10 }}
          >
            {/* Mobile Menu Icon & Logo */}
            <Stack direction="row" alignItems="center">
              <Box sx={{ display: { xs: "flex", lg: "none", md: "none" } }}>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              </Box>
              <img src={logo} alt="app_logo" height={20} />
            </Stack>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              sx={{ display: { xs: "none", lg: "flex", md: "flex" } }}
            >
              <Button
                onClick={(e) => handleMenuOpen(e, setProductAnchor)}
                sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
              >
                Product <ExpandMore />
              </Button>
              <Menu
                anchorEl={productAnchor}
                open={Boolean(productAnchor)}
                onClose={() => handleMenuClose(setProductAnchor)}
              >
                <MenuItem onClick={() => handleMenuClose(setProductAnchor)}>
                  Product 1
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setProductAnchor)}>
                  Product 2
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setProductAnchor)}>
                  Product 3
                </MenuItem>
              </Menu>

              <Button
                onClick={(e) => handleMenuOpen(e, setTemplateAnchor)}
                sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
              >
                Template <ExpandMore />
              </Button>
              <Menu
                anchorEl={templateAnchor}
                open={Boolean(templateAnchor)}
                onClose={() => handleMenuClose(setTemplateAnchor)}
              >
                <MenuItem onClick={() => handleMenuClose(setTemplateAnchor)}>
                  Template 1
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setTemplateAnchor)}>
                  Template 2
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setTemplateAnchor)}>
                  Template 3
                </MenuItem>
              </Menu>

              <Button
                sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
              >
                Blog
              </Button>
              <Button
                sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
              >
                Pricing
              </Button>
            </Stack>
            {!loginUser ? (
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", lg: "flex", md: "flex" } }}
              >
                <Button
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    px: 3,
                  }}
                  onClick={handleOpenLogin}
                >
                  Sign In
                </Button>

                <Button
                  sx={{
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 500,
                    borderRadius: "10px",
                    px: 5,
                    py: 1.5,
                  }}
                  onClick={handleOpenRegister}
                >
                  Start Free
                </Button>
              </Stack>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", lg: "flex", md: "flex" } }}
              >
                <Button
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    px: 3,
                  }}
                  onClick={handleLogout}
                >
                  Log out
                </Button>
                <Button
                  sx={{
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 500,
                    borderRadius: "10px",
                    px: 2,
                    py: 1.5,
                  }}
                  onClick={handleOpenProfile}
                >
                  <Avatar sx={{ height: 25, width: 25 }}></Avatar>
                  <Typography>
                    {loginUser.firstName} {loginUser.lastName}{" "}
                    {/* {console.log(userData.firstName)} */}
                    {/* {userData.firstName} {userData.lastName}{" "} */}
                  </Typography>
                </Button>
                <IconButton onClick={handleOpenNotification}>
                  <Notifications color="primary" />
                </IconButton>
              </Stack>
            )}
          </Stack>

          {/* Mobile Drawer */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {DrawerList()}
          </Drawer>
        </Toolbar>
      </AppBar>

      <Login
        open={loginModal}
        onClose={handleCloseLogin}
        handleLogin={handleLogin}
      />
      <Register open={registerModal} onClose={handleCloseRegister} />
      <EditProfile open={editProfileModal} onClose={handleCloseEditProfile} />

      <Profile
        open={profileModal}
        onClose={handleCloseProfile}
        openEditProfile={handleOpenEditProfile}
      />
      <Notification
        open={notificationModal}
        onClose={handleCloseNotification}
        notification={notification ? notification.data : []}
      />
    </Container>
  );
};

export default Header;
