import {
  AppBar as AppBarBase,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export function NotAuthAppBar(props) {
  const { sx, ...other } = props;

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
              to={"login"}
            >
              Login
            </Link>
          </Button>
        </Typography>
      </Toolbar>
    </AppBarBase>
  );
}
