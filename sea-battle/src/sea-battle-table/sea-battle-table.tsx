import React from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import { createTable } from "../redux/actions";

import SeaBattleTableItem from "./sea-battle-table-item";

import { Boards } from "../interfaces/table-interfaces";

interface IProps {
  board: Boards;
}

const SeaBattleTable = (props: IProps) => {
  const dispatch = useDispatch();

  dispatch(createTable(props.board));

  const xLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={1} />
        {xLabels.map((letter) => (
          <Grid item xs={1} key={letter}>
            {letter}
          </Grid>
        ))}
      </Grid>
      {[...Array(9)].map((_, index) => (
        <Grid key={index} container justify="center" alignItems="center">
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
