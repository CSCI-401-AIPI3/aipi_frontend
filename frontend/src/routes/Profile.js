import { Button, Container, Divider, Grid, Typography,Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Line,
} from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import CardMedia from "@mui/material/CardMedia";

function AboveBelow(industryAverage, userScore, category) {
  if (userScore > industryAverage) {
    return (
      <Typography>
        {category}: {Math.trunc((userScore - industryAverage) * 100)}% above the
        industry average
      </Typography>
    );
  } else if (userScore < industryAverage) {
    return (
      <Typography>
        {category}: {Math.trunc((industryAverage - userScore) * 100)}% below the
        industry average
      </Typography>
    );
  } else {
    return (
      <Typography>
        {category}: your score matches the industry average
      </Typography>
    );
  }
}

export function Profile() {
  let [userScores, setUserScores] = useState([]);
  let [industryAverages, setIndustryAverages] = useState([]);

  const { auth } = useAuth();

  let currentAverage = 0;
  let maturity = "";
  let maturityDescription = "";

  useEffect(() => {
    axios
      .get("http://localhost:3008/getUserScores", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("PROFILE - USER SCORE repsonse", response.data);
        setUserScores(response.data);
      })
      .catch((e) => {
        console.log("PROFILE - USER SCORES error", e);
      });

    axios
      .get("http://localhost:3008/getIndustryAverages", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("PROFILE - INDUSTRY AVREAGES response", response.data);
        setIndustryAverages(response.data);
      })
      .catch((e) => {
        console.log("PROFILE - INDUSTRY AVERAGES error", e);
      });
  }, []);

  const requestHelp = () => {
    axios
      .post("http://localhost:3008/requestHelp", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("SUBMIT ANSWERS", response);
      })
      .catch((e) => {
        console.log("SUBMIT ANSWERS", e);
      });
  };

  const db_cat_to_display_cat = {
    FRONTEND: "Frontend",
    BACKEND: "Backend",
    NETWORKING: "Networking",
    DATA_AND_ML: "Data",
    SECURITY: "Security",
    TOOLS: "Tools",
    PEOPLE: "People",
    PROCESSES: "Processes",
    INFRASTRUCTURE_FIT: "Infrastructure Fit",
  };

  const timestamps = [];
  userScores.forEach((dataPoint) => {
    if (!timestamps.includes(dataPoint.timestamp)) {
      timestamps.push(dataPoint.timestamp);
    }
  });
  timestamps.sort();
  const lastTimestamp = timestamps[timestamps.length - 1];
  const timestampsMap = new Map();
  timestamps.forEach((timestamp, index) => {
    timestampsMap.set(timestamp, index);
  });

  let reformattedData = {};
  userScores.forEach((dataPoint) => {
    const ts = timestampsMap.get(dataPoint.timestamp);
    if (!(ts in reformattedData)) {
      reformattedData[ts] = {};
    }
    reformattedData[ts][db_cat_to_display_cat[dataPoint.category]] =
      dataPoint.score;
  });

  let finalReformattedData = [];
  for (let [time, categoryScores] of Object.entries(reformattedData)) {
    let averageScore = 0;
    for (let val of Object.values(categoryScores)) {
      averageScore += val;
    }
    averageScore /= Object.values(categoryScores).length;
    finalReformattedData.push({
      name: time,
      Average: averageScore,
      ...categoryScores,
    });
  }

  if (finalReformattedData.length > 0) {
    currentAverage =
      finalReformattedData[finalReformattedData.length - 1].Average;
  }

  if (currentAverage < 22.5) {
    maturity = "Initial";
    maturityDescription =
      "You are just getting started in your technical maturity journey! Congratulations on taking this first step";
  } else if (currentAverage < 45) {
    maturity = "Managed";
    maturityDescription =
      "You are getting your feet wet in introducing essential technological practices into your organization. Focus on getting the basics for every type of user interaction: make sure that there is at least one reliable channel of communication between you and the user, create a testing framework for your employees to build off of, etc.";
  } else if (currentAverage < 67.5) {
    maturity = "Defined";
    maturityDescription =
      "You have created a solid foundation in good technological practices. There should be some basic bug resolution method, some sort of data collection method, and some sort of styling guidelines in place. Focus on increasing the number and implementations of these categories [i.e. allowing communication through both email and text, comprehensive testing coverage, etc.]";
  } else if (currentAverage < 90) {
    maturity = "Quantitatively Managed";
    maturityDescription =
      "You have covered all of your bases in terms of communication, testing, and all other categories. You should now have multiple  fail-proof methods of resolving your day to day tasks [collecting user complaints, improving unclear UI implementations, etc.]. Focus on now extending your tasks into stretch goals. These could include analyzing your data and putting it through a machine learning model to predict future patterns in user behavior, developing stress-testing frameworks that go beyond your expected maximum traffic, etc.";
  } else {
    maturity = "Optimizing";
    maturityDescription =
      "You are now in the thick of optimizing your website, workflow, and many other aspects of your company. Keep this mentality in mind moving forward, and you are well on your way to being a technologically-competent force to be reckoned with!";
  }

  finalReformattedData.sort((a, b) => a.name - b.name);

  const loggedInView = (
    <>
      <Typography sx={{ mb: 4, fontSize: "4.25rem",fontWeight:"bold"}} variant="h2" align="center">
        Welcome to your Profile
      </Typography>

      <Box>
        <CardMedia
          sx={{ gridArea: "1/1/2/2", height: 320 }}
          image="../../images/logobig.jpg"
        />
        <Container sx={{ gridArea: "1/1/2/2" }}>...</Container>
      </Box>
      <Divider pt={10} />
      
      <Typography sx={{ fontSize: "3rem", lineHeight: 1}}  pb={1}align="center" paragraph>
        Below, you can find a chart of your organization's progress over time.
        Consider both individual growth in specific
        categories as well as holistic growth across all categories.
      </Typography>
      <Typography sx={{fontSize: "1.5rem", lineHeight:1}}align="center">
        *As answers change - your score, awareness of your team's
        technical maturity, and your team's overall technical competency may
        improve.
      </Typography>
      <Typography sx={{fontSize: "3rem"}} pb={1}align="center" pt={4} variant="h5">
        Technical Maturity Level:
      </Typography>
      <Typography sx={{fontSize: "3rem", fontWeight:"bold", color:"orange"}} pb={1}align="center" pt={4} variant="h5">{maturity}</Typography>
      <Typography sx={{fontSize: "2rem"}} pb={1}align="center" pt={4} variant="h5">{maturityDescription}</Typography>
      <Typography pt={4} variant="h5">
        Category-Specific Industry Comparison
      </Typography>
      {industryAverages.map((dataPoint) => {
        return AboveBelow(
          dataPoint.score,
          userScores.filter((score) => {
            return (
              score.category === db_cat_to_display_cat[dataPoint.category] &&
              score.timestamp === lastTimestamp
            );
          }),
          db_cat_to_display_cat[dataPoint.category]
        );
      })}
      <Divider mt={4} />
      <Grid item container xs={12} direction="column">
        <Grid item pt={4}>
          <ComposedChart width={730} height={250} data={finalReformattedData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="Frontend" barSize={20} fill="#fa7921" />
            <Bar dataKey="Backend" barSize={20} fill="#19647e" />
            <Bar dataKey="Networking" barSize={20} fill="#28afb0" />
            <Bar dataKey="Infrastructure Fit" barSize={20} fill="#2DF3FF" />
            <Bar dataKey="Security" barSize={20} fill="#19A8D1" />
            <Bar dataKey="People" barSize={20} fill="#4979D3" />
            <Bar dataKey="Tools" barSize={20} fill="#00C2DA" />
            <Bar dataKey="Processes" barSize={20} fill="#FF8F00" />
            <Bar dataKey="Data" barSize={20} fill="#5B6EFF" />
            <Line type="monotone" dataKey="Average" stroke="#f4d35e" />
          </ComposedChart>
        </Grid>
        <Grid item pt={4}>
          <Button mt={4} variant="outlined">
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to={"/assessment"}
            >
              Edit your assessment answers
            </Link>
          </Button>
        </Grid>
        <Grid item pt={2}>
          <Button mt={4} variant="contained" onClick={requestHelp}>
            Request help from a mentor
          </Button>
        </Grid>
      </Grid>
    </>
  );

  const loggedOutView = (
    <Link style={{ textDecoration: "none", color: "gray" }} to={"/login"}>
      Please log in to view your profile
    </Link>
  );

  // render categoryComponents only if the user is logged in
  const profileBody = auth ? loggedInView : loggedOutView;

  return <Container sx={{ my: 4 }}>{profileBody}</Container>;
}
