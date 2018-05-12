const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Express
const app = express();

//Configura mongoose
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo"))
  .catch(err => console.log(err));

//Middlewares
//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
//Passport configuration
require("./config/passport")(passport);

//Configura rotas
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
