
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
	- **GET** http://localhost:3000/vaccination/appointments?place_id={place_id}&user_id={user_id}&state_process={state_process}&user_dni={user_dni}&populate={boolean}
		- *Params*:
			- **place_id**: Filters the appointments by place_id
			- **user_id**: Filters the appointments by user_id
			- **user_dni**: Filters the appointments by user_dni (this is useful for main users in frontend)
			- **state_process**: Filters by appointment state. 
				- You can use some of the next:
					- IN_PROGRESS
					- COMPLETED
			- **populate**: This fills place_id and user_id (in the response) with its complete object.
			- NOTHING= If you dont pass any params, and just do a GET request to the endpoint /vaccination/appointments, it will GET every Appointment with no filter. You can also combine with populate.
## Other Considerations

Remember to add an **.env** file with the following

#### DB_USER = /replace this with the correct data/

#### DB_PASSWORD = /replace this with the correct data/

#### DB_NAME = /replace this with the correct data/

#### DB_CLUSTER_NAME_AND_CODE = /replace this with the correct data/