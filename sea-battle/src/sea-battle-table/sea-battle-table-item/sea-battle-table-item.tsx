import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./sea-battle-table-item.styles";

interface IProps {
  id: string;
}

const SeaBattleTableItem = (props: IProps) => {
  const classes = useStyles();
  return <Grid item xs={1} className={classes.tableItem} id={props.id}></Grid>;
};

export default SeaBattleTableItem;
