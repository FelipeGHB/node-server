
const http = require('http')

// Value for the host server
//If there is not a value assigned from the host, it will assign the default value
const hostname = process.env.hostname || '0.0.0.0' // The default value
//The port that will be use for the server
const port = process.env.PORT || 3030

// The Server declaration and its details
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Yes! I did it!!...\n')
  res.write('It is working!!\n')
  res.end('Hello World! The Assignment has been completed!!\n')
})

//The initiation for server listening
//If the listen is active/ suceeded, the message below will be shown
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})