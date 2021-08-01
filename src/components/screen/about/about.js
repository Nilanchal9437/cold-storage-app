import React from 'react';
import About from "../../widget/about/about";

export default class AboutComp extends React.Component {
  render() {
    return (
      <>        
        <About {...this.props} />
      </>
    )
  }
}