import React, {Component} from 'react';

class TitleLogo extends Component{
  titleClick(){
    this.props.resetPage();
  }
  render(){
    var titleId = "titleLogoDiv";
    //ugly but if showPage null then none of these
    console.log(this.props.showPage);
    titleId += this.props.showPage ? " titleLogoDiv-small" : "";
    titleId += this.props.showPage === false ? " titleLogoDiv-big" : "";
    return(
        <div className={titleId} onClick={this.titleClick.bind(this)}>
          <h1 id="titleLogoH1">Benny <span id="lastnameInTitleLogo">Carlsson</span></h1>
        </div>
    );
  }
}

export default TitleLogo;
