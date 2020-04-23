import React from 'react';
import logo_and_name from './logo_and_name.png';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* navigation bar */}

      <div class="navbar">
        <a class="logo-and-name" href="/">
          <img src={logo_and_name} alt="Sooje Clinic Logo"/>
        </a>

        <div class="right-side">
          <a class="menu-option" href="/">memberships</a>
          <a class="menu-option" href="/">option2</a>
          <a class="menu-option" href="/">option3</a>
          <a class="menu-option" href="/">Member Login</a>
        </div>
      </div>

      {/* intro content */}
      <div class="valign-wrapper">
        <div class="intro-content">
          <div class="clinic-logo">
            <img src={logo} alt="Sooje Clinic Logo"/>
          </div>
          <p class="big-text">Doctors are the innovators healthcare has been waiting for.</p>
          <p class="small-text">Preparing our patients to be the healthy people of tomorrow</p>
          <a class="button" href="/">Join us</a>
        </div>
      </div>
    
      {/* welcome content */}
      <div class="welcome-background-image-container">
        <div class="welcome-caption-container">
          <p class="caption-text">Equipment used for treating patients at the clinic.</p>
        </div>
      </div>
      <div class="welcome-text-container">
        <p class="big-text">Welcome to Sooje Clinic</p>
        <p class="medium-text">We are a clinic that helps patients' problems to solve the biggest challenges in health today. In our collaborative health programs we use traditional korean medicine, a world-famous approach to improving health. Practioners tap into a wealth of proven remedies by creating a personalized health program for each patient on a case by case basis.</p>
        <a class="button" href="/">Learn about us</a>
      </div>

      {/* featured content */}
      <div class="featured-content-container">
        <p class="big-text">Featured Content</p>
        <div class="featured-subsections-container">
          <div class="featured-section-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">recent article</p>
              <p class="featured-section-subheader">doctors are lifechangers</p>
              <p class="featured-section-subtext">Therapy is a force to unlock patients' inherent life force by improving health. <a href="/">Here's how.</a></p>
            </div>
          </div>

          <div class="featured-section-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">ongoing event</p>
              <p class="featured-section-subheader">local clinic impact health</p>
              <p class="featured-section-subtext">Celebrate the end of our year-long health-journey and hear from our patients about their treatment processes!</p>
            </div>
          </div>

          <div class="featured-section-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">featured contributor</p>
              <p class="featured-section-subheader">Dr. Kim</p>
              <p class="featured-section-subtext">Founder, Head clinician</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
