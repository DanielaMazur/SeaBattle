import { combineReducers } from "redux";

import { CREATE_TABLE } from "./actionTypes";

import { TableItemStatus } from "../interfaces/table-item-interface";
import { Boards } from "../interfaces/table-interfaces";

const initialState = {
  boardOne: {} as any,
  boardTwo: {} as any,
};
const NUMBER_OF_CELLS = 8;

const createTable = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TABLE:
      let board = [];
      for (let i = 0; i < NUMBER_OF_CELLS; i++) {
        let row = [];
        for (let j = 0; j < NUMBER_OF_CELLS; j++) {
          row.push(TableItemStatus.EMPTY);
        }
        board.push(row);
      }
      const boardType: Boards = action.board;
      state[boardType] = board;

      return state;

    default:
      return state;
  }
};

const crashItem = (state = initialState, action: any) => {};

export default combineReducers({ createTable });
