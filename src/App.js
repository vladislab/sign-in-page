import React from "react";

import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

class App extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </ThemeProvider>
      </LanguageProvider>
    );
  }
}

export default App;
