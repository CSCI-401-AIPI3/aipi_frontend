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
import { Login } from "./routes/Login.js";
import { Signup } from "./routes/Signup";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" />
      <Toolbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<React.Suspense children={<Home />} />}
        />
        <Route
          path="/assessment"
          element={<React.Suspense children={<Assessment />} />}
        />
        <Route
          path="/login"
          element={<React.Suspense children={<Login />} />}
        />
        <Route
          path="/signup"
          element={<React.Suspense children={<Signup />} />}
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
