import React from "react";
import { Typography, Grid } from "@material-ui/core";

import SeaBattleTableItem from "./sea-battle-table-item";

const SeaBattleTable = () => {
  const xLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <>
      <Typography variant="h1">Sea Battle Table</Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={1}></Grid>
        {xLabels.map((letter) => (
          <Grid item xs={1}>
            {letter}
          </Grid>
        ))}
      </Grid>
      {[...Array(9)].map((_, index) => (
        <Grid container justify="center" alignItems="center">
          <Grid item xs={1}>
            {index}
          </Grid>
          {xLabels.map((letter) => (
            <SeaBattleTableItem
              key={`${index}-${letter}`}
              id={`${index}-${letter}`}
            />
          ))}
        </Grid>
      ))}
    </>
  );
};

export default SeaBattleTable;
