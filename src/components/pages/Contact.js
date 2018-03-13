import React, { Component } from "react"

class Contact extends Component {
  render() {
    return (
      <div id="contactContent">
        <div id="contactdiv">
          <h2>
            <a id="mailtag" href="mailto:carlsson.benny93@gmail.com">
              Carlsson.Benny93@gmail.com
            </a>
          </h2>
          <span id="SocialMediaSpan">
            <SocialMedia />
          </span>
        </div>
        <div id="bennybananadiv">
          <img
            src="images/benny-banana-selfie.png"
            alt="benny carlsson taken a selfie with a banana"
          />
        </div>
      </div>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaContact">
        <a
          href="https://www.linkedin.com/in/benny-carlsson-620226ba"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/Benny_Carlsson" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default Contact
