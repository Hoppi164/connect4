import React, { useState } from "react";
import { Button, Paper, Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Coin from "../components/Coin";

const useStyles = makeStyles({
  Blue: {
    fill: "#0500fd",
  },
  marginx150: {
    marginLeft: 150,
    marginRight: 150,
  },
});



function GameBoard({grid, setGrid, redsTurn, isButtonsDisabled, dropCoin}) {
  // Define Const vars
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();


  return (
    <Container>
      <h1> {redsTurn ? "Red" : "Yellow"} Turn! </h1>
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        id="GameBoard"
        className={isScreenLarge ? classes.marginx150 : ""}
      >
        <g id="BlueRectangle">
          <rect className={classes.Blue} id="rect939" width="100" height="85" />
        </g>
        <g id="Coins">
          {grid.map((row, rowIndex) => (
            <g>
              {row.map((cell, colIndex) => (
                <Coin
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  cell={cell}
                  isButtonsDisabled={isButtonsDisabled}
                  dropCoin={dropCoin}
                />
              ))}
            </g>
          ))}
        </g>
      </svg>
    </Container>
  );
}

export default GameBoard;
