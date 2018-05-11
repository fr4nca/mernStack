const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const bodyParser = require('body-parser')

//Express
const app = express()

//Middlewares
//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configura mongoose
const db = require('./config/keys').mongoURI
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo"))
  .catch((err) => console.log(err))

//Configura rotas
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

//Rotas
app.get('/', (req, res) => {
  res.send('Alecrim')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
