import React, { useCallback, useEffect, useState } from 'react';
import "./App.css";
import _ from "lodash"; // Import the entire lodash library
import { makeStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});


function App() {
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
  const [url, setUrl] = useState('/api');
  const [message, setMessage] = useState('Fetching Message');

  const fetchData = useCallback(async () => {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }
    let message = await response.json();
    setMessage(message.message);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);






  const dropCoin = colnum => {
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

  // Return App HTML
  return (
    <div>
      <h1> Insert Connect4 Table! </h1>
      <h1> Insert Connect4 info! </h1>
      <h1> {message} </h1>
      <h1> {redsTurn ? "Red" : "Yellow"} Turn! </h1>
      <button onClick={() => setRedsTurn(!redsTurn)}> End Turn </button>

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
                    <img src={cell + ".svg"} height={40}></img>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
