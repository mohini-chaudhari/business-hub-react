import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Box, Typography, styled, CardContent, Card, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Star from "../../resources/images/svg/Star.svg";
import Award from '../../resources/images/svg/Award.svg'
import Bulb from '../../resources/images/svg/Bulb.svg'


const Promotion = () => {
  const theme = useTheme();
  const Image = styled("img")``;
  return (
    <>
      <Container maxWidth="xl" sx={{ px: {lg:"114px !important" },pb:15,backgroundColor:'#fff'}}>
        <Box
          sx={{
            
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              // width:{lg:'85%'},
              py: {lg:4,xs:3},
              mx:{lg:0,md:0,xs:2,sm:5},
              my: 3,
              border: "1px solid #DEE1E6",
              borderRadius: "20px",
              justifyItems: "center",
            }}
          >
            <Grid
              container
              columnGap={{lg:2,md:0}}
              rowGap={2}
              sx={{px:{lg:4}}}
              width={{lg:'auto',md:'auto',sm:'500px'}}
            >
              <Grid lg={3} width={{lg:'350px',md:'280px'}} >
                <Typography variant="h2" sx={{ textAlign: "start",px:2}}>
                  Among leave law built now.
                </Typography>
              </Grid>
              <Grid
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:{lg:'220px',md:'210px'},
                  gap:{lg:3,md:2,xs:2},
                  px:{lg:0,xs:1}
                }}
              >
                <Image src={Star} />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.info,
                    textAlign:'start',
                    
                    
                  }}
                >
                  Village did remov enjoyed
                </Typography>
              </Grid>
              <Grid
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:{lg:'220px',md:'210px'},
                  gap:{lg:3,md:2,xs:2},
                  px:{lg:0,xs:1}
                }}
              >
                <Image src={Award} />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.info,
                    textAlign:'start',
                  
                  }}
                >
                  Nay likely length sooner
                </Typography>
              </Grid>
              <Grid
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:{lg:'220px',md:'210px'},
                  gap:{lg:3,md:2,xs:2},
                  px:{lg:0,xs:1}
                }}
              >
                <Image src={Bulb} />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.info,
                    textAlign:'start',
                    
                    
                  }}
                >
                  Expense windows adapted
                </Typography>
              </Grid>
            </Grid>
          </Box>
        
        </Box>
        <Grid
            container
            sx={{
              // mx: { lg: 2, md: 1, sm: 0, xs: 2 },
              mt:{lg:15},
              rowGap: { sm: 2, xs: 3 },
              columnGap: { lg: 3, md: 3, sm: 5 },
              display: "flex",
              justifyContent: "center",
              textAlign:'center'
            }}
          >
            
            <Grid lg={3} sm={12}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor:'#F8F9FD',
                  margin: 0,
                  padding: { lg: 2, md: 1 },
                  position: "relative",
                  maxWidth: { lg: 560, md: 450, sm: 380 },
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography variant="h1"
                    sx={{
                      mt: 2,
                      px:{lg:7,md:0},py:3,
                      textAlign: "center",
                    }}
                  >
                    Offend belong promote provision
                  </Typography>
                  <Typography
                  variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      textAlign: "center",
                      fontSize: "16px",
                      px:1,
                      mb: 2,
                    }}
                  >
                    Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. 
                  </Typography>
                  <Button
                    variant="link"
                    sx={{
                      color: theme.palette.primary.contrastText,
                      backgroundColor:theme.palette.primary.main,
                      fontSize: "15px",
                      borderRadius:'10px',
                      fontWeight: 550,
                      px: 4,
                      py:1.8,
                      mt:{lg:3}
                    }}
                  >
                    Read More 
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={3} sm={12}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor:'#F8F9FD',
                  margin: 0,
                  padding: { lg: 2, md: 1 },
                  position: "relative",
                  maxWidth: { lg: 560, md: 450, sm: 380 },
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography variant="h1"
                    sx={{
                      px:{lg:7,md:0},py:3,
                      mt: 2,
                      textAlign: "center",
                    }}
                  >
                    Consulted ourselves it blessing welcom
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      textAlign: "center",
                      fontSize: "16px",
                      px:1,
                      mb: 2,
                    }}
                  >
                    The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
                  </Typography>
                  <Button
                    variant="link"
                    sx={{
                      color: theme.palette.primary.contrastText,
                      backgroundColor:theme.palette.primary.main,
                      fontSize: "15px",
                      borderRadius:'10px',
                      fontWeight: 550,
                      px: 4,
                      py:1.8,
                      mt:{lg:3}
                    }}
                  >
                    Read More 
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
      </Container>
    </> 
  );
};

export default Promotion;
