import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Context, IDeck } from "./Context";

export const Deck = ({ name, w, l }: IDeck) => {
  const { updateDeck } = React.useContext(Context);
  const winrate = w === 0 && l === 0 ? 0 : w / (w + l);
  const onLoss = () => {
    updateDeck(name, { name, w, l: l + 1 });
  };
  const onWin = () => {
    updateDeck(name, { name, w: w + 1, l });
  };
  return (
    <Card sx={{ width: 345, marginBottom: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          W:{w} L:{l} WR:{(winrate * 100).toFixed(1)}%
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginRight: "10px" }}
          onClick={onLoss}
        >
          Loss <AddIcon />
        </Button>
        <Button variant={"outlined"} onClick={onWin}>
          Win <AddIcon />
        </Button>
      </CardContent>
    </Card>
  );
};
