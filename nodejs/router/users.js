
const express=require("express")

const router=express.Router()


router.use("/products/:id",(req,res)=>{
    const urun=data.find(u =>u.id == req.params.id)
    res.render( "product-detail",urun)//urun bir obje old. sıkıntı yok 
})
router.use("/products",(req,res)=>{
    res.render("farkli/products",{ // data bir liste old icin hata alırsın 
        urunler:data
    })
})
router.use("/",(req,res)=>{
    res.render("ana",{urunler:data})
})
module.exports=router