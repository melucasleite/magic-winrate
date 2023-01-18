import { useContext } from "react";
import { Context } from "./Context";
import { Deck } from "./Deck";

export const DeckList = () => {
  const { decks } = useContext(Context);
  return (
    <>
      {decks.length === 0 && <p>No decks found</p>}
      {decks.map((deck) => (
        <Deck key={deck.name} {...deck} />
      ))}
    </>
  );
};
