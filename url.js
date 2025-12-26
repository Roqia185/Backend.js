const http= require("http"); //http module
const fs= require("fs"); //file system module
const myserver=http.createServer((req,res)=> {
    const log=`${Date.now()}: ${req.url} New request received\n`
    fs.appendFile('log.txt', log,(err, data)=> {
        switch(req.url) {
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                const username=myurl.myquery.myname;
                res.end(`About Page: Hello ${username}`);
                break;
            case '/search':
                const search=myurl.myquery.mysearch;
                res.end(`Search Page: You searched for ${search}`);
                    
            default:
                res.end("404 Page Not Found");
        }
    //console.log("Request received from client");
    //res.end("Hello hi")
  });
});
//create server
myserver.listen(8000,() => console.log("Server Started"));