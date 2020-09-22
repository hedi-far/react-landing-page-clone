import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// images
import logo from './images/white_compact_word_logo.png';
import person from './images/person_dog_bench.png';
import pinkblitz from './images/pink_blitz.png';
import dashboard from './images/dashboard.png';
import list_icon from './images/list_icon.png';
import clock_icon from './images/clock_icon.png';
import wave_icon from './images/wave_icon.png';
import heatmap from './images/carheatmap.png';
import zapier_logo from './images/zapier_logo.png';
import zap from './images/zap.png';
import product_hunt from './images/product_hunt.png';

// background images
import house from './images/house.jpeg';
import sky from './images/sky.jpg';

const headerStyles = css`
  height: 100vh;
  background-image: url(${house});
  background-repeat: no-repeat;
  background-size: cover;
`;

const navBarStyles = css`
  border-style: solid;
  padding: 30px;
  border-color: #a6a6a6;
  border-width: 0px 0px 0.2px 0px;
  }
`;

const logoStyles = css`
  height: 25px;
`;

function App() {
  return (
    <div>
      {/* header with house background */}

      <header css={headerStyles}>
        {/* nav bar  */}
        <nav css={navBarStyles}>
          <img css={logoStyles} src={logo} alt="Safewatch Logo" />
          <a href="http://www.example.com">HOME</a>
          <a href="http://www.example.com">FEATURES</a>
          <a href="http://www.example.com">FREE DDNS</a>
          <a href="http://www.example.com">ABOUT</a>
          <a href="http://www.example.com">LOGIN/SIGNUP</a>
        </nav>
        {/* intro section  */}

        <h6>INTRODUCING SAFEWATCH</h6>
        <h1>
          Watch your car/your child/your dog/for packages/out for robbers.
        </h1>
        <h1>Get your peace of mind. </h1>
        <h1>Level up your security cameras.</h1>
        <a href="http://www.example.com">></a>
        <h3>
          Install in 5 minutes or less, no additional hardware required. Works
          with all your existing cameras. Two weeks of trial period included.
        </h3>
      </header>

      {/* section Unlimited detectors */}
      <section>
        <h6>UNLIMITED DETECTORS</h6>
        <h3>
          For only $5/month per camera you can set up alerts for any kind of
          object, and get 14 days of footage backup.
        </h3>
        <h4>
          15 days trial period included. You don't have to pay anything to try
          it out! No credit card required.
        </h4>
        <a href="http://www.example.com">START NOW! ></a>
        <img css={logoStyles} src={person} alt="" />
      </section>

      {/* section Create, Connect, Detect! */}
      <section>
        <img src={pinkblitz} alt="" />
        <h1>Create, Connect, Detect!</h1>
        <h5>To start detecting is as easy as 1-2-3.</h5>
        <img src={dashboard} alt="Screenshot of dashboard" />
      </section>

      {/* section options */}
      <section>
        <img src={list_icon} alt="List" />
        <h4>Over 60 different combinations</h4>
        <h2>
          With 8 detectors to pick from, and various settings, you can watch for
          any event.
        </h2>

        <img src={clock_icon} alt="Clock" />
        <h4>Time based detection</h4>
        <h2>
          You can set Safewatch to detect objects only during a certain time of
          the day.
        </h2>
        <img src={wave_icon} alt="" />
        <h4>Alert you if an object leaves the frame.</h4>
        <h2>
          You can have peace of mind, by having your car watched 24/7 by
          Safewatch.
        </h2>
      </section>

      {/* section heatmaps */}
      <section>
        <img src={heatmap} alt="Heatmap" />
        <h1>Safewatch generates heatmaps from your detections</h1>
        <h5>
          Get more insights from your detections, and gain a better
          understanding of the patterns.
        </h5>
        <a href="http://www.example.com">LEARN MORE ></a>
      </section>

      {/* section Zapier */}
      <section>
        <h1>Integrate your detections with Zapier</h1>
        <h4>
          Automate actions taken immediately after an object has been detected.
          Create Zaps between Safewatch and a list of more than 2000 apps, so
          that everything is taken care of.
        </h4>
        <img src={zapier_logo} alt="Zapier logo" />
        <img src={zap} alt="Screenshot of Zapier dashboard" />
      </section>

      {/* section blue sky */}
      <section>
        <h1>What are you waiting for? Start detecting today.</h1>
        <a href="http://www.example.com">Create an account ></a>
        <h4>Do you have a question? Don't hesitate! hello@usesafewatch.com</h4>
      </section>

      <footer>
        <img css={logoStyles} src={logo} alt="Safewatch logo" />
        <h4>hello@usesafewatch.com</h4>
        <a href="http://www.example.com">Privacy Policy></a>
        <img src={product_hunt} alt="Product Hunt logo" />
      </footer>
    </div>
  );
}

export default App;
