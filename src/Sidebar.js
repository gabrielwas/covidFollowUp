import React from "react";
import ListItemIns from "./basicComponents/ListItemIns";
import SidebarIns from "./basicComponents/SidebarIns";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Sidebar = () => {
  return (
    <SidebarIns>
      <ListItemIns
        name={"Gráfico Geral"}
        nextStep={1}
        icon={<PlaylistPlayIcon />}
      />
    </SidebarIns>
  );
};

export default Sidebar;
