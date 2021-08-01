import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../../images/location/locations.jpg";
import LocationCard from "./locationCard/locationCard";

const locationStyles = makeStyles((theme) => ({
  img: {
    background: `url(${logo}) no-repeat center center`,
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    minHeight: '400px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '220px',
    },
    borderBottom: 'solid medium #00aeef',
  },
  head: {
    color: '#00aeef',
    fontSize: 40
  },
}));

export default function Location(props) {

  const location = props.location.location;

  const classes = locationStyles();

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box className={classes.img} />
        </Grid>
        <Grid item xs={11}>
          <Box my={1}>
            <Typography className={classes.head}>
              Locations
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11}>
          {location.map((locate, index) => (
            <Box my={2} key={index}>
              <LocationCard {...locate} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  )
}