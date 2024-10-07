const express=require("express")
const app=express()
app.use("/products/:id/:price",(req,res)=>{
    res.send( "pdoducts"+req.params.id +" ve "+req.params.price)
    //res.sendFile() //dosyada gonderebilirsin 
})
app.use("/products/:id",(req,res)=>{
    res.send( req.params.id)
    res.send("pdoducts")
})
app.use("/products",(req,res)=>{
    res.send("pdoducts")
})
app.use("/",(req,res)=>{
    res.send("anasayfa")
})

app.listen(3000,()=>{
    console.log("server active")
})