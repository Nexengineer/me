import React from "react";
import HeaderImage from "../../assets/HeaderImage.jpg";
import {
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import styles from "./styles/HeaderStyles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "-apple-system",
  },
});
const Header = () => {
  const classes = styles();
  return (
    <div>
      <AppBar position="static" className={classes.headerAppBar}>
        <Toolbar>
          <Typography>Neeraj Kumar Mishra</Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography theme={theme} className={classes.textButton}>
              <CssBaseline />
              Core Skills
            </Typography>
            <Typography theme={theme} className={classes.textButton}>
              <CssBaseline />
              Career Path
            </Typography>
            <Typography theme={theme} className={classes.textButton}>
              <CssBaseline />
              Projects
            </Typography>
            <Typography theme={theme} className={classes.textButton}>
              <CssBaseline />
              About Me
            </Typography>
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
      <Paper className={classes.mainFeaturedPost}>
        <Grid
          className={classes.mainFeaturedPostContent}
          item
          container
          alignItems="center"
          justify="center"
        >
          <img
            className={classes.image}
            src={HeaderImage}
            alt={"header_image"}
          />
        </Grid>
      </Paper>
    </div>
  );
};

export default Header;
