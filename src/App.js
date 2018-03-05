import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';

class App extends Component {
  render() {
    let fonts = ['buble', 'campus', 'messages'];
    let typography = fonts[Math.floor(Math.random() * fonts.length)];
    const font = (Math.random() * 20)+ 30;
    if (font < 80) {
      return (
      <div id="header1" className="box" style={{
        backgroundColor:"hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)"}}>
        <h2 align="center" className={typography} style={{fontSize: font + "px"}}>SI SE PUEDE IMAGINAR, SE PUEDE PROGRAMAR</h2>
        <img src="https://d28k6hocvoxiuc.cloudfront.net/site/images/reactNativeAndroidIos.gif" width="30%"></img>
      </div>
    )
    }
  }
}

export default App;
