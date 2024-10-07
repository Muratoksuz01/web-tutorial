const express=require("express")
const app=express()
app.use(express.static("public"))
app.use(express.static("node_modules"))
app.set("view engine","ejs")
const Approuter=require("./router/users")
const db=require("./data/db")
const users = db.prepare('SELECT * FROM products').all();
// console.log(users); //test icin

// const data=[ //onceki surumden kalma
//     {id:1,name:"iphone 11",price: 100,isHome:true,isActive:true,imageUrl:"resim1.png"},
//     {id:2,name:"iphone 12",price: 200,isHome:false,isActive:false,imageUrl:"2.jpeg"},
//     {id:3,name:"iphone 13",price: 300,isHome:true,isActive:true,imageUrl:"3.jpeg"}
// ]



data=users


app.use(Approuter)
app.listen(3000,()=>{
    console.log("server active")
})



/*
form ,(orm=sequelize=mysql),admin paneli,mongoose,membership,restapi,tokenbased auth,publish
bu yapılar hala ogrenilmedi 
*/