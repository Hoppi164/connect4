import React, { useEffect, useState } from "react";
import gameEventHandlers from "../utils/gameEventHandlers";
import GameMenu from "../components/GameMenu";
import GameBoard from "../components/GameBoard";
import { Container } from "@material-ui/core";
import _ from "lodash"; // Import the entire lodash library

function ConnectFour() {
    // Declare State Variables
    const [message, setMessage] = useState("Fetching Message");
    const numCols = 7;
    const numRows = 6;
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
    const [redsTurn, setRedsTurn] = useState(true);
    let directionsMatrix = {
        vertical: { south: [1, 0], north: [-1, 0] },
        horizontal: { east: [0, 1], west: [0, -1] },
        backward: { southEast: [1, 1], northWest: [-1, -1] },
        forward: { southWest: [1, -1], northEast: [-1, 1] },
    };

    let initialGrid = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => "")
    );
    const [grid, setGrid] = useState(initialGrid);

    // Function to restart the game
    const newGame = () => {
        setRedsTurn(true)
        setGrid(initialGrid)
        setIsButtonsDisabled(false)
    }

    // Function to drop a coin into a column
    const dropCoin = (colnum) => {
        if (isButtonsDisabled) {
            return;
        }
        setIsButtonsDisabled(true); // Disable all buttons for 1.5 second after clicking
        setTimeout(() => setIsButtonsDisabled(false), 1500);

        const newGrid = _.cloneDeep(grid); //create a deep clone of the grid

        // loop from bottom to top
        for (var rowNum = newGrid.length - 1; rowNum >= 0; rowNum--) {
            // if cell is null
            if (!newGrid[rowNum][colnum]) {
                let color = redsTurn ? "Red" : "Yellow"; //determine who's turn it is
                newGrid[rowNum][colnum] = color; // add coin to cell

                setGrid(newGrid); // Update the grid

                // Check if player has won
                if (playerHasWon(colnum, rowNum, color, newGrid)) {
                    announceWinner(color);
                }

                setRedsTurn(!redsTurn); // Toggle turn
                break;
            }
        }
    };

    // Function to test if the player has won the game -- return BOOL
    const playerHasWon = (colnum, rowNum, playerColor, newGrid) => {
        //For each [North/South, East/West, NorthEast/Northwest, SouthEast/Southwest]
        for (let axis in directionsMatrix) {
            // We define numMatches here so that "East" and "West" share the same count,
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
                        // Add co-ordinates of cell in test direction (eg "North")
                        cellReference[0] +=
                            directionsMatrix[axis][direction][0];
                        cellReference[1] +=
                            directionsMatrix[axis][direction][1];
                        testCell = newGrid[cellReference[0]][cellReference[1]];

                        // Test if cell is matching color
                        if (testCell == playerColor) {
                            numMatches += 1;
                            if (numMatches >= 4) {
                                return true; // If our count reaches 4, the player has won the game
                            }
                        }
                    } catch (error) {
                        // Exceptions are to be expected here.
                        // We wrap this in a try/catch to ignore the array overflow exceptions
                        break;
                    }
                }

                if (numMatches >= 4) {
                    return true; // If our count reaches 4, the player has won the game
                }
            }
        }

        return false; // If we reach this statement: they have NOT won the game
    };

    // Function to Display a popup congratulating the winner
    const announceWinner = (winnerColor) => {
        setTimeout(
            // Wait until coin drops before announcing
            () => alert(`WINNER!, ${winnerColor} has won the game!`),
            1500
        );
        setTimeout(() => setIsButtonsDisabled(true), 1500); // Stop the game from being continued
    };

    useEffect(() => {
        // Asyncronously connect to backend
        gameEventHandlers.createListeners(setMessage);
    }, []);

    // Return App HTML
    return (
        <div>
            <GameMenu
                newGame={newGame}
            />
            <Container>
                <h1>{message}</h1>
            </Container>

            <GameBoard
                grid={grid}
                setGrid={setGrid}
                redsTurn={redsTurn}
                isButtonsDisabled={isButtonsDisabled}
                dropCoin={dropCoin}
            />
        </div>
    );
}
export default ConnectFour;
