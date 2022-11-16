import {
  AppBar as AppBarBase,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

export function AppBar(props) {
  const { sx, ...other } = props;

  const { setAuth, user } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("http://localhost:3008/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setAuth(false);
          navigate("/login");
        }
      })
      .catch((e) => {
        console.log("NAVBAR - LOG OUT", e);
      });
  };

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
          <Button>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to={"/"}
              onClick={logout}
            >
              Logout
            </Link>
          </Button>
        </Typography>
      </Toolbar>
    </AppBarBase>
  );
}
