const http = require('http');
const server = http.createServer((req, res) => {
    res.end('I am responding to your request')
})

const port = 3000;
server.listen(port, () => {
    console.log('listening requests')
})