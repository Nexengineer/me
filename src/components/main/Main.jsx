import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles/MainStyles";
import Header from "../header/Header";
const Main = () => {
  //   const classes = styles();
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Header />
      </Grid>
    </div>
  );
};
export default Main;
