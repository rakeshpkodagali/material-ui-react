import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    margin: "20px 0",
    display: "block",
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if (title && details) console.log(title, details, category);
  };

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
        children="Create a New Note."
      />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={title}
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Note Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          value={details}
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
        />
        <FormControl className={classes.field}>
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            row
          >
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
          </RadioGroup>
        </FormControl>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
