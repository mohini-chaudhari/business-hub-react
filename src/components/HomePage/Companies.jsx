import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import OpenZeppelin from "../../resources/images/svg/companies/OpenZeppelin.svg";
import Oracle from "../../resources/images/svg/companies/Oracle.svg";
import Morpheus from "../../resources/images/svg/companies/Morpheus.svg";
import Samsung from "../../resources/images/svg/companies/Samsung.svg";
import Monday from "../../resources/images/svg/companies/Monday.svg";
import Segment from "../../resources/images/svg/companies/Segment.svg";
import Protonet from "../../resources/images/svg/companies/Protonet.svg";

const Companies = () => {
  const theme = useTheme();
  const Image = styled("img")``;

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          py: {lg:8,md:5, xs: 2, sm: 5 },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 600,
            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
            textAlign: "center",
          }}
        >
          Over 32k+ software businesses growing with AR Shakir
        </Typography>

        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: { xs: 3, sm: 4, md: 5 },
            mt: { xs: 2, sm: 3 },
          }}
        >
          <Image src={OpenZeppelin} alt="OpenZeppelin" sx={{ maxHeight: 30 }} />
          <Image src={Oracle} alt="Oracle" sx={{ maxHeight: 25 }} />
          <Image src={Morpheus} alt="Morpheus" sx={{ maxHeight: 30 }} />
          <Image src={Samsung} alt="Samsung" sx={{ maxHeight: 25 }} />
          <Image src={Monday} alt="Monday" sx={{ maxHeight: 30 }} />
          <Image src={Segment} alt="Segment" sx={{ maxHeight: 30 }} />
          <Image src={Protonet} alt="Protonet" sx={{ maxHeight: 30 }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Companies;
