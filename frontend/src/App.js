import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme.js";
import Login from "./routes/login";
import { CssBaseline, Toolbar } from "@mui/material";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home.js";
import { Profile } from "./routes/Profile.js";
import { Assessment } from "./routes/Assessment.js";
import { AppBar } from "./components/AppBar.js";
import { Footer } from "./components/Footer.js";
import axios from "axios";

function App() {

  
  const testUser = {
    email:"t@test.com",
    password: "123"
  }

  return (
 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position= "fixed"/>
      <Toolbar />
      <Routes>
        <Route exact path="/" element={<React.Suspense children={<Home />} />} />
        {/* <Route path="/assessment" element={<React.Suspense children={<Assessment />} />}/> */}
        <Route path="/login" element={<React.Suspense children={<Login />} />}/>
        <Route path="/profile" element={<React.Suspense children={<Profile />} />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
