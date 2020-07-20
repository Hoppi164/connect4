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

function GameBoard() {
  // Define Const vars
  const classes = useStyles();
  const numCols = 7;
  const numRows = 6;
  // Create row x col sized empty array
  let initialGrid = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 0)
  );

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
        setRedsTurn(!redsTurn); // Toggle turn
        break;
      }
    }

    // Update the grid
    setGrid(newGrid);
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
