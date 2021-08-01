import Router from "../../components/router/router";
import React from "react";
import { connect } from "react-redux";


class RouterCont extends React.Component {
  render() {
    return <Router {...this.props} />;
  }
}

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,  mapDispatchToProps)(RouterCont);