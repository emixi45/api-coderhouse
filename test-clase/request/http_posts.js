const https = require('https')


const data = JSON.stringify({
    aaa: 'buy beeers'
})

const opt = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(opt, res => {
    console.log(req.statusCode);
    res.on('data', d => process.stdout.write(d))
})

req.on('error', e => {
    console.log(e);
})

req.write(data)
req.end()