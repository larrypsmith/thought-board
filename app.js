require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const notes = require('./routes/api/notes');
const bodyParser = require('body-parser');
const passport = require('passport');
const boards = require('./routes/api/boards')
const connections = require('./routes/api/connections')
const image = require("./routes/api/image");
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/users", users);
app.use("/api/notes", notes);
app.use("/api/boards", boards);

app.use("/api/connections", connections);

app.use("/api/image", image);

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))