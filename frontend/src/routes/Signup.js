import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios";

const theme = createTheme();

export function Signup() {
  const [createdAccount, setCreatedAccount] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const passData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("http://localhost:3008/register", passData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          setCreatedAccount(true);
        }
        return response;
      })
      .catch((e) => {
        console.log("SIGNUP - REGISTER", e);
      });
  };

  const proceedButton = createdAccount ? (
    <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}
        to={"/assessment"}
      >
        Take the Assessment
      </Link>
    </Button>
  ) : null;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            marginBottom: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
          <Link
            style={{ textDecoration: "none", color: "gray", fontSize: "1rem" }}
            to={"/login"}
          >
            Already have an account? Log in here
          </Link>
          {proceedButton}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
