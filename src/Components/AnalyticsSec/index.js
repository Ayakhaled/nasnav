import React, { Component } from 'react';

import './style.scss';
import left from '../../Images/left.svg';
import right from '../../Images/analytics2.svg';
import logoBlue from '../../Images/logoblue.svg';
import analyticsBG from '../../Images/analyticsbg.svg';

class AnalyticsSec extends Component {
  render() {
    return (
      <div className="analytics-sec">
        <img src={analyticsBG} className="bg"/>
        <div className="content">
          <img src={left} className="left" />
          <div className="center">
            <img src={logoBlue} />
            <p>We use proven technologies, combining them with new concepts and techniques 
  wherever possible. In this way we rapidly develop tailor-made solutions which
  incubates location-based and retailers services technologies.</p>
            <button className="blue-btn">Get Started</button>
          </div>
          <img src={right} className="right" />
        </div>
      </div>
    );
  }
}

export default AnalyticsSec;