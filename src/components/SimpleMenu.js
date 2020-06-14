import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';

import { useStateValue } from "../stateClient/stateCoronaFollow";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
));

const SimpleMenu = ({ name, items, icon }) => {
  const { dispatch } = useStateValue();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="secondary"
        onClick={handleClick}
      >
        {icon}
      </Fab>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem
            key={item.nextStep}
            onClick={() => {
              handleClose();
              dispatch({
                type: "updateProperty",
                property: "activeStep",
                info: item.nextStep,
              });
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default SimpleMenu;
