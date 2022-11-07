import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Card,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export function Home() {
  return (
    <Container
      style={{
        marginTop: "20px",
        width: "100%",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Typography
        sx={{ mb: 1, fontFamily: "League Spartan" }}
        variant="h2"
        align="center"
      >
        Welcome to the AIPI3® Technical Maturity Assessment
      </Typography>
      <Divider pt={5} />
      <div>
        <img src="/images/homelogo.webp" />
      </div>
      <Divider pt={10} />
      <Typography
        sx={{ fontWeight: "10", marginBottom: "40px" }}
        variant="h4"
        align="center"
        color="textSecondary"
        paragraph
      >
        This assessment will help guide future advances in your company's
        technology not only in terms of what technical problems your team is
        aware of but also how technology is thought about. Your company will be
        assessed through 9 different technologies, each with specific weights,
        to give a hollistic view of progress.
      </Typography>
      <div align="center">
        <Button align="center" variant="contained" size="large">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5rem",
            }}
            to={"/assessment"}
          >
            Take the assessment
          </Link>
        </Button>
      </div>
      <Grid container m={2} p={2} backgroundColor="#E6F3FC">
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                color="text.primary"
                component="div"
                align="center"
              >
                Frontend
              </Typography>
              <Typography variant="h5" color="text.secondary" align="center">
                Analyzes the forward facing user interfaces.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Backend
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Networking
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Security
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Data and Machine Learning
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Tools
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                People
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Processes
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} p={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/homelogo.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Infrastucture Problem Fit
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Completing the assessment will also result in an AIPI3
                consulting professional reach out to you to help
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider />

      <Typography
        variant="h4"
        sx={{ fontWeight: "10" }}
        pt={4}
        pb={4}
        align="center"
        color="textSecondary"
        paragraph
      >
        Completing the assessment will also allow one of our own consulting
        professionals to reach and aid your company's technical maturity
        process.
      </Typography>
      <div align="center">
        <Button align="center" variant="contained" size="large">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5rem",
            }}
            to={"/assessment"}
          >
            Take the assessment
          </Link>
        </Button>
      </div>
    </Container>
  );
}
