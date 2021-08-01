import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutCont from "../../containers/aboutCont/aboutContainer";
import LocationCont from "../../containers/locationCont/locationContainer";
import CustomAppBar from "../UI/appBar/appBar";
import Footer from "../UI/footer/footer";

export default class Router extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <CustomAppBar />
          <Route exact path='/' component={AboutCont} />
          <Route path='/location' component={LocationCont} />
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}