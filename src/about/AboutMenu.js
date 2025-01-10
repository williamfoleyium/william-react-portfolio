import React, { Component } from 'react';

export default class AboutMenu extends Component {
   render() {
    console.log("AboutMenu Rendering");
    return (
        <>
            <div className="menu">
                <h1>William Foley</h1>
                <h2>Product Manager</h2>
                <p>New York</p>
            </div>
        </>
    );
   }  
}