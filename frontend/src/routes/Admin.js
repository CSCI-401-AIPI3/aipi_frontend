import { Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

export function Admin() {
  let [questionsList, setQuestionsList] = useState([]);
  let [uncontactedUsers, setUncontactedUsers] = useState([]);
  let [usersWantingHelp, setUsersWantingHelp] = useState([]);

  const { auth } = useAuth();

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
        console.log("ADMIN - QUESTIONS", e);
      });

    axios
      .get("http://localhost:3008/admin/getUncontactedUsers", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUncontactedUsers(response.data);
      })
      .catch((e) => {
        console.log("ADMIN - UNCONTACTED USERS", e);
      });

    axios
      .get("http://localhost:3008/admin/getUserRequestsHelp", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("ADMIN - USERS REQUESTING HELP", response);
        setUsersWantingHelp(response.data);
      })
      .catch((e) => {
        console.log("ADMIN - USERS REQUESTING HELP", e);
      });
  }, []);

  const hideQuestion = (questionID, visibility) => {
    axios
      .post("http://localhost:3008/admin/updateQuestionVisibility", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          questionID: questionID,
          visibility: visibility,
        },
      })
      .then((response) => {
        console.log("HIDE QUESTION", response);
      })
      .catch((e) => {
        console.log("HIDE QUESTION", e);
      });
  };

  let uncontactedUsersList = [];

  uncontactedUsers.forEach((user, index) => {
    let name = user.name;
    let company = user.company;
    if (name === "" || name == null) {
      name = "Unknown";
    }
    if (company === "" || company == null) {
      company = "Unknown";
    }
    uncontactedUsersList.push(
      <>
        <Typography variant="body1">
          Name: {name}, Company: {company}
        </Typography>
        <Typography pb={2} variant="body2">
          email: {user.email}, technical maturity: {user.technicalMaturity}
        </Typography>
      </>
    );
  });

  let uncontactedsersWantingHelp = [];

  usersWantingHelp.forEach((user, index) => {
    let name = user.name;
    let company = user.company;
    if (name === "" || name == null) {
      name = "Unknown";
    }
    if (company === "" || company == null) {
      company = "Unknown";
    }
    usersWantingHelp.push(
      <>
        <Typography variant="body1">
          {user.name}, {user.company}
        </Typography>
        <Typography pb={2} variant="body2">
          email: {user.email}, technical maturity: {user.technicalMaturity}
        </Typography>
      </>
    );
  });

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
      <Typography variant="h6" key={index}>
        {category.name}
      </Typography>
    );

    const categoryQuestions = questionsList.filter(
      (question) => question.category === category.db_name
    );

    categoryQuestions.forEach((question, i) => {
      categoryComponents.push(
        <>
          <Grid item container direction="row" alignItems="center" xs={12}>
            <Grid item>
              <Typography>{question.questionString}</Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  hideQuestion(question.questionID, !question.visible);
                }}
              >
                {question.visible ? "Hide" : "Show"}
              </Button>
            </Grid>
          </Grid>
        </>
      );
    });
  });

  const loggedInView = (
    <>
      <Typography variant="h5" pb={4}>
        Users Requesting Help
      </Typography>
      {uncontactedsersWantingHelp}
      <Typography variant="h5" pb={4}>
        Uncontacted Users
      </Typography>
      {uncontactedUsersList}
      <Typography variant="h5" pb={4}>
        Questions List
      </Typography>
      {categoryComponents}
    </>
  );

  const loggedOutView = (
    <>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        You are not logged in.
      </Typography>
      <Link style={{ textDecoration: "none", color: "gray" }} to={"/login"}>
        Please log in to view the page
      </Link>
    </>
  );

  // render categoryComponents only if the user is logged in
  const adminBody = auth ? loggedInView : loggedOutView;

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the admin page. This should only be shown to
        administrators.
      </Typography>
      {adminBody}
    </Container>
  );
}
