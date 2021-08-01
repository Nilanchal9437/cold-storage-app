import {
  Box, Card, CardContent,
  Grid, makeStyles, Typography
} from "@material-ui/core";
import React from "react";

const CardStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '100%'
  },
  head: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  link: {
    color: '#00aeef',
    fontSize: '18px',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontWeight: 100,
    '&:hover': {
      textDecoration: "underline"
    }
  },
  sub: {
    fontSize: '16px',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontWeight: 100,
  },
  box1: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4)
    }
  }
}))

export default function LocationCard(props) {

  const classes = CardStyles();

  return (
    <Box border={1} padding={1} borderColor={'#e8e8e8'}>
      <Card elevation={0}>
        <CardContent>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <img src={props.img} alt={props.img} className={classes.img} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box mx={2} className={classes.box1}>
                <Box mx={2}>
                  <Typography className={classes.head}>
                    {props.head}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <a href={props.link} className={classes.link}>
                    {props.subhead}
                  </a>
                </Box>
                <Box mx={2}>
                  <Typography className={classes.head}>
                    Services
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Typography className={classes.sub}>
                    {props.time}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Typography className={classes.sub}>
                    {props.area}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Typography className={classes.sub}>
                    {props.distance}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Typography className={classes.sub}>
                    {props.paragrap}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}