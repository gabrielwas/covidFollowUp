import React from "react";
import ListItemIns from "../basicComponents/ListItemIns";
import SidebarIns from "../basicComponents/SidebarIns";

import ShowChartIcon from '@material-ui/icons/ShowChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const Sidebar = () => {
  return (
    <SidebarIns>
      <ListItemIns
        name={"Gráfico Geral"}
        nextStep={1}
        icon={<ShowChartIcon />}
      />

    <ListItemIns
        name={"Mortes"}
        nextStep={2}
        icon={<EqualizerIcon />}
      />
    </SidebarIns>
  );
};

export default Sidebar;
