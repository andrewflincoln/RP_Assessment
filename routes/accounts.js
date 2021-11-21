const express = require('express')
const router = express.Router()
const fs = require('fs')


//get all customers
router.get('/', (req, res) => {
  fs.readFile('./json_data/accounts.json', 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    res.send(JSON.parse(data))
  })
})

module.exports = router