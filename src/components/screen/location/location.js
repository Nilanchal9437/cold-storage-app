import React from "react";
import Location from "../../widget/location/location";



export default class LocationComp extends React.Component {
  render () {
    return (
      <>
        <Location {...this.props} />
      </>
    )
  }
}