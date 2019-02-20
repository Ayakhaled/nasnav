import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class FeatureItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    message: PropTypes.string,
  }

  static defaultProps = {
    icon: "",
    message: "",
  }
  render() {
    const {
      icon,
      message,
    } = this.props;

    return (
      <div className="feature">
        <img src={icon} className="icon" />
        <p>{message}</p>
      </div>
    );
  }
}

export default FeatureItem;