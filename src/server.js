import http from 'node:http';
//Stateful
const users = [];

const server = http.createServer((req, res) =>{
  const { method, url } = req;

  if(method === 'GET' && url === '/users'){
    return res.end(JSON.stringify(users));
  }else if(method === 'POST' && url === '/users'){
    users.push({
      id:1,
      name:'John Connor',
      email:'connor@email.com'
    });

    return res.writeHead(201).end();
  }

  return res.end('Hello World');
})

server.listen(3333);