
## Backend from the MERN Final Project

  

This is the Backend for the MERN Stack Final Project. Using `MongoDB`,`Express` and `NodeJS`.

  

## Available Scripts

  

You can run:

  

 - **`npm start`** Runs the server **app.js**
 - **`npm run dev`** Runs the server with nodemon (autorefresh), good for developing stages.

If you run it on your local machine:
Open http://localhost:3000 to view it in the browser.

## Endpoints 

- vaccinationPlaces:
	- **POST** http://localhost:3000/vaccination/places
		- Body:
			- `{"name": "string","address": "string","latitude": number,"longitude": number,"url": "string uri"}`
	- **Get All** http://localhost:3000/vaccination/places
	- **Get By Id** http://localhost:3000/vaccination/places/:id
	- **Delete** http://localhost:3000/vaccination/places/:id
	- **Update** http://localhost:3000/vaccination/places
		- Body:
			- `{"_id":"string REQUIRED","name": "string","address": "string","latitude": number,"longitude": number,"url": "string uri"}`
 - appointments
	- **POST** http://localhost:3000/vaccination/appointments
		- Body:
			- `{"name": "string","last_name": "string","address": "string","dni": "string NUMBERS_ONLY","born_date": "date"}`

## Other Considerations

  

Remember to add an **.env** file with the following

  

#### DB_USER = /replace this with the correct data/

  

#### DB_PASSWORD = /replace this with the correct data/

  

#### DB_NAME = /replace this with the correct data/

  

#### DB_CLUSTER_NAME_AND_CODE = /replace this with the correct data/
