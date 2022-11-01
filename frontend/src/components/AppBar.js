import {
  AppBar as AppBarBase,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function AppBar(props) {
  const { sx, ...other } = props;

  let [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3008/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setLoggedIn(response.status === 200);
        });
    } catch (error) {
      console.log(error);
    }
  });

  const profileStatusButton = isLoggedIn ? (
    <Button>
      <Link
        style={{ textDecoration: "none", color: "gray" }}
        to={"/"}
        onClick={() => {
          axios
            .post("http://localhost:3008/logout", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              console.log(response);
              setLoggedIn(response.status === 200);
            });
        }}
      >
        Logout
      </Link>
    </Button>
  ) : (
    <Button>
      <Link style={{ textDecoration: "none", color: "gray" }} to={"login"}>
        Login
      </Link>
    </Button>
  );

  return (
    <AppBarBase
      sx={{ borderBottom: "1px solid", borderBottomColor: "divider" }}
      color="inherit"
      elevation={0}
      {...other}
    >
      <Toolbar>
        <Typography sx={{ fontSize: "2rem", flexGrow: 1 }} variant="h2">
          <Link style={{ textDecoration: "none", color: "gray" }} to={"/"}>
            AIPI3
          </Link>
        </Typography>

        <Typography sx={{ fontSize: "4rem" }} variant="h2">
          {profileStatusButton}
        </Typography>
      </Toolbar>
    </AppBarBase>
  );
}
