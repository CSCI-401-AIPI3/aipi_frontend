import {
  Checkbox,
  Container,
  FormLabel,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";

export function MultiSelectQuestion() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Question
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Container>
  );
}
