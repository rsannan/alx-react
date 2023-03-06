import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodySectionStyle.body)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const bodySectionStyle = StyleSheet.create({
  body: { marginBottom: "40px" },
});

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
