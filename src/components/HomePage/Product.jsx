import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ProductImg from "../../resources/images/svg/Product.svg";
import { useTheme } from "@mui/material/styles";

const Product = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background:' linear-gradient(180deg, #FFF 50%, #f5f8ff 50%)',
          // backgroundColor: theme.palette.background.paper,
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          display:{lg:'grid',md:'grid',sm:'grid',xs:'flex'},
          gridTemplateColumns: "auto auto auto",
          gridTemplateRows: "auto auto auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: {lg:'flex',md:'flex',sm:'flex',xs:'flex-box'},
            flexDirection:'row',
            justifyContent: "center",
            zIndex: 1,
            textAlign: "center",
            margin: "auto",
            gridColumn: 2,
            gridRow: "1/span 2",
            background: "transparent",
          }}
        >
          <Box
            component={"img"}
            src={ProductImg}
            position={"relative"}
            sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              height: { lg: 400, md: 300, sm: 300, xs: 150 },
              zIndex: 0,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              position:{lg:"absolute",md:"absolute",sm:"absolute",xs:'static'},
              top: "28%",
              color:{lg:theme.palette.primary.contrastText,sm:'#fff'},
              fontSize: { lg: "40px", md: "30px",sm:"30px",xs:'22px' },
            }}
          >
            Push your product to next level.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              position:{lg:"absolute",md:"absolute",sm:"absolute",xs:'static'},
              fontWeight: 400,
              px: { lg: 15, md: 12, sm: 10 },
              top: "45%",
              color:{lg:theme.palette.primary.contrastText,md:theme.palette.primary.contrastText,sm:theme.palette.primary.contrastText,xs:theme.palette.text.secondary},
              fontSize: { lg: "20px", md: "16px", sm: "18px",xs:'15px' },
            }}
          >
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </Typography>
          <Button
            sx={{
              position:{lg:"absolute",md:"absolute",sm:"absolute",xs:'static'},
              top: "65%",
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              px: { lg: 5, md: 4, sm: 4, xs: 3 },
              py: { lg: 2, md: 1.8, sm: 1.5, xs: 1.5 },
              fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "13px" },
              borderRadius: "30px",

            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Product;
