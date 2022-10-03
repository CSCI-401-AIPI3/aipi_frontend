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
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        {props.questionString}
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {props.answerOptionsList.map((answer, i) => {
            return (
              <FormControlLabel
                value={answer}
                control={<Radio />}
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
