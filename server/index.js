var PORT = process.env.PORT | 3000;
const fs = require('fs');
const patdh = require('path');
const http = require('http');
const url = require('url');
const lookup = require('mime-types').lookup;
const server = http.createServer((req, res)=>{
    console.log('thankyou for requesting');
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if(path == ''){
        path = patdh.resolve('client/index.html');
    }
    console.log(`requested path is ${path}`);

    let file =  patdh.resolve('client/index.html');
    fs.readFile(file, (err, content)=>{
        if(err){
            console.log(`file not found ${file}`);
            res.writeHead(404);
            res.end();
        } else{
            console.log(`returning file ${file}`);
            res.setHeader('X-Content-Type-Option', 'nosniff');
            let mime = lookup(path);
            res.writeHead(200, {'Content-type': mime});
            res.end(content);
        }

    });


});

server.listen(PORT,()=>{
    console.log('listening to port 3000')
});