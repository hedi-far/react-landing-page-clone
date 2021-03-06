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

// CSS-in-JS

const headerStyles = css`
  font-family: 'Alata', sans-serif;
  height: 100vh;
  background-image: url(${house});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;

  h6 {
    font-size: 12px;
    letter-spacing: 4px;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 3px;
  }
`;

const underline = css`
  text-decoration: underline;
`;

const navBarStyles = css`
  border-style: solid;
  padding: 1px;
  border-color: #a6a6a6;
  border-width: 0px 0px 0.2px 0px;

  ul {
    display: flex;
    justify-content: flex-end;
    color: #ffffff;
    margin-right: 150px;
    letter-spacing: 3px;
    font-size: 12px;

    /* makes urls in navbar a column when screen size decreases */

    @media screen and (max-width: 697px) {
      flex-direction: column;
    }

    li {
      padding: 10px;
      list-style-type: none;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  img {
    height: 16px;
    width: auto;
    float: left;
    margin: 20px 35px;
  }
`;

const intro1 = css`
  margin-top: 100px;
  margin-left: 250px;
`;

const lato = css`
  display: flex;
  justify-content: space-around;
  font-family: 'Lato', sans-serif;
  margin-top: 60px;
  width: 750px;

  a {
    background-color: #e7a285;
    border-radius: 100%;
    color: white;
    padding: 1.3em 2em;
    text-decoration: none;
    margin: 10px 30px 10px -20px;
  }
`;

const detectors = css`
  height: 800px;
  width: 1200px;
  margin-top: 100px;
  margin-left: 250px;

  h6 {
    padding-top: 20px;
    font-size: 11px;
    letter-spacing: 3px;
  }

  h3 {
    font-size: 25px;
    width: 450px;
    line-height: 50px;
  }

  h4 {
    font-size: 20px;
    line-height: 50px;
  }

  img {
    float: right;
    height: 400px;
    margin-top: -450px;
    margin-right: 300px;
  }

  a {
    background-color: #e7a285;
    text-decoration: none;
    color: #ffffff;
    padding: 20px;
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: bold;
  }
`;

const danger = css`
  color: black;
  font-size: 80px;
  text-align: center;
  margin-top: 10px;
  border-style: solid;
  border-color: red;
  border-width: 10px;
  padding: 5px;
`;

function App() {
  return (
    <div>
      {/* header with house background */}

      <header css={headerStyles}>
        {/* nav bar  */}
        <nav css={navBarStyles}>
          <img src={logo} alt="Safewatch Logo" />
          <ul>
            <li>
              <a href="http://www.example.com">HOME</a>
            </li>
            <li>
              <a href="http://www.example.com">FEATURES</a>
            </li>
            <li>
              <a href="http://www.example.com">FREE DDNS</a>
            </li>
            <li>
              {' '}
              <a href="http://www.example.com">ABOUT</a>
            </li>
            <li>
              <a href="http://www.example.com">LOGIN/SIGNUP</a>
            </li>
          </ul>
        </nav>

        <div css={intro1}>
          <h6>INTRODUCING SAFEWATCH</h6>
          <h1>Watch your car</h1>
          <h1 css={underline}>Get your peace of mind. </h1>
          <h1>Level up your security cameras.</h1>
          <h3 css={lato}>
            <a href="http://www.example.com">></a>
            Install in 5 minutes or less, no additional hardware required. Works
            with all your existing cameras. Two weeks of trial period included.
          </h3>
        </div>
      </header>

      {/* section Unlimited detectors */}
      <section css={detectors}>
        <h6>UNLIMITED DETECTORS</h6>
        <h3>
          For only $5/month per camera you can set up alerts for any kind of
          object, and get 14 days of footage backup.
        </h3>
        <h4>
          15 days trial period included.
          <br />
          You don't have to pay anything to try it out!
          <br />
          No credit card required.
        </h4>
        <a href="http://www.example.com">START NOW! ></a>
        <img src={person} alt="" />
      </section>

      <p css={danger}>Danger Zone! Styling ends here!</p>

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
        <img src={logo} alt="Safewatch logo" />
        <h4>hello@usesafewatch.com</h4>
        <a href="http://www.example.com">Privacy Policy></a>
        <img src={product_hunt} alt="Product Hunt logo" />
      </footer>
    </div>
  );
}

export default App;
