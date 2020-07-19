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
-   Start the server
    `npm start`

#### Notes:

Local game (Same computer)
Turn Based
Board size 7 columns × 6 rows
Button at top of each column to drop coins
You CAN win by diagonals

-   Backend -> node
-   Frontend -> React, material UI

![Basic Wireframe](https://hoppi164.github.io/connect4/wireframe01.png)

#### Future Development:

-   [ ] Animate Game coin falling
-   [ ] Highlight winning combo
-   [ ] Settings for board size
-   [ ] AWS Hosted Multiplayer Server

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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Publish files to a gh-pages branch on GitHub
This updates the live demo at https://hoppi164.github.io/connect4/
