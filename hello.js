const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) => {
    fs.writeFile('hello.text', 'mn is the best', (err) => {
        if(err) console.log("write file error")
        console.log('file is saved')
        fs.readFile('mn.text', (err,data) => {
            res.statusCode = 200
            res.setaHeader = ('Content-Type','text/plain');
            res.end(data.toString());
            if(err) {
                console.log("read file err")
            }
        })
    })
})
server.listen(port,hostname, () => {
    console.log("Listen on port 3000")
})