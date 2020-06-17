# connect4
A multiplayer web rendition of the connect 4 game

A Live Demo can be found here [here](https://hoppi164.github.io/connect4/ "connect4")



#### Notes:

Local game (Same computer)
Turn Based
Board size 7 columns × 6 rows
Button at top of each column to drop coins
You CAN win by diagonals

* Backend 	->  node
* Frontend 	-> 	React, material UI

![Basic Wireframe](https://hoppi164.github.io/connect4/wireframe01.png)



#### Future Development:
* Animate Game coin falling
* Highlight winning combo
* Settings for board size
* AWS Hosted Multiplayer Server





#### Pseudo-code

>Globals
```
directionsMatrix = [ [1,1], [1,0], [1, -1], [0, -1], [-1,-1], [-1,0], [-1,1] ]
currentColor = ?
```

>function to check 7 directions
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

>function to Drop coin
```
pressing button gives you colnumber
for bottomRow to topRow
	if row[colnumber] is null:
	return co-ords
```
