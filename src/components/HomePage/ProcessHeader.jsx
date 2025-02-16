import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const ProcessHeader = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: theme.palette.background.paper,
          px: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            // backgroundColor: theme.palette.background.paper,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: { lg: "60%", md: "70%", sm: "80%", xs: "95%" },
            padding: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Section Heading */}
          <Typography
            sx={{
              color: "#F57059",
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: { lg: "14px", md: "13px", sm: "12px", xs: "11px" },
              mb: 1,
            }}
          >
            Stockie Operation Across the World
          </Typography>

          {/* Main Title */}
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              fontSize: { lg: "2.5vw", md: "3vw", sm: "4.5vw", xs: "6vw" },
              py: 2,
            }}
          >
            We have the best team and best process
          </Typography>

          {/* Subtitle/Description */}
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { lg: "1.2vw", md: "1.5vw", sm: "3vw", xs: "4vw" },
              mx: { lg: 5, md: 4, sm: 3, xs: 2 },
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </Typography>

          {/* Call-to-Action Button */}
          <Button
            sx={{
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              px: { lg: 5, md: 4, sm: 4, xs: 3 },
              py: { lg: 2, md: 1.8, sm: 1.5, xs: 1.5 },
              borderRadius: "30px",
              mt: { lg: 5, md: 4, sm: 3, xs: 3 },
              fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "13px" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ProcessHeader;
