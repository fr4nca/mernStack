const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')

// @route   GET api/users/teste
// @dsc     tests users route
// @access  Public
router.get('/teste', (req, res) => res.json({ msg: "Users works" }))

// @route   POST api/users/register
// @dsc     register user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email exists" })
      } else {
        let avatar = gravatar.url(req.body.email, { s: 200, r: 'pg', d: 'mm' })
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err))
          })
        })
      }
    })
})

module.exports = router