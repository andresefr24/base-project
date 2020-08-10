import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "~/pages/_layouts/Default/styles";

export default function Default({ children }) {
  const { mainContainer } = useStyles();

  return (
    <Container maxWidth={false} disableGutters className={mainContainer}>
      <Grid container justify="center">
        {children}
      </Grid>
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

Default.defaultProps = {};
