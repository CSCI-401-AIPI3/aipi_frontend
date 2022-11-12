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
        sx={{ mb: 1, fontFamily: "Helvetica" }}
        variant="h2"
        align="center"
      >
        Welcome to AIPI3® Technical Maturity Assessment
      </Typography>
      <Divider pt={5} />

      <Box
        sx={{
          display: "grid",
          justifyItems: "stretch",
          alignItems: "stretch",
          gridTemplateColumns: "1fr",
          background: "../../images/homelogo.webp",
          paddingBottom: "2%"
        }}
        component="header"
      >
        <CardMedia
          sx={{ gridArea: "1/1/2/2", height: 500 }}
          image="../../images/homelogo.webp"
        />
        <Container sx={{ gridArea: "1/1/2/2" }}>...</Container>
      </Box>
      <Divider pt={10} />

      <Box
          sx={{
            display: "grid",
            justifyItems: "stretch",
            alignItems: "stretch",
            gridTemplateColumns: "1fr",
            backgroundColor: "black",
          }}
          component="header"
        >
        <Typography
          sx={{ fontWeight: "bold" }}
          pt={5}
          variant="h3"
          align="center"
          color="white"
          gutterBottom
        >
        
          What is it?
        </Typography>
        <Typography
          sx={{ fontWeight: "10", marginBottom: "40px" }}
          variant="h4"
          align="center"
          color="white"
          paragraph
        >
          This assessment will help guide future advances in your company's
          technology not only in terms of what technical problems your team is
          aware of but also how technology is thought about. Your company will be
          assessed through 9 different technologies, each with specific weights,
          to give a hollistic view of progress.
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{paddingTop:"2%"}}>
        
        <Grid item md={6}>
        <CardMedia
              component="img"
              height="500"
              image="/images/side.webp"
        />
        </Grid>
        <Grid item md={6}>
        <CardMedia
            
        />
        Benefits of taking assessment/logging in. Trying to make this a carousel.
          take the assessment and view your results
          talk with a professional on goals/metrics
          track progress throughout development, edit as needed
        </Grid>
        
      </Grid>
      <Grid container spacing={4} sx={{paddingTop:"2%"}}>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888" }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401frontend.jpg"
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
                Analyzes forward facing user interfaces.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} >
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401backend.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
                Asseses test coverage and backend computations
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401networking.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
                Checks integrity of both wireless and wired networks
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401security.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
                Investigates cybersecurity practices and user account access
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400 , backgroundColor: "#E6F3FC",boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401machinelearning.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Data 
              </Typography>
              <Typography variant="h5" color="text.secondary" align="center">
                Analyzes how data is cleansed and accessed by users, with foucs on machine learning
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401tools.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
                Assesses executive structure and team management techniques 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401people.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
               Investigates internal employee knowledge and firm employee hierarchy 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC",boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401process.jpg"
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
              <Typography variant="h5" color="text.secondary" align="center">
              Focuses on utilizing human resources and team engagements
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 400, backgroundColor: "#E6F3FC",boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",border: 1,borderColor:"#888888"}}>
            <CardMedia
              component="img"
              height="250"
              image="/images/401infrastructure.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                Infrastucture-Problem Fit
              </Typography>
              <Typography variant="h5" color="text.secondary" align="center">
                Analyses synergy business practices and customer needs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider />
      <Typography
        variant="h4"
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
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
            to={"/assessment"}
          >
            Take the assessment
          </Link>
        </Button>
      </div>
    </Container>
  );
}
