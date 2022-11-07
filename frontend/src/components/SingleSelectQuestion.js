import {
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function SingleSelectQuestion({ question, callback }) {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        {question.questionString}
      </Typography>
      <FormControl required={true}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {question.answerOptionsList.map((answer, i) => {
            return (
              <FormControlLabel
                value={answer}
                control={
                  <Radio onChange={callback(question.questionID, [answer])} />
                }
                label={answer}
                key={i}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
