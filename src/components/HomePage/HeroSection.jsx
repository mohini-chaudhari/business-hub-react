import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import background from "../../resources/images/png/background.png";
import HeroImage from "../../resources/images/svg/HeroImage.svg";
import TrueIcon from "../../resources/images/svg/TrueOrange.svg";

const HeroSection = () => {
  const theme = useTheme();
  const Image = styled('img')``

  return (
    <Container maxWidth="xl" sx={{ px: "0px !important",backgroundColor:'#ffffff' }}>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(#F8F8F8, #ffffff)",
          overflow: "hidden",
          pt: 2,
          mb: { lg: 0, xs: 5, md: 0},
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: {lg:"850px",md:"630px",sm:'440px',xs:'330px'},
            height: {lg:"780px",md:"580px",sm:'400px',xs:'300px'},
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <Box
        component={'img'}
        src={HeroImage}
          sx={{
            display:{lg:'flex',md:'flex',sm:'none',xs:'none'},
            position: "absolute",
            top: 0,
            right: '0',
            width: {lg:"900px",md:"630px"},
            height: {lg:"870px",md:"580px"},
            zIndex: 0,
          }}
        />

        {/* Header Component */}
        <Header zIndex={10}/>

        {/* Main Content */}
        <Grid container spacing={0} alignItems="center" sx={{pb:{lg:15,md:3,sm:0},position:'relative'}}>
          {/* Left Side (Text + Form) */}
          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sm={12}
            sx={{
              px: { xs: 3, sm: 4, md: 8, lg: 13 },
              pt:{lg:10},
              zIndex: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 530,
                fontSize: { xs: "18px" },
                letterSpacing: 1,
              }}
            >
              Product Growth Solution in Single Platform.
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                lineHeight: "1.4",
                mt: 1,
                color: theme.palette.text.primary,
                fontSize: { xs: "35px", lg: "55px", md: "40px", sm: "40px" },
              }}
            >
              Managing business payments has never been easier
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: theme.palette.text.secondary,
                fontSize: { lg: "18px", md: "16px", sm: "15px", xs: "14px" },
              }}
            >
              Never at water me might. On formed merits hunted unable merely by
              mr whence or. Possession the unpleasing simplicity her uncommonly.
            </Typography>

            {/* Subscription Form */}
            <Box
              component="form"
              boxShadow={1}
              sx={{
                width: { lg: "550px", md: "450px", sm: "400px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#ffffff",
                p: 2,
                my: 3,
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                label="Stay connected & get updates"
                placeholder="shakir260@gmail.com"
                InputLabelProps={{
                  shrink: true,
                  color: theme.palette.text.secondary,
                }}
                sx={{
                  mr: 2,
                }}
                slotProps={{
                  input: {
                    disableUnderline: true,
                    sx: { fontWeight: 800 },
                  },
                }}
              />
              <Button
                sx={{
                  color: theme.palette.primary.contrastText,
                  backgroundColor: "#000000",
                  borderRadius: "0px",
                  py: 2,
                  px: { lg: 8, md: 5, sm: 4, xs: 2 },
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                Submit
              </Button>
            </Box>

            <Stack direction="row" spacing={3} alignItems="center">
              <FeatureItem text="Free Register" icon={TrueIcon} />
              <FeatureItem text="Great Service" icon={TrueIcon} />
            </Stack>
          </Grid>

          {/* Right Side (Hero Image) */}
           {/* <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sm={6}
            sx={{
              display: { xs: "none", md: "block" },
              zIndex: 1,
            }}
          >
            
             <img
              src={HeroImage}
              alt="Hero Section"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            /> 
          </Grid> */}
          {/* <Grid
            item
            xs={12}
            lg={5}
            md={5}
            sx={{ display: { xs: "none", md: "block" },zIndex:0 }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                right:0,
                overflow: "hidden",
                zIndex:0
              }}
            >
              <Image
                src={HeroImage}
                alt="Hero image"
                sx={{ width: {lg:"800px"}, height: {lg:"800px",md:'686px'} }}
              />
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
};

const FeatureItem = ({ text, icon }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <img src={icon} alt={text} width={15} />
      <Typography variant="body2" sx={{ color: "#555" }}>
        {text}
      </Typography>
    </Stack>
  );
};

export default HeroSection;
