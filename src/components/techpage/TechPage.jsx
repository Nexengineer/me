import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import { techStack } from "../../constants/Constants";

const useStyles = makeStyles((theme) => ({
  techPageContainer: {
    flexGrow: 1,
    width: "65%",
    marginTop: theme.spacing(-10),
    position: "relative",
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginTop: theme.spacing(-5),
    },
  },
  demo: {},
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  grow: {
    flexGrow: 1,
  },
}));

const listItems = techStack.map((d, index) => (
  <ListItem key={index}>
    <Grid
      item
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      position="relative"
    >
      <div style={{ flex: 1 }} />
      <Avatar src={d.imageSource} />
      <Rating
        name="customized-empty"
        value={d.rating}
        disabled={true}
        precision={0.5}
        style={{ marginLeft: 30 }}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      <div style={{ flex: 1 }} />
    </Grid>
  </ListItem>
));

export default function TechPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.techPageContainer}
    >
      <Typography variant="h5">Tech Skills</Typography>
      <br />
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <List>{listItems}</List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div></div>
        </Grid>
      </Grid>
    </Grid>
  );
}
