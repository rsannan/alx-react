import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleLoginSubmit() {
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmitButton() {
    if (this.state.email != "" && this.state.password != "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className={css(loginStyles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form
            onSubmit={this.handleLoginSubmit}
            onChange={this.handleSubmitButton}
          >
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              className={loginStyles.inputs}
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={loginStyles.inputs}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  inputs: {
    margin: "0 16px 0 8px",
  },
});

export default Login;
