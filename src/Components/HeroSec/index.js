import React, { Component } from 'react';

import './style.scss';
import heroBG from '../../Images/heroSec.png';
import play from '../../Images/play.png';
import macbook from '../../Images/macbook.png';
import Header from '../Header'

class HeroSec extends Component {
  render() {
    return (
      <div className="heroSec">
        <img src={heroBG} alt="bg" className="heroBG" />
        <div className="heroContent">
          <Header />
          <div className="header-cont">
            <div className="message-cont">
              <h1>
                <span>
                  Nasorg
                </span>
                is the Next Generation of big businesses Data!
              </h1>
              <p>
                Our services are not to be reckoned with upload
                Producs can slipingin your home and see theyou an 
                edge over the online competitors of big businesses data 
              </p>
              <div className="watch-vid">
                <button className="btn">
                  Watch Video
                </button>
                <button className="rounded">
                  <img src={play} alt="play" />
                </button>
              </div>
            </div>
            <div className="images">
              <img src={macbook} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSec;