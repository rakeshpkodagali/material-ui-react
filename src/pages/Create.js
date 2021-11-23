import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Create = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
        children="Create a New Note."
      />
      <Button
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
