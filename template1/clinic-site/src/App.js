import React from 'react';
import logo from './logo.png';

import './App.css';


function App() {
  return (
    <div className="App">

{/* 

      <AppBar position="static">
        <Toolbar class="middle-sections">
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <p>menu!</p>
          </IconButton>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <p>one</p>
          </IconButton>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <p>two</p>
          </IconButton>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <p>three</p>
          </IconButton>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <p>four</p>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

*/}

      {/* navigation bar */}

      <nav class="navbar">
        
        <a class="logo">
            <img src={logo}/>
        </a>
        <a class="menu-option">clinic memberships</a>
        <a class="menu-option">two</a>
        <a class="menu-option">three</a>

        <button type="button" class="member-login">Member Login</button>
      </nav>

      {/* main content */}
      <div class="main-content-background-container">
        <div class="valign-wrapper">
          <div class="main-content">
            <p class="preheader">WELCOME TO SOOJE CLINIC</p>
            <p class="big-text">Notice: Temporary Clinic Closures</p>
            <p class="normal-text">Since the beginning of the COVID-19 outbreak, we have been carefully monitoring the progression of the virus and closely following the advice of Korea’s public health authorities. With the well-being of our Members, Associates and our community in mind we have made the difficult but important decision to temporarily close all Sooje Clinics across Korea, effective March 16, 2020.</p>
            <p class="medium-text">Sign up for email notifications</p>
            <div class="email-and-button">
              <input type="email" name="EmailAddress" placeholder="Enter Your Email"></input>
              <a class="button">submit</a>
            </div>
          </div>
        </div>
      </div>

      {/* other content */}
      <div class="subcontent">
        <div class="valign-wrapper">
          <div class="text-content-container">
            <div class="left">
              <div class="text-content-wrapper">
                <p class="big-text"><a class="intext-link">Sooje Clinic</a> is the most effective way to achieve your health goals.</p>
                <p class="normal-text">Looking to take your health up a notch? A certified Sooje Clinic health practitioner creates a customized health plan to get healthy results, faster than ever.</p>
              </div>
            </div>
          </div>

          <div class="image-container-1"></div>
        </div>
      </div>
      
      <div class="subcontent">
        <div class="valign-wrapper">
          <div class="image-container-2"></div>
          <div class="text-content-container">
            <div class="right">
              <div class="text-content-wrapper">
                <p class="big-text">Our <a class="intext-link">Health Sessions</a> let you get healthy with others who share your passion</p>
                <p class="normal-text">Choose from hundreds of health programs to find the one you love. It's easy to stay motivated when you're led by inspirational doctors and surrounded by people with the same health goals as you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
