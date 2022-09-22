import {
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function SingleSelectQuestion() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography sx={{ mb: 4, fontSize: "1.25rem" }} variant="h3">
        Question
      </Typography>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Answer1"
          />
          <FormControlLabel value="male" control={<Radio />} label="Answer2" />
          <FormControlLabel value="other" control={<Radio />} label="Answer3" />
          <FormControlLabel value="other" control={<Radio />} label="ANswer4" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
