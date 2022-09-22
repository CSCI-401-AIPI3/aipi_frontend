import { Container, Typography } from "@mui/material";
import { MultiSelectQuestion } from "../components/MultiSelectQuestion";
import { SingleSelectQuestion } from "../components/SingleSelectQuestion";

export function Assessment() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Hello and welcome to the assessment page
      </Typography>
      <SingleSelectQuestion />
      <MultiSelectQuestion />
    </Container>
  );
}
