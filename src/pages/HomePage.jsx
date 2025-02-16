import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Companies from "../components/HomePage/Companies";
import ProcessHeader from "../components/HomePage/ProcessHeader";
import ProcessDescription from "../components/HomePage/ProcessDescription";
import HelpSection from "../components/HomePage/HelpSection";
import Promotion from "../components/HomePage/Promotion";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import Footer from "../components/HomePage/Footer";
import Ecllipse from "../resources/images/svg/Ellipse.svg";
import { Box, Container, Divider, styled } from "@mui/material";
import Product from "../components/HomePage/Product";

const HomePage = () => {
  const Image = styled("img")``;

  return (
    <>
      <Container maxWidth="xl" sx={{ px: "0px !important",backgroundColor:'#fff'}}>
        <HeroSection />
        <Divider />
         <Companies />
        <Divider />
        <Box
          sx={{
            pt: 15,
            backgroundColor:'#ffffff',
            position: "relative",
            pb: { xs: 5 },
          }}
        >
          <Image
            src={Ecllipse}
            sx={{ zIndex: 0, position: "absolute", top: "15%" }}
          />
          <Image
            src={Ecllipse}
            sx={{
              position: "absolute",
              zIndex: 0,
              top: "15%",
              right: 0,
              transform: "rotate(180deg)",
            }}
          />
          <ProcessHeader />
        </Box> 
        <ProcessDescription />
        <Box sx={{ pt: 5 ,backgroundColor:'#ffffff'}}>
          <Product />
          <HelpSection/>
          <Promotion/>
          <WhyChooseUs/>
          <Footer/>
        </Box> 
      </Container>
    </>
  );
};

export default HomePage;
