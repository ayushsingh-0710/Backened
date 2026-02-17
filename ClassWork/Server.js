const http = require("http");

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    console.log(method,url);

    if(method === "GET" && url === "/"){
        // res.writeHead(200, {"Content-type": "text/plain"});
        res.end("Chala jaa ...");
    }
    // else if(method === "GET" && url ==="/users"){
    //     res.writeHead(200, {"Content-type": "application/json"})
    //     res.end(JSON.stringify({users:["A", "B", "C"]}));
    // }
    // else{
    //     res.writeHead(404, {"Content-type": "text/plains"});
    //     res.end("Route not found");
    // }
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});