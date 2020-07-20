import React, { useCallback, useEffect, useState } from "react";
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
  Paper,
  TextField,
  ButtonGroup,
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
} from "@material-ui/core";

// with ES6 import
import io from "socket.io-client";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const socket = io("http://localhost:80");

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
  const [message, setMessage] = useState("Fetching Message");

  /**************************************************
   ** GAME EVENT HANDLERS
   **************************************************/
  const onSocketConnected = async () => {
    // Send local player data to the game server
    // socket.emit("new player", {name: 'test'});
    joinRoom();
    setMessage("connected");
  };

  const onSocketDisconnect = async () => {
    // Socket disconnected
    console.log("Disconnected from socket server");
  };

  const joinRoom = async () => {
    socket.emit("joinRoom", { roomID: "1234" });
  };

  useEffect(() => {
    // const socket = io.connect("http://localhost", {port: 8000, transports: ["websocket"]});
    // Start listening for events
    // Socket connection successful
    socket.on("connect", onSocketConnected);
    // Socket disconnection
    socket.on("disconnect", onSocketDisconnect);
  });

  //
  //

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

  // Return App HTML
  return (
    <div>
      <Grid container justify="center" m={2}>
        <Card mt={2}>
          <form noValidate autoComplete="off">
            <CardContent>
              <Grid item xs={12}>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group"
                >
                  <Button>Local Hotseat</Button>
                  <Button>Create Online Room</Button>
                  <Button>Join Online Room</Button>
                </ButtonGroup>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid item xs={12}>
                <Box mt={1}>
                  <TextField
                    id="outlined-basic"
                    label="Room ID"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Grid>
      <Container>
        <h1> {message} </h1>
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
                      <img src={cell + ".svg"} height={70}></img>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default App;
