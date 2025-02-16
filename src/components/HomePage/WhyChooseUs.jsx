import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ px: "0px !important", backgroundColor: "#05796B" }}
      >
        <Box
          sx={{
            py: { lg: "70px", md: "50px", sm: "40px", xs: "30px" },
            color: "#fff",
          }}
        >
          <Grid
            container
            // spacing={{ lg: 35, md: 3, sm: 2 }}
            justifyContent={{
              lg: "space-between",
              md: "space-between",
              sm: "center",
              xs: "center",
            }}
            sx={{
              px: { lg: 15, md: 8, sm: 5, xs: 1 },
              flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            }}
          >
            {/* Left Section */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                height={"100%"}
                maxWidth={{ lg: "480px", md: "400px" }}
                textAlign={{
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                }}
                marginBottom={{ lg: 0, sm: 3, xs: 3 }}
              >
                <Typography
                  variant="body2"
                  color="#fff"
                  sx={{
                    fontWeight: 600,
                    textAlign: {
                      lg: "left",
                      md: "left",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  WHY CHOOSE US
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "50px",
                      md: "40px",
                      sm: "40px",
                      xs: "30px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    wordSpacing: 0,
                    mt: 2,
                  }}
                >
                  Track your crypto portfolio in the best way possible
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "20px",
                    textAlign: {
                      lg: "left",
                      md: "left",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  Mean if he they been no hold mr. Is at much do made. Latter
                  person am secure of estate genius at.{" "}
                </Typography>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                height={"100%"}
                maxWidth={{ lg: "500px", md: "400px" }}
                textAlign={{ lg: "left", sm: "center", xs: "center" }}
                marginTop={{ lg: 8, md: 8, sm: 4, xs: 4 }}
              >
                <Stack
                  direction={"column"}
                  gap={3}
                  alignItems="center"
                  sx={{ pr: { lg: 10, md: 10, sm: 0 } }}
                >
                  <Box
                    backgroundColor="#fff"
                    borderRadius={"8px"}
                    sx={{ opacity: "15%" }}
                  >
                    <TextField
                      sx={{
                        mx: 2,
                      }}
                      variant="standard"
                      placeholder="Email Address"
                      slotProps={{
                        input: {
                          disableUnderline: true,
                          sx: {
                            color: "#000",
                            fontSize: "18px",
                            height: "55px",
                            width: {
                              lg: "350px",
                              md: "290px",
                              sm: "300px",
                              xs: "250px",
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box
                    backgroundColor="#fff"
                    borderRadius={"8px"}
                    sx={{ opacity: "15%" }}
                  >
                    <TextField
                      sx={{
                        mx: 2,
                      }}
                      variant="standard"
                      placeholder="Password"
                      slotProps={{
                        input: {
                          disableUnderline: true,
                          sx: {
                            color: "#000",
                            fontSize: "18px",
                            height: "55px",
                            width: {
                              lg: "350px",
                              md: "290px",
                              sm: "300px",
                              xs: "250px",
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                  <Button
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      backgroundColor: "#F57059",
                      py: 2,
                      width: {
                        lg: "380px",
                        md: "320px",
                        sm: "330px",
                        xs: "270px",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default WhyChooseUs;
