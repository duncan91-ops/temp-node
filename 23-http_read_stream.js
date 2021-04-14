const http = require('http');
const { createReadStream } = require('fs');
const { create } = require('lodash');

http.createServer((req, res) => {
    const fileStream = createReadStream('./content/big.txt', { encoding: 'utf8' });
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000);