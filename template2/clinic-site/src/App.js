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
          <div class="content-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">recent article</p>
              <p class="featured-section-subheader">doctors are lifechangers</p>
              <p class="featured-section-subtext">Therapy is a force to unlock patients' inherent life force by improving health. <a href="/">Here's how.</a></p>
            </div>
          </div>

          <div class="content-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">ongoing event</p>
              <p class="featured-section-subheader">local clinic impact health</p>
              <p class="featured-section-subtext">Celebrate the end of our year-long health-journey and hear from our patients about their treatment processes!</p>
            </div>
          </div>

          <div class="content-valign-wrapper">
            <div class="featured-section-container">
              <p class="featured-section-header">featured contributor</p>
              <p class="featured-section-subheader">Dr. Kim</p>
              <p class="featured-section-subtext">Founder, Head clinician</p>
            </div>
          </div>
        </div>
      </div>

      {/* normal content */}
      <div class="grey-section">
        <div class="valign-wrapper">
          <p class="big-text">Start Getting Healthy!</p>
          <p class="medium-text">Improve the quality of your blood.</p>
          <div class="content-template-1">
            <div class="main-text-container">
              <div class="big-text">Collaborations</div>
              <div class="medium-text">Contribute your proven treatments to a group of scholars to be peer reviewed to develop the best solutions.</div>
              <div class="button" href="/">collaborate</div>
            </div>
            <div class="main-picture-container">
              <p class="big-text">most recent collaboration</p>
              <p class="medium-text">How can we improve communication between patient and doctor to better support health regimens?</p>
            </div>
          </div>
        </div>

        <div class="valign-wrapper">
          <div class="content-template-2">
            <div class="content-valign-wrapper">
              <div class="content-container">
                <div class="image-container">

                </div>
                <div class="text-container">
                  <div class="big-text">Option 1</div>
                  <div class="medium-text">This is some text regarding option 1. Should be clickable.</div>
                </div>
              </div>
            </div>

            <div class="content-valign-wrapper">
              <div class="content-container">
                <div class="image-container">

                </div>
                <div class="text-container">
                  <div class="big-text">Option 2</div>
                  <div class="medium-text">This is some text regarding option 2. Should be clickable.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-template-3">
        <div class="text-container">
          <div class="big-text">We are a community of 10,000 doctors nationwide, and over 100,000 patients across the globe.</div>
        </div>
        <div class="image-container"></div>
      </div>

      <div class="content-template-4">
        <div class="content-valign-wrapper">
          <div class="big-text">"There is shared belief among doctors todat that the status quo is that health comes from the blood, and we are able to do something about it."</div>
          <div class="medium-text">- Dr. Kim, Sooje clinic founder</div>
          <div class="button">Join us</div>
        </div>
      </div>

      <div class="footer">
        <div class="content-valign-wrapper">
          <div class="content-container">
            <div class="company-info">
              <img src={logo_and_name} alt="Sooje Clinic Logo"/>
              <div class="big-text">A clinic in seoul, south korea that promotes healthy lifestyle and provides treatment programs for patients.</div>
            </div>

            <div class="contact-us">
              <div class="big-text">contact us</div>
              <div class="medium-text">terms and conditions</div>
              <div class="medium-text">privacy policy</div>
              <div class="medium-text">cookies policy</div>
            </div>

            <div class="follow-us">
              <div class="big-text">follow us</div>
              <div class="socials-container">
                <div class="facebook"></div>
                <div class="twitter"></div>
                <div class="instagram"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-valign-wrapper">
          <div class="content-container">
            <div class="supported-by">
              <div class="big-text">supported by</div>
              <div class="vincent-logo">vincent!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
