const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

//Configura servidor
const app = express()
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))

//Configura mongoose
const db = require('./config/keys').mongoURI
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo"))
  .catch((err) => console.log(err))


//Rotas
app.get('/', (req, res) => {
  res.send('Alecrim')
})
