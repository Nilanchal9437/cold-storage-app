import AboutComp from "../../components/screen/about/about";
import { connect } from "react-redux";
import React from "react";


class AboutCont extends React.Component {
  render() {
    return <AboutComp {...this.props} />;
  }
}

const mapStateToProps = (store) => ({
  about: store.aboutReducer
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutCont);