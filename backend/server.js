const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect( process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const characterRouter = require('./routes/characters')
app.use('/characters', characterRouter);

const itemRouter = require('./routes/items')
app.use('/items', itemRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'))
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
