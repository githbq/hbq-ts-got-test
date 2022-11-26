import got from 'got'
import * as http from 'http'
/**
 * entry
 */
let count = 0
!(async () => {
    http.createServer(async function (req, res) {
        console.log("ts count", ++count);

        const map = new Map();
        debugger;
        const response = await got("http://127.0.0.1:8000", { cache: map });
        console.log("1.response.isFromCache", response.isFromCache);

        const response2 = await got("http://127.0.0.1:8000", { cache: map });
        console.log("2.response.isFromCache", response2.isFromCache);


        res.end('hello world');
    })
        .listen(6000);
    console.log("http://127.0.0.1:6000");

})()

export const add = (a, b) => a + b