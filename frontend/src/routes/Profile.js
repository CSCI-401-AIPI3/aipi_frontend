import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome your profile
      </Typography>
      <Typography>Here, we will insert your scores, etc.</Typography>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "gray" }}
          to={"/assessment"}
        >
          Edit your assessment answers
        </Link>
      </Button>
    </Container>
  );
}
