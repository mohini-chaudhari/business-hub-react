import {
  Box,
  Card,
  CardContent,
  styled,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Grid from "@mui/material/Grid";
import Frame1 from "../../resources/images/svg/Frame1.svg";
import Frame2 from "../../resources/images/svg/Frame2.svg";
import Frame3 from "../../resources/images/svg/Frame3.svg";
import EastIcon from "@mui/icons-material/East";

const HelpSection = () => {
  const theme = useTheme();
  const Image = styled("img")({
    maxWidth: "100%",
    height: "auto",
  });

  const Helps = [
    {
      id: 1,
      image: Frame1,
      title: "Offending belonging",
      desc: "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
    },
    {
      id: 2,
      image: Frame2,
      title: "Promotion & provision",
      desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 3,
      image: Frame3,
      title: "Blessing application",
      desc: "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 0,
        background: {
          lg: " linear-gradient(180deg, #F5F8FF 92%, #ffffff 10%)",
          sm: " linear-gradient(180deg, #F5F8FF 94.2%, #ffffff 10%)",
          md: " linear-gradient(180deg, #F5F8FF 92%, #ffffff 10%)",
          xs: " linear-gradient(180deg, #F5F8FF 96%, #ffffff 10%)",
        },
      }}
    >
      <Box
        sx={{
          // backgroundColor: "#F5F8FF",
          // backgroundColor:' linear-gradient(180deg, #F5F8FF 90%, #ffffff 10%)',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 5,
        }}
      >
        {/* Header Section */}
        <Box sx={{ width: { xs: "100%", md: 650 }, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", mt: { lg: 10 }, mb: 2 }}
          >
            We help your business grow faster.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 500,
              px: { lg: 5, md: 4, sm: 3, xs: 2 },
              mb: 10,
            }}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid
          container
          spacing={3}
          sx={{ maxWidth: "1200px", justifyContent: "center" }}
        >
          {Helps.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                elevation={0}
                sx={{
                  padding: 2,
                  position: "relative",
                  borderRadius: "20px",
                  textAlign: "start",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Image src={item.image} alt={item.title} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      // fontSize: "14px",
                      mb: 2,
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      color: "#01966B",
                      // fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Read More <EastIcon fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action Button */}
        <Button
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            px: 6,
            py: 1.5,
            borderRadius: "12px",
            mt: 6,
            "&:hover": { backgroundColor: theme.palette.primary.dark },
          }}
        >
          More About Platform
        </Button>
      </Box>
    </Container>
  );
};

export default HelpSection;
