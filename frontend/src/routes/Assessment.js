import { Button, Container, Typography } from "@mui/material";
import { MultiSelectQuestion } from "../components/MultiSelectQuestion";
import { SingleSelectQuestion } from "../components/SingleSelectQuestion";
import { Link } from "react-router-dom";

export function Assessment() {
  const categoriesList = [
    "Frontend",
    "Backend",
    "Networking",
    "Data",
    "Security",
    "Tools",
    "People",
    "Processes",
    "Infrastructure Fit",
  ];

  fetch("http://localhost:3008/questions")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));

  // fetch("/getUserAnswers")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  const questionsList = [
    {
      id: 1,
      category: "Frontend",
      questionString: "How do users interact with the website?",
      answerType: "multipleChoice",
      answerOptionsList: [
        "Chat-bots",
        "Data entry",
        "Data viewing",
        "Routing to third-party software",
      ],
    },
    {
      id: 2,
      category: "Backend",
      questionString:
        "Does your company use test coverage, code coverage, or both?",
      answerType: "multipleChoice",
      answerOptionsList: ["Test coverage", "Code coverage"],
    },
    {
      id: 3,
      category: "Networking",
      questionString:
        "Is application availability (e.g. downtime of user-facing apps, downtime of internal APIs) being continuously monitored?",
      answerType: "singleChoice",
      answerOptionsList: ["Yes", "No"],
    },
    {
      id: 4,
      category: "Data",
      questionString: "How is most data generated in your company?",
      answerType: "singleChoice",
      answerOptionsList: [
        "Manual inputs from the field",
        "Automatically from business apps",
        "Machine learning triggers",
      ],
    },
    {
      id: 5,
      category: "Security",
      questionString:
        "Has your company experienced any phishing, ransomware, DDoS, or Injection attacks in the past year?",
      answerType: "singleChoice",
      answerOptionsList: [
        "Yes, the company has experienced attacks this year and stopped it",
        "Yes, the company has experienced attacks this year but did not stop it.",
        "No, but the company has experienced attacks in the past.",
        "No, the company has never experienced an attack.",
      ],
    },
    {
      id: 6,
      category: "Tools",
      questionString:
        "What tools does your company use that you are not completely satisfied with?",
      answerType: "multipleChoice",
      answerOptionsList: [
        "Task management",
        "Deployment management, including A/B testing",
        "Code management",
        "Testing infrastructure",
        "Data montioring",
      ],
    },
    {
      id: 7,
      category: "People",
      questionString:
        "Do you have a data team responsible for owning the company's data tooling and strategy?",
      answerType: "singleChoice",
      answerOptionsList: [
        "Yes, there is a data team responsible for owning the company’s data tooling and strategy",
        "No, but some software engineers’ job descriptions also include monitoring the company’s data tooling and strategy",
        "No, there is no data tooling and strategy",
      ],
    },
    {
      id: 8,
      category: "Processes",
      questionString:
        "Is there a company-wide data, software, and security strategy?",
      answerType: "singleChoice",
      answerOptionsList: [
        "Yes, and all three are being met at pace",
        "Yes, but at least one department seems to be behind schedule",
        "No, there is no company-wide technology strategy",
      ],
    },
    {
      id: 9,
      category: "Infrastructure Fit",
      questionString: "Is there a long engineering backlog?",
      answerType: "singleChoice",
      answerOptionsList: [
        "Yes, the engineering backlog is growing faster than it is being addressed",
        "Yes, the engineering backlog grows quickly but it is addressed based on user-priorities",
        "No, the engineering backlog is typically empty",
      ],
    },
  ];

  let categoryComponents = [];

  categoriesList.forEach((category, index) => {
    categoryComponents.push(<Typography variant="h5">{category}</Typography>);

    const categoryQuestions = questionsList.filter(
      (question) => question.category === category
    );

    categoryQuestions.forEach((question, i) => {
      if (question.answerType === "singleChoice") {
        categoryComponents.push(<SingleSelectQuestion props={question} />);
      } else if (question.answerType === "multipleChoice") {
        categoryComponents.push(<MultiSelectQuestion props={question} />);
      }
    });
  });

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the assessment page
      </Typography>
      {categoryComponents}
      <Button>
        <Link style={{ textDecoration: "none", color: "gray" }} to={"/profile"}>
          Submit
        </Link>
      </Button>
    </Container>
  );
}
