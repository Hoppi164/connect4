import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
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
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
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

	// Return App HTML
	return (
		<div>
			<h1> Insert Connect4 Table! </h1>
			<h1> Insert Connect4 info! </h1>
			<h1> {redsTurn ? "Red" : "Yellow"} Turn! </h1>
			<button onClick={() => setRedsTurn(!redsTurn)}> End Turn </button>

			<TableContainer component={Paper}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							{grid[0].map((col, index) => (
								<TableCell align="center" key={index}>
									<Button variant="contained" color="primary">
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
										{cell}
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
