const express = require('express')
const fetch = require('node-fetch')

module.exports = express.Router().get('/someEndPoint', async (req, res) => {
  try {
    const response = await fetch('https://venmo.com/api/v5/public?limit=1')
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
})
