import React, { Component } from 'react';
import ProfilePic from "../profilePic/ProfilePic";
import AboutMenu from "./AboutMenu"

export default class About extends Component {
  render() {
    return (
        <>
            <ProfilePic page="about" />
            <AboutMenu />  
        </>
      
    );
  }
}
