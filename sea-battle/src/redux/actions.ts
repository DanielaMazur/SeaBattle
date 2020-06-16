import { CRASH_SHIP, CREATE_TABLE } from "./actionTypes";
import { Boards } from "../interfaces/table-interfaces";

export const createTable = (board: Boards) => {
  return {
    type: CREATE_TABLE,
    board,
  };
};

export const crashItem = () => {
  return {
    type: CRASH_SHIP,
  };
};
