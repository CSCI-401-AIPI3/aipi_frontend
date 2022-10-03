import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the AIPI3 Technical Maturity Assessment
      </Typography>
      <Divider />
      <Typography variant="body1" pt={2} pb={2}>
        This assessment will help guide future advances in your company's
        technology not only in terms of what technical problems your team is
        aware of but also how technology is thought about.
      </Typography>
      <Typography variant="body1" pb={2}>
        Based on your answers, your company will be placed in one of five
        levels:
      </Typography>
      <List>
        <ListItem>Initial</ListItem>
        <ListItem>Defined</ListItem>
        <ListItem>Managed</ListItem>
        <ListItem>Quantitatively Managed</ListItem>
        <ListItem>Optimizing</ListItem>
      </List>
      <Typography variant="body1" pb={2}>
        By creating an account, you can return to the assessment at any time and
        update it with progress.
      </Typography>
      <Typography variant="body1" pb={2}>
        Completing the assessment will also result in an AIPI3 consulting
        professional reach out to you to help personally aid in your company's
        technical maturity process.
      </Typography>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyItems="center"
        p={2}
      >
        <Grid item container direction="row">
          <Grid item p={2}>
            <TextField required label="Name"></TextField>
          </Grid>
          <Grid item p={2}>
            <TextField required label="Password"></TextField>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item p={2}>
            <TextField required label="Confirm Password"></TextField>
          </Grid>
          <Grid item p={2}>
            <TextField required label="Company"></TextField>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item p={2}>
            <TextField required label="Email"></TextField>
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/assessment"}
        >
          Take the assessment
        </Link>
      </Button>
    </Container>
  );
}
