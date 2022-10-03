import {
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";

export function MultiSelectQuestion({ props }) {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        {props.questionString}
      </Typography>
      <FormGroup>
        {props.answerOptionsList.map((answer, i) => {
          return (
            <FormControlLabel control={<Checkbox />} label={answer} key={i} />
          );
        })}
      </FormGroup>
    </Container>
  );
}
