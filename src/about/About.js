import React, { Component } from 'react';
import ProfilePic from "../profilePic/ProfilePic";
import AboutMenu from "./AboutMenu";
import className from 'classnames';


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
