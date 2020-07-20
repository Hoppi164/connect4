# connect4

A multiplayer web rendition of the connect 4 game

A Live Demo can be found [here](https://connect-4-backend.herokuapp.com/ "connect4")

To run this code yourself perform the following steps:

-   Clone the repo
    `git clone https://github.com/Hoppi164/connect4.git`
-   Open the new directory
    `cd connect4`
-   Install Dependancies
    `npm install`
-   Start the Express server
    `npm start`

-   Open a second terminal
-   Navigate to the react-ui directory
    `cd connect4/react-ui`
-   Install Dependancies
    `npm install`
-   Start the React Development server
    `npm start`


#### Notes:

Board size 7 columns × 6 rows

-   Backend -> node/Express
-   Frontend -> React, material UI

![Basic Wireframe](https://hoppi164.github.io/connect4/wireframe01.png)

#### Todo List:

-   [x] Create Board using Material UI
-   [x] Create Images for Coins
-   [ ] Host Multiplayer Server on Heroku
-   [ ] Calculate Win Condition
-   [ ] Animate Game coin falling
-   [ ] Highlight winning combo
-   [ ] Settings for board size

#### Pseudo-code

> Globals

```
directionsMatrix = [ [1,1], [1,0], [1, -1], [0, -1], [-1,-1], [-1,0], [-1,1] ]
currentColor = ?
```

> function to check 7 directions

```
currentCoords = [x, y] | 3,2
for direction in directionsMatrix:
  if arrayoutofbounds:
    continue
  for(i=0 to 3):
    if currentCoords + (direction +i) != currentColor
      break
    if i == 3:
      print("Four in a row")
```

> function to Drop coin

```
pressing button gives you colnumber
for bottomRow to topRow
  if row[colnumber] is null:
  return co-ords
```

---







## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.