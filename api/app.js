const express = require('express');
const dbConfig = require('./config/db.config');
const cors = require('cors');

//routes 1
const indexRouter = require('./routes/index.routes');
const vaccinationsRouter = require('./routes/vaccination.routes');
const appointmentsRouter = require('./routes/appointments.routes');

//Express config
const app = express();

let corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Database
const { db } = require('./models/index');
const initialSetup = require('./services/initialSetup');
db.mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initialSetup();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

//Routes
app.use('/', indexRouter);
app.use('/vaccination', vaccinationsRouter);
app.use('/vaccination/appointments', appointmentsRouter);

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
