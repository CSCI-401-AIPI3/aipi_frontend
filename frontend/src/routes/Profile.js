import { Button, Container, Divider, Typography } from "@mui/material";
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

function AboveBelow(industryAverage, userScore, category) {
  if (userScore > industryAverage) {
    return (
      <Typography>
        Your {category} score is ABOVE the industry average
      </Typography>
    );
  } else if (userScore < industryAverage) {
    return (
      <Typography>
        Your {category} score is BELOW the industry average
      </Typography>
    );
  } else {
    return (
      <Typography>
        Your {category} score matches the industry average
      </Typography>
    );
  }
}

export function Profile() {
  let [isLoggedIn, setLoggedIn] = useState(false);
  let [userScores, setUserScores] = useState([]);
  let [industryAverages, setIndustryAverages] = useState([]);

  useEffect(() => {
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
      })
      .catch((e) => {
        console.log("PROFILE - AUTH", e);
      });

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

  console.log("REF DATA", reformattedData);

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

  finalReformattedData.sort((a, b) => a.name - b.name);

  const loggedInView = (
    <>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to your profile
      </Typography>
      <Typography pb={4}>
        Below, you can find a chart of your organization's progress over time.
        It is important to consider both individual growth in specific
        categories as well as holistic growth across all categories.
      </Typography>
      <Typography pb={4}>
        As you change your answers, your score, your awareness of your team's
        technical maturity, and your team's overall technical competency may
        improve.
      </Typography>
      <Typography pb={4}>Technical Maturity Level: Managed</Typography>
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
      <Divider />
      <Button variant="contained">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/assessment"}
        >
          Edit your assessment answers
        </Link>
      </Button>
    </>
  );

  const loggedOutView = (
    <Link style={{ textDecoration: "none", color: "gray" }} to={"/login"}>
      Please log in to view your profile
    </Link>
  );

  // render categoryComponents only if the user is logged in
  const assessmentBody = isLoggedIn ? loggedInView : loggedOutView;

  return <Container sx={{ my: 4 }}>{assessmentBody}</Container>;
}
