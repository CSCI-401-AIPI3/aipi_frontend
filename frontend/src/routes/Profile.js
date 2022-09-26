import { Button, Container, Typography } from "@mui/material";
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

export function Profile() {
  // fetch("/getUserScores")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  const data = [
    { Category: "Frontend", Score: 7.0, Timestamp: 1 },
    { Category: "Backend", Score: 19.0, Timestamp: 1 },
    { Category: "Networking", Score: 23.0, Timestamp: 1 },
    { Category: "Frontend", Score: 55.0, Timestamp: 2 },
    { Category: "Backend", Score: 33.0, Timestamp: 2 },
    { Category: "Networking", Score: 45.0, Timestamp: 2 },
    { Category: "Frontend", Score: 70.0, Timestamp: 3 },
    { Category: "Backend", Score: 40.0, Timestamp: 3 },
    { Category: "Networking", Score: 50.0, Timestamp: 3 },
  ];

  let reformattedData = {};
  data.forEach((dataPoint) => {
    if (!(dataPoint.Timestamp in reformattedData)) {
      reformattedData[dataPoint.Timestamp] = {};
    }
    reformattedData[dataPoint.Timestamp][dataPoint.Category] = dataPoint.Score;
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

  finalReformattedData.sort((a, b) => a.name - b.name);

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome your profile
      </Typography>
      <Typography>
        Below, you can find a chart of your organization's progress over time.
        It is important to consider both individual growth in specific
        categories as well as holistic growth across all categories.
      </Typography>
      <ComposedChart width={730} height={250} data={finalReformattedData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="Frontend" barSize={20} fill="#fa7921" />
        <Bar dataKey="Backend" barSize={20} fill="#19647e" />
        <Bar dataKey="Networking" barSize={20} fill="#28afb0" />
        <Line type="monotone" dataKey="Average" stroke="#f4d35e" />
      </ComposedChart>
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
