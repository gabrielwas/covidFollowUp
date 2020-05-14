import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const UpperBar = ({ name }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "#1F85A0" }}
        className={classes.appBar}
      >
        <Toolbar>
          <Grid
            justify="space-between" // Add it here :)
            container
          >
            <Grid item>
              <Typography variant="h6" noWrap>
                {name}
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                href="https://us-central1-follow-music-spo.cloudfunctions.net/app/login"
              >
                Log Into Spotify
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default UpperBar;
