import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "purple",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

const Create = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
        children="Create a New Note."
      />
      <Button
        className={classes.btn}
        color="secondary"
        variant="contained"
        type="submit"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
