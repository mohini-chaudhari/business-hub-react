import {
  Box,
  Card,
  CardContent,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import One from "../../resources/images/svg/1.svg";
import Two from "../../resources/images/svg/2.svg";
import Three from "../../resources/images/svg/3.svg";

const ProcessDescription = () => {
  const theme = useTheme();
  const Image = styled("img")({
    maxWidth: "100%",
    height: "auto",
  });

  const steps = [
    {
      image: One,
      title: "Project Discovery Call",
      description:
        "Party we years to order allow asked of. We so opinion friends me message as delight.",
      imagePosition: { lg: "55px", sm: "20px", xs: "10px" },
    },
    {
      image: Two,
      title: "Requirement Analysis",
      description:
        "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
      imagePosition: { lg: "29px", sm: "15px", xs: "10px" },
    },
    {
      image: Three,
      title: "Final Delivery",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
      imagePosition: { lg: "30px", sm: "15px", xs: "10px" },
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ px: 0,backgroundColor:'#FFFFFF', }}>
      <Box
        sx={{
          justifyContent: "center",
          backgroundColor:'#FFFFFF',
          textAlign: "center",
          alignItems: "center",
          width:{lg:'80%'},
          margin:'auto',
          py: 4,
        }}
      >
        <Grid
          container
          spacing={4}
          columnGap={0}
          sx={{
            justifyContent: "center",
          }}
        >
          {steps.map((step, index) => (
            <Grid item  lg={4} xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor:'inherit',
                  padding: 2,
                  position: "relative",
                  textAlign: "left",
                  height: "100%",
                  borderRadius: "16px",
                  maxWidth: 360,
                  margin: "0 auto",
                }}
              >
                <CardContent>
                  {/* Image Positioned Absolutely */}
                  <Image
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    sx={{
                      position: "absolute",
                      right: step.imagePosition,
                      top: "30px",
                      width: "100px",
                      height: "140px",
                    }}
                  />
                  {/* Circle Indicator */}
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      height: "60px",
                      width: "60px",
                      borderRadius: "15px",
                      boxShadow: theme.shadows[3],
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#F57059",
                        height: "23px",
                        width: "23px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mt: 3,
                      fontSize: "18px",
                    }}
                  >
                    {step.title}
                  </Typography>
                  {/* Description */}
                  <Typography
                  variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mt: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProcessDescription;
