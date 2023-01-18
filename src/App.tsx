import { ActionMenu } from "./ActionMenu";
import "./App.css";
import { Deck } from "./Deck";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Context, IDeck } from "./Context";
import { DeckList } from "./DeckList";
import { AddDeckDialog } from "./AddDeckDialog";

const actions = [{ icon: <AddIcon />, name: "Create Deck" }];
const emptyDecks: IDeck[] = [];

function App() {
  const [decks, setDecks] = useState(emptyDecks);
  const [isOpenAddDeckDialog, setIsOpenAddDeckDialog] = useState(false);
  const updateDeck = (name: string, value: IDeck) => {
    const newDecks = decks.map((deck) => {
      if (deck.name === name) {
        return { ...deck, ...value };
      }
      return { ...deck };
    });
    setDecks(newDecks);
  };
  const value = {
    decks,
    setDecks,
    updateDeck,
    isOpenAddDeckDialog,
    setIsOpenAddDeckDialog,
  };
  return (
    <Context.Provider value={value}>
      <div className="App">
        <DeckList />
      </div>
      <ActionMenu actions={actions} />
      <AddDeckDialog />
    </Context.Provider>
  );
}

export default App;
