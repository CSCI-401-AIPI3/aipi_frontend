import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

const theme = createTheme();

export function Login() {
  const { setAuth, user } = useAuth();

  const [signedInAccount, setSignedInAccount] = React.useState(false);

  const login = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const passData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("http://localhost:3008/login", passData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setAuth(true);
          setSignedInAccount(true);
        }
        return response;
      })
      .catch((e) => {
        console.log("SIGNUP - REGISTER", e);
        if (e.response) console.log(e.response.data);
        <Alert severity="error">This is an error alert — check it out!</Alert>;
      });
  };

  const proceedButton = signedInAccount ? (
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
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
              Sign In
            </Button>
          </Box>
          <Link
            style={{ textDecoration: "none", color: "gray", fontSize: "1rem" }}
            to={"/signup"}
          >
            Don't have an account? Sign up here
          </Link>
          {proceedButton}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
