import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the AIPI3 Technical Maturity Assessment
      </Typography>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "gray" }}
          to={"/assessment"}
        >
          Take the assessment
        </Link>
      </Button>
    </Container>
  );
}
