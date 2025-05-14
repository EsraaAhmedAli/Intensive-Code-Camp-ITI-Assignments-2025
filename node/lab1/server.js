const http = require("http");
const server = http.createServer((req , res) =>{
    res.writeHead(200);
    console.log("Request Recieved ");
    res.end();

})
server.listen(3000 , () =>{
    console.log("server has start on port : " , 3000)
})