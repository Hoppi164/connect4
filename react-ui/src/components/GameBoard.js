import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash"; // Import the entire lodash library

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
let directionsMatrix = {
  vertical: { south: [1, 0], north: [-1, 0] },
  horizontal: { east: [0, 1], west: [0, -1] },
  backward: { southEast: [1, 1], northWest: [-1, -1] },
  forward: { southWest: [1, -1], northEast: [-1, 1] },
};
const numCols = 7;
const numRows = 6;
let initialGrid = Array.from({ length: numRows }, () =>
  Array.from({ length: numCols }, () => 0)
);

function GameBoard() {
  // Define Const vars
  const classes = useStyles();
  // Create row x col sized empty array
  // Define state Vars
  const [redsTurn, setRedsTurn] = useState(true);
  const [grid, setGrid] = useState(initialGrid);

  const dropCoin = (colnum) => {
    const newGrid = _.cloneDeep(grid); //create a deep clone of the grid

    // loop from bottom to top
    for (var rowNum = newGrid.length - 1; rowNum >= 0; rowNum--) {
      // if cell is null
      if (!newGrid[rowNum][colnum]) {
        let color = redsTurn ? "Red" : "Yellow"; //determine who's turn it is
        newGrid[rowNum][colnum] = color; // add coin to cell
        if (playerHasWon(colnum, rowNum, color, newGrid)) {
          announceWinner(color);
        }
        setRedsTurn(!redsTurn); // Toggle turn
        // Update the grid
        setGrid(newGrid);
        break;
      }
    }
  };

  const playerHasWon = (colnum, rowNum, playerColor, newGrid) => {
    //For each [North/South, East/West, NorthEast/Northwest, SouthEast/Southwest]
    for (let axis in directionsMatrix) {
      // We difine this variable here so that "East" and "West" share the same count,
      // This allows a coin to be dropped in a middle cell
      let numMatches = 1;

      // For each [North, South]
      for (let direction in directionsMatrix[axis]) {
        // Get X/Y co-ordinates of our dropped coin
        let cellReference = [rowNum, colnum];

        // Add co-ordinates of 1 cell in test direction (eg "North")
        let testCell = newGrid[cellReference[0]][cellReference[1]];

        // Count how many matching color cells are in that direction
        while (testCell == playerColor) {
          try {
            // Add co-ordinates of 1 cell in test direction (eg "North")
            cellReference[0] += directionsMatrix[axis][direction][0];
            cellReference[1] += directionsMatrix[axis][direction][1];
            testCell = newGrid[cellReference[0]][cellReference[1]];

            // Test if cell is matching color
            if (testCell == playerColor) {
              numMatches += 1;

              // If our count reaches 4, the player has won the game
              if (numMatches >= 4) {
                return true;
              }
            }
          } catch (error) {
            // Exceptions are to be expected here.
            // We wrap this in a try/catch to ignore the array overflow exceptions
            // console.error(error);
            break;
          }
        }
        // console.log(`direction: ${direction}, numMatches: ${numMatches}`);

        // If our count reaches 4, the player has won the game
        if (numMatches >= 4) {
          return true;
        }
      }
    }

    // If we reach this statement: they have NOT won the game
    return false;
  };

  const announceWinner = (winnerColor) => {
    alert(`WINNER!, ${winnerColor} has won the game!`);
  };

  return (
    <Container>
      <h1> {redsTurn ? "Red" : "Yellow"} Turn! </h1>

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {grid[0].map((col, index) => (
                <TableCell align="center" key={index}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dropCoin(index)}
                  >
                    <ArrowDownwardIcon />
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {grid.map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, index) => (
                  <TableCell align="center" key={index}>
                    <img alt="coin" src={cell + ".svg"} height={70}></img>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default GameBoard;
