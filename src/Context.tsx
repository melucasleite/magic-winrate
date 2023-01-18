import React from "react";

export interface IDeck {
  name: string;
  w: number;
  l: number;
}

export interface IDefaultValue {
  decks: IDeck[];
  setDecks: any;
  updateDeck: any;
  isOpenAddDeckDialog: boolean;
  setIsOpenAddDeckDialog: any;
}

const defaultValue: IDefaultValue = {
  decks: [],
  setDecks: () => {},
  updateDeck: () => {},
  isOpenAddDeckDialog: false,
  setIsOpenAddDeckDialog: () => {},
};

export const Context = React.createContext(defaultValue);
