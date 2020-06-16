import React from "react";
import { Grid } from "@material-ui/core";

import SeaBattleTable from "../sea-battle-table";

import { Boards } from "../interfaces/table-interfaces";

const SeaBattleGame = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <SeaBattleTable board={Boards.boardOne} />
      </Grid>
      <Grid item xs={6}>
        <SeaBattleTable board={Boards.boardTwo} />
      </Grid>
    </Grid>
  );
};

export default SeaBattleGame;
