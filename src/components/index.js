import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import withTheme from './with-theme';

class Storefy extends PureComponent {
  render() {
    return <div className={this.props.theme}>{this.props.text}</div>;
  }
}

Storefy.propTypes = {
  text: PropTypes.string.isRequired
}

export default withTheme(Storefy);
