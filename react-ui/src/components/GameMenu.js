import * as React from "react";
import {
  Button,
  TextField,
  ButtonGroup,
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

function GameMenu({newGame}) {
  return (
    <Grid container justify="center">
      <Card mt={2}>
        <form noValidate autoComplete="off">
          <CardContent>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button onClick={() => newGame()}>New Local Game</Button>

              <Button>New Online Game</Button>
              <Button>Join Online Room</Button>
            </ButtonGroup>
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
  );
}

export default GameMenu;
