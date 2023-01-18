import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { Context, IDeck } from "./Context";

export const ActionMenu = ({ actions }: any) => {
  const { setIsOpenAddDeckDialog } = useContext(Context);

  const onClick = () => {
    setIsOpenAddDeckDialog(true);
  };

  return (
    <SpeedDial
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      ariaLabel={""}
    >
      {actions.map((action: any) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={onClick}
        />
      ))}
    </SpeedDial>
  );
};
