import { Button, Container, Typography } from "@mui/material";
import { MultiSelectQuestion } from "../components/MultiSelectQuestion";
import { SingleSelectQuestion } from "../components/SingleSelectQuestion";
import { Link } from "react-router-dom";
import ExpandingCard from "../components/ExpandingCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

export function Assessment() {
  let [questionsList, setQuestionsList] = useState([]);
  let [answersList, setAnswersList] = useState({});

  const { auth } = useAuth();

  const changeAnswerValue = (questionID, answers) => {
    let newAnswersList = answersList;
    newAnswersList[questionID] = answers;
    setAnswersList(newAnswersList);
  };

  const submitAnswers = () => {
    console.log(answersList);

    axios
      .post("http://localhost:3008/submitUserAnswers", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          userAnswers: answersList,
        },
      })
      .then((response) => {
        console.log("SUBMIT ANSWERS", response);

        axios
          .post("http://localhost:3008/updateIndustryAverages", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data: response.data,
          })
          .then((response) => {
            console.log("UPDATE INDUSTRY AVERAGES", response);
          })
          .catch((e) => {
            console.log("UPDATE INDUSTRY AVERAGES", e);
          });
      })
      .catch((e) => {
        console.log("SUBMIT ANSWERS", e);
      });
  };

  useEffect(() => {
    // Retrieves the list of questions from the database
    // Data includes: questionID, category, questionString, answerType, answerOptionsList, weight, visible
    axios
      .get("http://localhost:3008/questions", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setQuestionsList(response.data);
      })
      .catch((e) => {
        console.log("ASSESSMENT - QUESTIONS", e);
      });

    // Retrieves any answers a user has already submitted
    axios
      .get("/getUserAnswers", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log("ASSESSMENT - USER ANSWERS", e);
      });
  }, []);

  const categoriesList = [
    { name: "Frontend", db_name: "FRONTEND" },
    { name: "Backend", db_name: "BACKEND" },
    { name: "Networking", db_name: "NETWORKING" },
    { name: "Data", db_name: "DATA_AND_ML" },
    { name: "Security", db_name: "SECURITY" },
    { name: "Tools", db_name: "TOOLS" },
    { name: "People", db_name: "PEOPLE" },
    { name: "Processes", db_name: "PROCESSES" },
    { name: "Infrastructure Fit", db_name: "INFRASTRUCTURE_FIT" },
  ];

  // data is the struct, so check console log to figure out struct questions

  let categoryComponents = [];

  categoriesList.forEach((category, index) => {
    categoryComponents.push(
      <Typography variant="h5" key={index}>
        {category.name}
      </Typography>
    );

    const categoryQuestions = questionsList.filter(
      (question) => question.category === category.db_name
    );

    categoryQuestions.forEach((question, i) => {
      if (question.answerType === "SC") {
        categoryComponents.push(
          <SingleSelectQuestion
            question={question}
            callback={changeAnswerValue}
          />
        );
      } else if (question.answerType === "MC") {
        categoryComponents.push(
          <MultiSelectQuestion
            question={question}
            callback={changeAnswerValue}
          />
        );
      }
    });
  });

  const loggedInView = (
    <>
      {categoryComponents}
      <Button onClick={submitAnswers}>
        <Link style={{ textDecoration: "none", color: "gray" }} to={"/profile"}>
          Submit
        </Link>
      </Button>
    </>
  );

  const loggedOutView = (
    <>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        You are not logged in.
      </Typography>
      <Link style={{ textDecoration: "none", color: "gray" }} to={"/login"}>
        Please log in to view the assessment
      </Link>
    </>
  );

  // render categoryComponents only if the user is logged in
  const assessmentBody = auth ? loggedInView : loggedOutView;

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the assessment page
      </Typography>
      {assessmentBody}
    </Container>
  );
}
