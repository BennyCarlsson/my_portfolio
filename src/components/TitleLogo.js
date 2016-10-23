import React, {Component} from 'react';

class TitleLogo extends Component{
  render(){
    var titleId = "titleLogoDiv";
    titleId += this.props.showPage ? " titleLogoDiv-small" : "";
    return(
        <div className={titleId}>
          <h1 id="titleLogoH1">Benny <span id="lastnameInTitleLogo">Carlsson</span></h1>
        </div>
    );
  }
}

export default TitleLogo;
