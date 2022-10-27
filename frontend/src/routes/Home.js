import {  Button,   Container,
  Divider,
  Grid,
  Card,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export function Home() {
  return (
    <Container style={{marginTop: '10px', }}>
      <Typography sx={{ mb: 4 }} variant="h2" align="center">
        Welcome to AIPI3® Technical Maturity Assessment
      </Typography>
      <Divider />
      <Typography pt={5} variant="h3" align="center" color="textPrimary" gutterBottom>
        What is it?
      </Typography>
      <Typography variant="h4" align="center" color="textSecondary" paragraph>
        This assessment will help guide future advances in your company's
        technology not only in terms of what technical problems your team is
        aware of but also how technology is thought about.
      </Typography>
      <div>
        <img src="/images/homelogo.webp"/>
      </div>

      <Typography variant="h5" pt={10} align="center" color="textSecondary" paragraph>
        Based on your assessment, your company will be placed in one of 6
        levels:
        Your company will be assessed through 6 different technologies, 
      </Typography>

      <div>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="/images/homelogo.webp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Frontend
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Completing the assessment will also result in an AIPI3 consulting
              professional reach out to you to help
            </Typography>
          </CardContent>
        </Card> <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="/images/homelogo.webp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Backend
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Completing the assessment will also result in an AIPI3 consulting
              professional reach out to you to help
            </Typography>
          </CardContent>
        </Card>
      </div>
      

      <Divider />
      <Typography variant="body1" pb={2} align="center" color="textSecondary" paragraph>
        By creating an account, you can return to the assessment at any time and
        update it with progress.
      </Typography>
      <Typography variant="body1" pb={2} align="center" color="textSecondary" paragraph>
        Completing the assessment will also result in an AIPI3 consulting
        professional reach out to you to help personally aid in your company's
        technical maturity process.
      </Typography>
      <div align="center">
        <Button align= "center" variant="contained" size="large">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/assessment"}
          >
            Take the assessment
          </Link>
        </Button>
      </div>

    </Container>



  );
}
