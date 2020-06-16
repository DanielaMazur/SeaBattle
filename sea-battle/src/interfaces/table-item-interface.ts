export interface TableItem {
  id: string;
  status: TableItemStatus;
}

export enum TableItemStatus {
  EMPTY = "EMPTY",
  SHIP = "SHIP",
  BROKEN_ICE = "BROKEN_ICE",
  CRASHED_SHIP = "CRASHED_SHIP",
}
