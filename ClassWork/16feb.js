const http = require('http');
const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url;
    const user ={
        Name : "Ayush Singh",
        Roll_no : "17",
        Session : "2025-26"
    };
    if(method === "GET" && url ==="/USER"){
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end(JSON.stringify(user));
    }

});
server.listen(5000,()=>{
    console.log("Server is learning on 5000")
});