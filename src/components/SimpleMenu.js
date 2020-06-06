import React from "react";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ShowChartIcon from "@material-ui/icons/ShowChart";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import { useStateValue } from "../stateClient/stateCoronaFollow";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const SimpleMenu = () => {
  const { dispatch } = useStateValue();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = React.createRef();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuItemCharts = React.forwardRef((props, ref) => (
    <MenuItem
      onClick={() => {
        handleClose();
        dispatch({
          type: "updateProperty",
          property: "activeStep",
          info: props.nextStep,
        });
      }}
      ref={ref}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.name} />
    </MenuItem>
  ));

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemCharts
          name="Gráfico Geral"
          nextStep={1}
          icon={<ShowChartIcon />}
          ref={ref}
        />
        <MenuItemCharts
          name="Mortes"
          nextStep={2}
          icon={<EqualizerIcon />}
          ref={ref}
        />
        <MenuItemCharts
          name="Mortes / Semana"
          nextStep={3}
          icon={<EqualizerIcon />}
          ref={ref}
        />
      </Menu>
    </>
  );
};

export default SimpleMenu;
