const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const connectDb = require('./config/db'); // Import the connectDb function
const books = require('./Routes/books');
const software = require('./Routes/software');
const database = require('./Routes/database');
const userRoutes = require('./Routes/userRoutes'); // Import user routes
const message = require('./Routes/message'); // Import message routes

const app = express();  

// Connect to MongoDB  
connectDb()
  .catch(err => console.error('Error connecting to MongoDB:', err));

// // Middleware 
// app.use(cors());
// app.use(bodyParser.json());

// Routes
app.use('/api/books', books);
app.use('/api/software', software);
app.use('/api/database', database);
app.use('/api/userRoutes', userRoutes); // Use user routes
app.use('/api/message', message); // Use message routes


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
