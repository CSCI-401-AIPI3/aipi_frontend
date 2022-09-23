import {
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function SingleSelectQuestion({ props }) {
  return (
    <Container sx={{ my: 4 }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          {props.questionString}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {props.answerOptionsList.map((answer) => {
            return (
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={answer}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
