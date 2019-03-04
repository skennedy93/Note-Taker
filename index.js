const server = require('./server.js');

const port = 4000

server.listen(process.env.PORT||port,()=>console.log('server running'))