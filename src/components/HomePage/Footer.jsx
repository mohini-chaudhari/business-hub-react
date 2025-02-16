import {
  Container,
  Box,
  Stack,
  styled,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import LinkedIn from "../../resources/images/svg/LinkedIn.svg";
import Messenger from "../../resources/images/svg/Messenger.svg";
import Twitter from "../../resources/images/svg/Twitter.svg";
import Twoo from "../../resources/images/svg/Twoo.svg";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const Image = styled("img")``;
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl" sx={{ px: "0 !important", backgroundColor: "#FFFFFF" }}>
        <Box
          sx={{
            pt: 10,
            pb: 5,
            pl:{lg:20,md:10,xs:1},
            pr:{lg:18,md:8,xs:1},
            display: "flex",
            flexDirection: { lg:'row',md:'row',xs: "column", sm: "column" },
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* Left Section - About Us & Social Icons */}
          <Stack
            direction={"column"}
            sx={{
              // maxWidth: "250px",
              mb: { xs: 3, sm: 0 },
              alignItems: { xs: "center", sm: "flex-start" },
              width: { lg:'450px',xs: "100%", sm: "300px" },
            }}
          >
            <Typography variant="h4" sx={{ textAlign: { xs: "center", sm: "left" } }}>
              AR Shakir
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { lg: "17px", sm: "16px", xs: "15px" },
                mt: 2,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Simple innate summer fat appear basket his desire joy.
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: 3,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <IconButton>
                <Image src={LinkedIn} />
              </IconButton>
              <IconButton>
                <Image src={Messenger} />
              </IconButton>
              <IconButton>
                <Image src={Twitter} />
              </IconButton>
              <IconButton>
                <Image src={Twoo} />
              </IconButton>
            </Box>
          </Stack>

          {/* Middle Section - Company & Resources Links */}
          <Grid
            container
             justifyContent={'space-around'} 
            spacing={{ lg: 0, md: 5, sm: 0, xs: 2 }}
            sx={{
              ml: { lg: 0, md: 0 },
              mr: { lg: 0, md: 1 },
              mb: { xs: 3, sm: 0 },
            }}
          >
            {/* Company Links */}
            <Grid item xs={12}  sm={2} lg={3} md={5}>
              <Stack direction={"column"} sx={{ width: "60%" }}>
                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "550" }}>Company</Typography>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 2, fontSize: "15px" }}>
                    About Us
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 2, fontSize: "15px" }}>
                    Career
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 2, fontSize: "15px" }}>
                    Blog
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 2, fontSize: "15px" }}>
                    Pricing
                  </Link>
                </Box>
              </Stack>
            </Grid>

            {/* Resources Links */}
            <Grid item xs={12} sm={3} lg={4} md={6}>
              <Stack direction={"column"} sx={{ width: "100%" }}>
                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "550" }}>Resources</Typography>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 2, fontSize: "15px" }}>
                    Templates
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 1.5, fontSize: "15px" }}>
                    Tutorials
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 1.5, fontSize: "15px" }}>
                    Free resources
                  </Link>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ mt: 1.5, fontSize: "15px" }}>
                    Contract templates
                  </Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* Right Section - Newsletter Subscription */}
          <Stack
            direction={"column"}
            sx={{
              width: { lg: "800px", md: "600px", sm: "50%",xs:'90%' },
              mb: { xs: 3, sm: 0 },
            }}
          >
            <Box sx={{ mt: { lg: 1, sm: 3 } }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "550" }}>Join Our Newsletter</Typography>
              <Box backgroundColor="#f8f8f8" sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <TextField
                  sx={{
                    mx: 2,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "55px",
                    },
                  }}
                  variant="standard"
                  placeholder="Your email address"
                  slotProps={{
                    input: {
                      disableUnderline: true,
                      sx: {
                        color: "#000",
                        fontSize: "15px",
                        width: "100%",
                      },
                    },
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#00E1F0",
                    borderRadius: "0",
                    color: "#fff",
                    px: 4,
                    py: 2,
                    height: "55px",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box> 
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                mt: 3,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              * Will send you weekly updates for better finance management.
            </Typography>
          </Stack>
        </Box>

        <Divider
          sx={{
            mt: {lg:7,xs:0},
            borderBottomWidth: "2px",
            ml: { lg: 20, md: 10 },
            mr: { lg: 16, md: 8 },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            py: 6,
            textAlign: "center",
            fontSize: { xs: "12px", sm: "14px", lg: "16px" },
          }}
        >
          Copyright @ BusinessHub 2022. All Rights Reserved.
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
