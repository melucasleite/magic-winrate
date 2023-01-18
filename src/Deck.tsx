import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { Context, IDeck } from "./Context";

export const Deck = ({ name, w, l }: IDeck) => {
  const { updateDeck, deleteDeck } = React.useContext(Context);
  const winrate = w === 0 && l === 0 ? 0 : w / (w + l);
  const onLoss = () => {
    updateDeck(name, { name, w, l: l + 1 });
  };
  const onWin = () => {
    updateDeck(name, { name, w: w + 1, l });
  };
  const onLossRemove = () => {
    updateDeck(name, { name, w, l: l - 1 > 0 ? l - 1 : 0 });
  };
  const onWinRemove = () => {
    updateDeck(name, { name, w: w - 1 > 0 ? w - 1 : 0, l });
  };
  const onDelete = () => {
    deleteDeck(name);
  };
  return (
    <Card sx={{ width: 345, marginBottom: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}{" "}
        </Typography>

        <Typography
          sx={{ marginBottom: "20px", marginTop: "20px" }}
          variant="body2"
          color="text.secondary"
        >
          W:{w} L:{l} WR:{(winrate * 100).toFixed(1)}%
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginRight: "10px" }}
          onClick={onLoss}
        >
          Loss <AddIcon />
        </Button>
        <Button
          variant={"outlined"}
          sx={{ marginRight: "10px" }}
          onClick={onWin}
        >
          Win <AddIcon />
        </Button>
        <br></br>
        <Button
          variant={"outlined"}
          sx={{ marginRight: "10px" }}
          onClick={onLossRemove}
        >
          Loss <RemoveIcon />
        </Button>
        <Button
          variant={"outlined"}
          sx={{ marginRight: "10px" }}
          onClick={onWinRemove}
        >
          Win <RemoveIcon />
        </Button>
        <br></br>
        <Button
          sx={{ marginTop: "100px" }}
          variant={"outlined"}
          color={"warning"}
          onClick={onDelete}
        >
          Delete <CancelIcon />
        </Button>
      </CardContent>
    </Card>
  );
};
