const express = require('express')
const app = express()
const port = process.env.port || 3300


app.get('/', (req, res) => {
    res.send('Please give me the bonus points!!')
  })
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
  })
  