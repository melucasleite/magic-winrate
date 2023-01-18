import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Context, IDeck } from "./Context";
import { useState } from "react";

export const AddDeckDialog = ({}) => {
  const [name, setName] = useState("");
  const { isOpenAddDeckDialog, setIsOpenAddDeckDialog, setDecks, decks } =
    React.useContext(Context);
  const handleClose = () => {
    setName("");
    setIsOpenAddDeckDialog(false);
  };
  const onSubmit = (value: any) => {
    const newDeck: IDeck = { name, w: 0, l: 0 };
    setDecks([...decks, newDeck]);
    handleClose();
  };
  return (
    <div>
      <Dialog open={isOpenAddDeckDialog} onClose={handleClose}>
        <DialogTitle>Add Deck</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Deck Name"
            fullWidth
            value={name}
            variant="standard"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant={"outlined"} color={"warning"} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant={"outlined"} onClick={onSubmit}>
            Add Deck
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
