import {
  Avatar, Card, CardContent, Box,
  CardHeader, makeStyles, Icon, Typography
} from "@material-ui/core";
import React from "react";



const cardStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: '#353a3a',
    '& .MuiCardHeader-root': {
      padding: 0,
      width: '100%',
      display: 'block',
      '& .MuiCardHeader-avatar': {
        backgroundColor: "#2b2d2d",
        padding: '20px',
        width: '40px',
        borderRadius: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-25px',
      },
    }
  },
  avatar: {
    backgroundColor: "#2b2d2d",
    color: "#00aeef"
  },
  head: {
    color: '#fff',
    fontSize: '14pt',
    textAlign: 'center',
    fontWeight: 200
  },
  sub: {
    color: '#fff',
    fontSize: '10pt',
    textAlign: 'center',
    fontWeight: 10
  }
}))


export default function AboutCard(props) {
  const classes = cardStyles();
  return (
    <>
      <Card className={classes.root} elevation={0}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <Icon fontSize="large">{props.icon}</Icon>
            </Avatar>
          }
        />
        <CardContent>
          <Typography className={classes.head}>
            {props.head}
          </Typography>
          <Box my={2} />
          <Typography className={classes.sub}>
            {props.sub}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
