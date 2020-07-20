import React, { useEffect, useState } from "react";
import gameEventHandlers from '../utils/gameEventHandlers';
import GameMenu from "../components/GameMenu";
import GameBoard from "../components/GameBoard";
import { Container } from "@material-ui/core";

function ConnectFour() {
    const [message, setMessage] = useState("Fetching Message");
    useEffect(() => {
        gameEventHandlers.createListeners(setMessage);
    }, []);

    // Return App HTML
    return (
        <div>
            <GameMenu />
            <Container>
                <h1>{message}</h1>
            </Container>
            {/* TODO Passing message through to GameBoard */}
            <GameBoard />
        </div>
    );
}
export default ConnectFour