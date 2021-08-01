import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import AboutCard from "../aboutCard/aboutCard";



export default class Benifit extends React.Component {
  render() {
    const { about } = this.props.about;
    return (
      <>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box mt={10} mb={5} border={1} borderColor={"#fff"} width="fit-content" mx="auto">
              <Box px={4} py={2}>
                <Typography style={{ color: "#fff", fontWeight: 20, fontSize: 25 }}>
                  BENIFITS
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          {about.map((items, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} style={{ marginTop: 20}}>
              <AboutCard {...items} />
            </Grid>
          ))}
        </Grid>
      </>
    )
  }
}