import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SimpleMenu from "../components/SimpleMenu";

import ShowChartIcon from "@material-ui/icons/ShowChart";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import PublicIcon from "@material-ui/icons/Public";
import FlagIcon from "@material-ui/icons/Flag";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const UpperBar = ({ name }) => {
  const classes = useStyles();

  const menuItemsWorld = [
    {
      name: "Gráfico Geral",
      nextStep: 1,
      icon: <ShowChartIcon />,
    },
    {
      name: "Mortes",
      nextStep: 2,
      icon: <EqualizerIcon />,
    },
    {
      name: "Mortes / Semana",
      nextStep: 3,
      icon: <EqualizerIcon />,
    },
  ];

  const menuItemsBrazil = [
    {
      name: "Gráfico Geral / Estado",
      nextStep: 4,
      icon: <ShowChartIcon />,
    },
    {
      name: "Mortes / Estado",
      nextStep: 5,
      icon: <EqualizerIcon />,
    },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid justify="space-between" alignItems="center" container>
            <Grid item>
              <Grid direction="row" alignItems="center" spacing={2} container>
                <Grid item>
                  <SimpleMenu
                    name="Mundo"
                    items={menuItemsWorld}
                    icon={<PublicIcon />}
                  />
                </Grid>
                <Grid item>
                  <SimpleMenu
                    name="Brasil"
                    items={menuItemsBrazil}
                    icon={<FlagIcon />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6" noWrap>
                {name}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default UpperBar;
