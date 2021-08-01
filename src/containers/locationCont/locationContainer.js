import React from "react";
import { connect } from "react-redux";
import LocationComp from "../../components/screen/location/location";


class LocationCont extends React.Component {
  render() {
    return <LocationComp {...this.props} />;
  }
}

const mapStateToProps = (store) => ({
  location: store.locationReducer
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCont);