import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import homePage from "../../../images/about/homepage.jpg";
import homelogo from "../../../images/about/best-managed-logo.png";
import Benifit from "./benifit/benfits";


const aboutStyles = makeStyles((theme) => ({
  img: {
    background: `url(${homePage}) no-repeat center center`,
    backgroundImage: `url(${homePage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    minHeight: '600px',
    [theme.breakpoints.down('md')]: {
      minHeight: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '220px',
    },
    borderBottom: 'solid medium #00aeef',
  },
  headding: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '20pt',
    backgroundColor: '#00aeef',
    color: 'white',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '450px',
    },
    marginTop: '-21px',
    padding: '4px 0px',
  },
  subheadding: {
    fontSize: '18pt',
    fontWeight: 100,
  },
  sub: {
    backgroundColor: "#404749",
    color: "#ffffff",
  },
  subparagrap: {
    fontWeight: 50,
    fontSize: 16
  },
  logo: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    }
  },
  phone: {
    textAlign: 'center',
    fontSize: '28px',
    padding: '0.8em 0px',
    fontWeight: 100,
    color: "#fff"
  },
  sub2: {
    backgroundColor: '#00aeef',
  },
  sub3: {
    backgroundColor: "#2b2d2d",
  }
}))

export default function About(props) {
  const classes = aboutStyles();
  return (
    <>
      <Grid container justifyContent="center" className={classes.sub}>
        <Grid item xs={12}>
          <Box className={classes.img} />
          <Typography className={classes.headding} variant="h1">
            CONESTOGA COLD STORAGE
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.sub}>
        <Grid container item xs={11} justifyContent="center">
          <Grid item xs={12} md={8} lg={9}>
            <Box my={4}>
              <Typography className={classes.subheadding}>
                DELIVERING SERVICE YOU DEMAND
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.subparagrap}>
                Serving customers from across Canada and around the world,
                Conestoga operates five automated cold storage warehouses
                with a total storage volume of over 64 million cubic feet
                which provide fully computerized warehouse facilities,
                distribution centres, and a chain of cross docks that enable
                us to deliver product efficiently from coast to coast.
                This combination results in dependable service across the
                country and easy access to all points in Canada and the U.S.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box align="center" mt={10} mb={2}>
              <img src={homelogo} alt="home logo" className={classes.logo} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.sub2}>
        <Grid item xs={11} md={6}>
          <Typography className={classes.phone}>
            GIVE US A CALL 1-905-567-1144
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.sub3}>
        <Grid item xs={11}>
          <Box my={6}>
            <Benifit {...props} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}