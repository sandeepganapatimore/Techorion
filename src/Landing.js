import React from "react";
import logo from "./Images/Logo.png";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Food from "./Images/Food.png";
import middle from "./Images/MiddleLayer.png";
import vector from "./Images/Vector.png";
import chair from "./Images/Modern-Chair-PNG-HD-Quality 1.png";
import table from "./Images/image 2.png";

import SignIn from "./auth/signin";

const navItem = [
  { name: "LOGIN" },
  { name: "RESERVATION" },
  { name: "PRIVATE PARTIES" },
];

const navItem2 = [
  { name: "EVENTS" },
  { name: "CONTACT US" },
  { name: "ABOUT US" },
];

function Header({ open, setOpen }) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#EAE9E4" }}>
      <AppBar sx={{ backgroundColor: "#EAE9E4", boxShadow: 0 }}>
        <Toolbar sx={{ display: "flex", marginLeft: 10 }}>
          <Grid
            sx={{
              display: "flex",
              fontFamily: " Gabriela",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: " 0.02em",
            }}
          >
            {navItem?.map((nav) => {
              return (
                <Typography
                  ml="2rem"
                  component="a"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    if (nav.name === "LOGIN") {
                      setOpen(true);
                    }
                  }}
                  color="#000000"
                  key={nav.name}
                >
                  {nav.name}
                </Typography>
              );
            })}
          </Grid>
          <Grid>
            <Box className="ml-4" sx={{ marginLeft: 25 }}>
              <img src={logo} alt="logo" className="ml-3" />
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ marginLeft: 5, display: "flex" }}>
              {navItem2?.map((nav) => {
                return (
                  <Typography ml="4rem" color="#000000" key={nav.name}>
                    {nav.name}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function Main() {
  return (
    <Box>
      <Grid sx={{ width: "100%" }}>
        <img src={Food} alt="" />
      </Grid>
      <Grid
        style={{
          backgroundImage: { middle },
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Grid>
          <img src={table} alt="" />
        </Grid>
        <Grid>
          <Typography
            sx={{
              fontFamily: "Gabriela",
              fontSize: "32px",
              fontSizeAdjust: "32px",
            }}
          >
            Experience culinary excellence at our restaurant. Book your table
            today and get ready to indulge in a delightful dining experience!!
          </Typography>
        </Grid>

        <img src={chair} alt="" />
      </Grid>
      <Box sx={{ backgroundColor: "black" }}>
        <img src={vector} alt="" />
        <br />
        <Typography
          sx={{ fontFamily: "Rany", fontSize: "25px", fontWeight: "500" }}
          color="white"
        >
          Dessert.Bar.Kitchen
        </Typography>
        <br />
        <Typography color="white">+040 2355 7261</Typography>
        <br />
        <Typography
          sx={{
            height: "14px",
            width: "321px",
            justifyContent: "center",
            marginLeft: "40%",
          }}
          color="white"
        >
          savory@qodeinteractive.com
        </Typography>
      </Box>
    </Box>
  );
}

function Landing() {

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Header setOpen={setOpen} />
      <Main />
      {open && <SignIn open={open} setOpen={setOpen} />}
    </>
  );
}

export default Landing;
