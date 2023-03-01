import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends Component() {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection title={this.props.children}></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
