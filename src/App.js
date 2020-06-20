import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [redsTurn, setRedsTurn] = useState(true);
    return (

        <div>
			<h1> Insert Connect4 Table! </h1>
			<h1> Insert Connect4 info! </h1>
			<h1> {redsTurn ? "Red":"Yellow"} Turn! </h1>
			<button onClick={()=> setRedsTurn(!redsTurn)}> End Turn </button>
		</div>

    );
}

export default App;
