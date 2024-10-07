/* giris dersi port belirleme dosya yada yazı yazdırma işlemleri 
var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    console.log(req.url)
     if (req.url=="/urun"){
        fs.readFile("urunler.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    else if (req.url=="/"){
        fs.readFile("ana.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    
    else  {
        fs.readFile("404.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    
})
server.listen(3000,()=>{
    console.log("server akitd")

})
*/


var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    console.log(req.url)
     if (req.url=="/urun"){
        fs.readFile("urunler.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    else if (req.url=="/"){
        fs.readFile("ana.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    
    else  {
        fs.readFile("404.html",(err,html)=>{
            if(!err){
                res.write(html)
                res.end()

            }
        })
    }
    
})
server.listen(3000,()=>{
    console.log("server akitd")

})