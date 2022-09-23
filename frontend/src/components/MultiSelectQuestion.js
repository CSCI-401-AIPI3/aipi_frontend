import {
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";

export function MultiSelectQuestion({ props }) {
  props.answerOptionsList.map((answer) => {
    console.log(answer);
  });

  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        {props.questionString}
      </Typography>
      <FormGroup>
        {props.answerOptionsList.map((answer) => {
          return <FormControlLabel control={<Checkbox />} label={answer} />;
        })}
      </FormGroup>
    </Container>
  );
}
