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
import { NotAuthAppBar } from "./components/NotAuthAppBar.js";
import { Footer } from "./components/Footer.js";
import ExpandingCard from "./components/ExpandingCard";
import { Login } from "./routes/Login.js";
import { Signup } from "./routes/Signup";
import { Admin } from "./routes/Admin.js";
import axios from "axios";
import { useAuth } from "./components/AuthContext";

function App() {
  axios.defaults.withCredentials = true;

  const { auth } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {auth ? <AppBar position="fixed" /> : <NotAuthAppBar position="fixed" />}
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
        <Route
          path="/admin"
          element={<React.Suspense children={<Admin />} />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
