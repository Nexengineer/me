import React from "react";
import { Typography, Container } from "@material-ui/core";
import styles from "./styles/HeaderStyles";
function Copyright() {
  const owner = "nexengineer ";
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {owner}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  const classes = styles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
