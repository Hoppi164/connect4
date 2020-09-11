import React, { useState } from "react";
import { Button, Paper, Container, Slide } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Blue: {
    fill: "#0500fd",
  },
  Red: {
    fill: "#ff0000ff",
  },
  Yellow: {
    fill: "#ffff00ff",
  },
  White: {
    fill: "#ffffff",
  },
  Disabled: {
    "fill-opacity": "0.9",
    cursor: "default",
  },
  Enabled: {
    "fill-opacity": "1",
    cursor: "pointer",
  },
});

const coinRadius = 6.5;
const coinMargin = 1;
function Coin({ rowIndex, colIndex, cell, isButtonsDisabled, dropCoin }) {
  const classes = useStyles();

  return (
    <g>
      {/* White Coins */}
      <ellipse
        cy={
          rowIndex * (coinMargin + coinRadius * 2) + (coinRadius + coinMargin)
        }
        cx={
          colIndex * (coinMargin + coinRadius * 2) + (coinRadius + coinMargin)
        }
        id={"row" + rowIndex + "_col" + colIndex}
        className={`
                      ${classes.White} 
                      ${isButtonsDisabled ? classes.Disabled : classes.Enabled}
                      `}
        rx={coinRadius}
        ry={coinRadius}
        val={cell}
        onClick={() => dropCoin(colIndex)}
      />

      {/* Colored Coins */}
      <Slide direction="down" in={cell != 0} timeout={1000}>
        <ellipse
          cy={
            rowIndex * (coinMargin + coinRadius * 2) + (coinRadius + coinMargin)
          }
          cx={
            colIndex * (coinMargin + coinRadius * 2) + (coinRadius + coinMargin)
          }
          id={"row" + rowIndex + "_col" + colIndex}
          className={`
                      ${classes[cell]} 
                      ${isButtonsDisabled ? classes.Disabled : classes.Enabled}
                      `}
          rx={coinRadius}
          ry={coinRadius}
          val={cell}
          onClick={() => dropCoin(colIndex)}
        />
      </Slide>
    </g>
  );
}

export default Coin;
