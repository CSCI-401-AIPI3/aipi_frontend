import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Admin() {
  let [isLoggedIn, setLoggedIn] = useState(false);
  let [questionsList, setQuestionsList] = useState([]);
  let [uncontactedUsers, setUncontactedUsers] = useState([]);
  let [usersWantingHelp, setUsersWantingHelp] = useState([]);

  useEffect(() => {
    // Determine if user is logged in
    // If user is logged in, the logged in state is set to true. This will display the questions
    axios
      .get("http://localhost:3008/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("IN AUTH", response);
        setLoggedIn(response.status === 200);
      })
      .catch((e) => {
        console.log("ADMIN - AUTH", e);
        setLoggedIn(false);
      });

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
      .get("http://localhos:3008/admiin/getUserRequestsHelp", {
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
        <Typography>{question.questionString}</Typography>
      );
    });
  });

  const loggedInView = (
    <>
      <Typography variant="h5">Users Requesting Help</Typography>
      {uncontactedsersWantingHelp}
      <Typography variant="h5">Uncontacted Users</Typography>
      {uncontactedUsersList}
      <Typography variant="h5">Questions List</Typography>
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
  const adminBody = isLoggedIn ? loggedInView : loggedOutView;

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
