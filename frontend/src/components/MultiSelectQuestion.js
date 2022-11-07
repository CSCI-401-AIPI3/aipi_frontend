import {
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function MultiSelectQuestion({ question, callback }) {
  const [checkedList, setCheckedList] = useState([]);

  callback(question.questionID, checkedList);

  const handleCheckboxChange = (event) => {
    let newCheckedList = checkedList;
    if (event.target.checked) {
      newCheckedList.push(event.target.name);
    } else {
      newCheckedList = newCheckedList.filter(
        (item) => item != event.target.name
      );
    }
    setCheckedList(newCheckedList);
    callback(question.questionID, newCheckedList);
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        {question.questionString}
      </Typography>
      <FormGroup>
        {question.answerOptionsList.map((answer, i) => {
          return (
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckboxChange} name={answer} />
              }
              label={answer}
              key={i}
            />
          );
        })}
      </FormGroup>
    </Container>
  );
}
