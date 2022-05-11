import {
  Button,
  Divider,
  Fab,
  Grid,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import React from "react";
import DropDown from "./DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import {
  ArrowUpwardRounded,
  CardMembership,
  CommentBank,
  Construction,
  Dashboard,
  DesignServices,
  Directions,
  FacebookOutlined,
  Home,
  HomeMaxOutlined,
  HomeRepairServiceOutlined,
  Instagram,
  LocationCityOutlined,
  Login,
  Park,
  QueryBuilder,
  TourSharp,
  Upgrade,
  WaterDamageOutlined,
  WorkHistory,
} from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MobileLists from "./MobileLists";
import { useSelector } from "react-redux";
import HeaderBackground from "./bg-section1.png";
import Banner from "./banner.png";
import Particles from "react-tsparticles";
import './NavBar.css';
import Fade from 'react-reveal/Fade';

import { loadFull } from "tsparticles";

const dataSet = [
  {
    title: "Home",
    link: "/",
    children: [],
    icon: <HomeMaxOutlined sx={{ color: "#4B0606" }} />,
  },
  {
    title: "About Us",
    icon: <InfoIcon sx={{ color: "#4B0606" }} />,
    link: "/about",
    children: [],
  },
  {
    title: "View Plots",
    icon: <InfoIcon sx={{ color: "#4B0606" }} />,
    link: "/plots/all/all/all",
    children: [],
  },
  {
    title: "Cities",
    link: "/services",
    icon: <DesignServices sx={{ color: "#4B0606" }} />,
    children: [
      {
        label: "Lahore",
        link: "/lahore",
        icon: <TourSharp sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Karachi",
        link: "/karachi",
        icon: <Directions sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Islamabad",
        link: "/islamabad",
        icon: <Construction sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Peshawar",
        link: "/peshawar",
        icon: <ArrowUpwardRounded sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Quetta",
        link: "/quetta",
        icon: <WaterDamageOutlined sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Multan",
        link: "/multan",
        icon: <WorkHistory sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Faislabad",
        link: "/faislabad",
        icon: <TourSharp sx={{ color: "#4B0606" }} />,
      },
      {
        label: "Larkana",
        link: "/larkana",
        icon: <Directions sx={{ color: "#4B0606" }} />,
      },
    ],
  },
  {
    title: "Contact Us",

    link: "/contact",
    children: [],
    icon: <LiveHelpIcon sx={{ color: "#4B0606" }} />,
  },
];
export default () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // const {
  //   status,
  //   adminIsActive,
  //   loader,
  //   ourServicesSection,
  //   weDealInSection,
  //   upCommingSection,
  //   reviewsSection,
  //   BuildRealBrickSection,
  //   teamSection,
  //   groupSection,
  //   branchSection,
  //   sliderSection,
  // } = useSelector((state) => state.mainReducer);
  const adminIsActive = true;
  let dir = "left";
  const [state, setState] = React.useState({});
  const toggleDrawer = (open) => () => {
    setState({ [dir]: open });
  };

  return (
    <>
     
      

        <Box
          sx={{
            fontFamily: "Rubik !important",
            height: { xs: "270vh", md: "140vh" },
            width: "100%",

            
            backgroundColor: "#CAE1FF",
            // backgroundImage: `url(${HeaderBackground})`,
            // backgroundSize: "cover",
          }}
        >
            <Particles
            style={{
              zIndex: "-1",
            Position:"absolute",
            width:"fit-content",
              
            }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 500,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: "#05B4EF",
              // color: {

              //   // value: "#ffffff",
              //   color:"black important",
              // },
              links: {
                color: "#05B4EF",
                distance: 100,
                enable: true,
                // opacity: 0.5,
                width: 1,
                height: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 500,
                },
                value: 80,
              },
              // opacity: {
              //   value: 0.5,
              // },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
          <Container sx={{ padding: "12px 0px 5px 0px" }}>
            <Grid
              container
              alignItems="center"
              justifyContent={"space-between"}
              sx={{ textTransform: "uppercase", color: "#28384C" }}
            >
              <Grid item xs={2} mb={0}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    component={"img"}
                    src={Logo}
                    maxWidth={{ xs: "120px", md: "150px" }}
                    paddingLeft={{ xs: "5px", md: "0px" }}
                  />
                </Link>
              </Grid>
              <Hidden smDown>
                <Grid
                  item
                  container
                  spacing={3}
                  xs={12}
                  md={10}
                  lg={9}
                  mb={2}
                  fontSize={"12px"}
                  alignItems="center"
                  justifyContent={"flex-end"}
                >
                  {dataSet.map((section, index) => (
                    <Grid item key={index}>
                      {section.children.length ? (
                        <DropDown
                          section={section.title}
                          children={section.children}
                        />
                      ) : (
                        <Link
                          to={section.link}
                          style={{ textDecoration: "none", color: "#28384C" }}
                        >
                          <Typography
                            fontSize="inherit"
                            sx={{
                              fontWeight: "bold",
                              fontStyle: "normal",
                              borderLeft: "2px solid transparent",
                              "&:hover": {
                                borderLeft: "2px solid #4B0606",
                                transition: ".8s",
                              },
                              paddingLeft: "5px",
                              lineHeight: 1,
                              transition: ".5s",
                              color: section.color,
                            }}
                          >
                            {section.title}
                          </Typography>
                        </Link>
                      )}
                    </Grid>
                  ))}
                  <Grid item>
                    {adminIsActive ? (
                      <Link
                        to="/dashboard/slideredite"
                        style={{ textDecoration: "none", color: "#28384C" }}
                      >
                        <Typography
                          fontSize="inherit"
                          sx={{
                            fontStyle: "normal",
                            borderLeft: "2px solid transparent",
                            "&:hover": {
                              borderLeft: "2px solid #4B0606",
                              transition: ".8s",
                            },
                            paddingLeft: "5px",
                            lineHeight: 1,
                            transition: ".5s",
                          }}
                        >
                          Dashboard
                        </Typography>
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "#28384C" }}
                      >
                        <Typography
                          fontSize="inherit"
                          sx={{
                            fontStyle: "normal",
                            borderLeft: "2px solid transparent",
                            "&:hover": {
                              borderLeft: "2px solid #4B0606",
                              transition: ".8s",
                            },
                            paddingLeft: "5px",
                            lineHeight: 1,
                            transition: ".5s",
                          }}
                        >
                          Login
                        </Typography>
                      </Link>
                    )}
                  </Grid>
                </Grid>
                {/* SubGrid Container */}
              </Hidden>
              <Hidden smUp>
                <Grid item pr={4}>
                  <MenuIcon
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#4B0606",
                        transition: ".8s",
                      },
                    }}
                    onClick={toggleDrawer(dir, true)}
                  />

                  <SwipeableDrawer
                    anchor={dir}
                    open={state[dir]}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                  >
                    <Box
                      sx={{
                        width: 200,
                        marginLeft: "1vw",
                        marginRight: "1vw",
                        marginTop: "5vh",
                      }}
                      role="presentation"
                      // onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}
                    >
                      <img src={Logo} alt={Logo} width="90%" />
                      <List>
                        {dataSet.map((item) => {
                          return (
                            <MobileLists
                              toggleDrawer={toggleDrawer}
                              item={item}
                            />
                          );
                        })}
                        {adminIsActive ? (
                          <Link
                            to={"/dashboard/slideredite"}
                            style={{ textDecoration: "none", color: "#28384C" }}
                          >
                            <ListItem button onClick={toggleDrawer(false)}>
                              <ListItemIcon>
                                <Dashboard />
                              </ListItemIcon>
                              <ListItemText>
                                <Typography
                                  sx={{
                                    color: "#4B0606",
                                    fontWeight: "bold",
                                    fontsize: "12px",
                                  }}
                                >
                                  Dashboard
                                </Typography>
                              </ListItemText>
                            </ListItem>
                          </Link>
                        ) : (
                          <Link
                            to={"/login"}
                            style={{ textDecoration: "none", color: "#28384C" }}
                          >
                            <ListItem
                              button
                              key={"Login"}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemIcon>
                                <Login />
                              </ListItemIcon>
                              <ListItemText>
                                <Typography
                                  sx={{
                                    color: "#4B0606",
                                    fontWeight: "bold",
                                    fontsize: "12px",
                                  }}
                                >
                                  Login
                                </Typography>
                              </ListItemText>
                            </ListItem>
                          </Link>
                        )}
                      </List>
                      <Divider
                        sx={{
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      ></Divider>
                      <Grid
                        container
                        spacing={4}
                        mb={4}
                        justifyContent={"center"}
                      >
                        <Grid item>
                          <Fab
                            variant="extended"
                            aria-label="Delete"
                            sx={{
                              "&:hover": {
                                background: "#1778F2",
                                height: "80px",
                              },
                              background: "#1778F2",
                              fontSize: "15px",
                              fontWeight: "bold",
                              width: "20px",
                              height: "70px",
                              transition: ".5s",
                              borderTopRadius: "40%",
                              alignItems: "flex-start",
                            }}
                          >
                            <a
                              href="https://www.facebook.com"
                              target={"_blank"}
                            >
                              <FacebookOutlined
                                sx={{ marginTop: "10px", color: "white" }}
                              />
                            </a>
                          </Fab>
                        </Grid>
                        <Grid item>
                          <Fab
                            variant="extended"
                            aria-label="Delete"
                            sx={{
                              "&:hover": {
                                background: "#F00075",
                                height: "80px",
                              },
                              background: "#F00075",
                              fontSize: "15px",
                              fontWeight: "bold",
                              width: "20px",
                              height: "70px",
                              transition: ".5s",
                              borderTopRadius: "40%",
                              alignItems: "flex-start",
                            }}
                          >
                            <a
                              href="https://www.instagram.com"
                              target={"_blank"}
                            >
                              <Instagram
                                sx={{ marginTop: "10px", color: "#28384C" }}
                              />
                            </a>
                          </Fab>
                        </Grid>
                      </Grid>
                    </Box>
                  </SwipeableDrawer>
                </Grid>
              </Hidden>
            </Grid>
            <Box sx={{ height: { xs: "auto", md: "100vh" } }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    marginTop: "2%",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "justify",
                      // fontSize: "20px",
                    }}
                  >
                      <Fade bottom>
                    <Typography
                      variant="h1"
                      color="textPrimary"
                      sx={{
                        fontSize: "45px",
                        fontWeight: "500",
                        color: "#000",
                        // textAlign:"center",
                      }}
                    >
                      TenUp Nation:
                    </Typography>
                    <Typography
                      component={"h1"}
                      sx={{
                        color: "#000",
                        fontSize: "32px",
                      }}
                    >
                      For Progress, Investment & Success
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: {xs: "center", md: "left"},
                        lineHeight: "1.86",
                        fontFamily: "poppins !important",
                        fontWeight: "300",
                        fontSize: "18px",
                        color: "#677382 !important",
                      }}
                    >
                      Tenup smart is a project initiated to launch MetaVerse
                      solutions by Pakistani crypto influencer Waqar Zaka in
                      collaboration with NED University of engineering &
                      Technology Pakistan which has the best AR & VR lab ,
                      dedicated PH.D professions for this project. TenUp is also
                      a masternode based POS coin. TenUp believes that every
                      individual is blessed with some great skill set and some
                      of those have great passion and enthusiasm to transform
                      their ideas into identities. To provide a push to such
                      creative and intellectual minds, TenUp has come up with a
                      completely unique and out-of-the-box solution. A
                      blockchain based venture capitalist platform to connect
                      the ideas with the investors who are ready to put their
                      trust in highly feasible proposals and providing the
                      transparency and trust that is currently lacking
                      especially when distances are involved.
                    </Typography>
                    </Fade>
                    <Grid container  spacing={2}>
                      <Grid item xs={5} md={12}>
                      <Box sx={{
                      marginTop: "5%",
                      width:{xs:"80%",md:"100%"},
                    }}>
                    <div class="wrapper">
         <div class="icon facebook">
            <div class="tooltip">
               Facebook
            </div>
            <span><i class="fab fa-facebook-f"></i></span>
         </div>
         <div class="icon twitter">
            <div class="tooltip">
               Twitter
            </div>
            <span><i class="fab fa-twitter"></i></span>
         </div>
         <div class="icon instagram">
            <div class="tooltip">
               Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
         </div>
         <div class="icon github">
            <div class="tooltip">
               Github
            </div>
            <span><i class="fab fa-github"></i></span>
         </div>
         <div class="icon youtube">
            <div class="tooltip">
               YouTube
            </div>
            <span><i class="fab fa-youtube"></i></span>
         </div>
      </div>
                    </Box>
                      </Grid>
                      <Grid item xs={7} md={12}><Typography></Typography></Grid>
                    </Grid>
                  </Box>
                  <Button
                    // component={"Link"}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "17px",
                      backgroundColor: "#43C2F2",

                      padding: "17px 28px",
                      borderRadius: "4px 4px 4px 4px",
                      lineHeight: "inherit",
                      fontFamily: "poppins !important",
                      marginTop: "8%",
                      "&:hover": {
                        backgroundColor:
                          "black",
                      },
                    }}
                  >
                  WHITEPAPER
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                <Fade right>
                  <Box
                    component={"img"}
                    sx={{ width: "85%", height: "85%" }}
                    src={Banner}
                  />
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
    
    </>
  );
};
