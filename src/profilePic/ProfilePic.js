import React, { Component } from 'react';
import PropTypes from "prop-types";
import ProfileImage from "../assets/WF_Profile_Picture5.png";
import "../styles/profilePic.css"

const ProfilePic = ({ page }) => {
  const profilePicClass = `profilePic ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={ProfileImage} className={profilePicClass} alt='profile pic'/>
    </>
  );
};

ProfilePic.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ProfilePic;
