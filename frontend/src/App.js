import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme.js";

import { CssBaseline, Toolbar } from "@mui/material";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home.js";
import { Profile } from "./routes/Profile.js";
import { Assessment } from "./routes/Assessment.js";
import { AppBar } from "./components/AppBar.js";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<React.Suspense children={<Home />} />} />
        <Route
          path="/assessment"
          element={<React.Suspense children={<Assessment />} />}
        />
        <Route
          path="/profile"
          element={<React.Suspense children={<Profile />} />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
