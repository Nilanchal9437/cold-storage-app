import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import divide from "../../../images/footer/CCS-footer-01.png";
import manege from "../../../images/footer/best-managed-logo-01.png";
import iarw from "../../../images/footer/IARW-logo.png";
import WFLO from "../../../images/footer/WFLO-logo.png";

const footerStyles = makeStyles((theme) => ({
  root1: {
    backgroundColor: "#1d1e20",
    boxShadow: '0px 0px 6px #111',
  },
  root2: {
    backgroundColor: "#ffffff",
  },
  link: {
    textDecoration: "none",
    textTransform: 'none',
    color: "#fff",
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 100,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  base: {
    color: '#fff',
    fontWeight: 1
  },
  basefoot: {
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
    backgroundColor: "#1d1e20",
  },
  footbaseimg: {
    height: "86px",
    verticalAlign: 'middle',
    border: 0,
    float: 'right',
  }
}));

export default function Footer() {

  const classes = footerStyles();

  return (
    <>
      <Grid container justifyContent="center" className={classes.root1}>
        <Grid container item xs={12} md={6} justifyContent="center">
          <Grid item xs={4} sm={2}>
            <Box mt={2}>
              <Link to="/location" className={classes.link} >
                LOCATION
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Box mt={2}>
              <Link to="/" className={classes.link} >
                CARRER
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4} sm={6}>
            <Box mt={2}>
              <Link to="/" className={classes.link} >
                ABOUT
              </Link>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box my={2}>
              <Typography variant="caption" className={classes.base}>
                © 2021 CONESTOGA COLD STORAGE. ALL RIGHTS RESERVED.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} justifyContent="center" className={classes.root2}>
          <Grid item xs={4} sm={3} className={classes.basefoot}>
            <Box>
              <img src={divide} alt="devide" className={classes.footbaseimg} />
            </Box>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box my={2} align="center">
              <img src={manege} alt="manege" height="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box my={2} align="center">
              <img src={iarw} alt="iarw" height="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box my={2} align="center">
              <img src={WFLO} alt="WFLO" height="40px" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}