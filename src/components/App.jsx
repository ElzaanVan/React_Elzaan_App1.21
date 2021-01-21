import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";
import Project from "./Projects";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
