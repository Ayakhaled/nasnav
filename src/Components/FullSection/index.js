import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import icon from '../../Images/icon1.svg';
import FeatureItem from '../FeatureItem';


class FullSection extends Component {
  static propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
    imageClass: PropTypes.string,
    title: PropTypes.string,
    headline: PropTypes.string,
    headlineBold: PropTypes.string,
    message: PropTypes.string,
    liveDemo: PropTypes.bool,
  }

  static defaultProps = {
    image: "",
    className: "",
    imageClass: "",
    title: "",
    headline: "",
    headlineBold: "",
    message: "",
    liveDemo: false,
  }

  render() {
    const {
      image,
      className,
      imageClass,
      title,
      headline,
      headlineBold,
      message,
      liveDemo,
    } = this.props;
    return (
      <div className="styleSec-wrapper ">
        <div className={`styleSec ${className}`}>
          <img src={image} className={`${imageClass} styleSec__img`} />
          <div className="message">
            <p>{title}</p>
            <h1>
              <span>{headlineBold}</span>
              {headline}
            </h1>
            <p>
              {message}
            </p>
            <div>
              {this.props.children}
            </div>
            <div className="btn-list">
              <button className="blue-btn" >Get Started</button>
              {
                liveDemo ? <button className="gr-btn" >Live Demo</button> : null
              }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullSection;