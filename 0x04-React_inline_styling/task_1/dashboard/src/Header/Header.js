import React from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="logo" className={css(styles.img)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#E11D3F",
    borderBottom: "1px solid #E11D3F",
  },
  img: {
    height: "200px",
    width: "200px",
  },
  h1: {
    marginLeft: "3rem",
  },
});

export default Header;
