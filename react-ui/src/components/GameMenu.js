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

function GameMenu() {
  return (
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
  );
}

export default GameMenu;
