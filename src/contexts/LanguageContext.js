import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "french" };
  }
  changeLang = e => {
    this.setState({ language: e.target.value });
  };
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLang: this.changeLang }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
