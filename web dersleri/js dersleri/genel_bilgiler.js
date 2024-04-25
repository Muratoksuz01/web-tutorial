// şimdilik var ve let değişken tanımlamak için const ise değiştirilemz oldugunu belirtir 
// float ve number ifadeler burada NUmber olarak geciyor 
// dizi ve {} bunlar ise object olarak geciyor 

//const { time } = require("console")

//const { futimes } = require("fs")

// const { devNull } = require("os")
// const { openStdin } = require("process")

// var a =5
// a.toFixed(2)//sonuna 5.00
// a.toFixed() //burada virgiulu atar
// var b="ali"
// b.length()//uzulugunu donderir


/*//string dersi
var aa= " string dersi "
console.log(aa)
result=aa.trimStart()//bastatı boslukalrı siliyor
result=aa.endsWith("si ") 
result=aa.indexOf("ing")
result=aa.charAt(0)// 0 karakterei getirir
var result=aa.substr(0,5)// sayısaya kadar kısmı boler yenş bşr strşng donderir
var result=aa.slice(5,15)//yukardaki ile aynı
console.log( " burasi: "+  result)
result=aa.repeat(2)
aa='5'
result=aa.padStart(4, "0"); //output 0005

result=aa.replace("string","hayır ")
result=aa.concat(" ","ikinci string") // birleştirme yapıyor
console.log(result)
*/
/* sayılar
var aa=5
var bb=5.5
var result= bb.toString()
result= Math.abs(aa)// mutlat deger
result= Math.round(bb)//en yakın tam sayı
result= Math.ceil(bb)// en yakın buyuk sayıya 
result= Math.floor(bb)// en yakınkucuk sayıya 
result= Math.max(bb,aa)
result= Math.random()// 0 1 arasında 
console.log(result)
*/
/* tarih kısmı

var aa= new Date()
var result=aa.getDate()
result=aa.getHours()
result=aa.getDay()
result=aa.getFullYear()
result=aa.getMonth()
result=aa.getMinutes()
var bb=new Date(2023,6,7)//ozel tarih
console.log(result)
*/

// var ali="merhaba"
// console.log(`${ali}`)//alt gr + Ü nin yanındaki harf senin için arastır  Template stringler   yada  backtick 

/* diziler
function over(year){
    return (2018-year)<=18
}
var aa=["ali","sibel","aali"]
var bb=[12,13,14]
var cc=["merhaba",5,null,["ali","sibel"]]
var dd=[2022,2018,1982,2005]
var result=aa.push("son eleman ")
result=aa.unshift("bas eleman ")
result=aa.shift()//silmek için bas eleman
result=aa.pop() //silmek için son eleman
var result=aa.concat(bb)// dizi birleştirmek için
result=aa.indexOf("ali")
result=aa.sort()
result=aa.reverse()//ters cevirir
result=aa.splice(0,1)// bastan itibaren 1 elemanı sil

let filtrseliSayilar = dd.filter((sayi) => {
    return sayi % 2 == 0;
  });
  console.log(filtrseliSayilar); 

let filtreliSayilar = dd.find((sayi) => {
    return sayi % 2 == 0;
  });
  console.log(filtreliSayilar); 
  console.log( aa.lastIndexOf("aali",) )
*/
/* //dict
let person={
  first:"murat",
  last:"öksüz",
  age: 20,
  hobbies: ["ali","merve"],
  adress:{
    city:"aladag",
    
  },
  over:function () {
    return 2018-(this.age);
  }
}
console.log(person.adress.city)
console.log(person.adress["city"])
console.log(person.hobbies.length)
console.log(person.over())//foksiyon cagirebilirsin
*/


/*//donguler
people=[
  {first:"murat",last:"öksüz"},
  {first:"sibel",last:"öksüz"},
  {first:"mehmet",last:"öksüz"},
  {first:"sadiye",last:"öksüz"}
]

// for (var i =0;i<people.length;i++){
  //   console.log(people[i].first)
  // }
  
  
  // people.forEach(function(item){
    //   console.log(item.first)
    // })
    
    // for (var i in people){
      //   console.log(people[i].first)
      // }
      
      
      // var val=people.map(function(item){
        //   return item.first+ " "+item.last
        // })// araya bosluk ekleyip dizi olarak dondermesi 
        
        // console.log(val)
        
        // var number=[1,2,3,4,5,6,7,8,9,0]
        
        // var val=number.map(function(n){
          //   return n%2==0?n:null
          // })
          // console.log(val)
*/

/* foksiynlar degisik
// const sum =function(a,b){
//   return a+b
// };console.log(sum(30,40))

  
  
// function sumall(){//istediğin kadar sayı gonder
//   var total=0;
//   for (var i=0;i<arguments.length;i++){
//     total+=arguments[i]
//   }
//   return total
// }
// console.log(sumall(1,2,3,4,5,6,7,8,9))
*/

/* window
//var val;
//alert("merhaba")
//promt
// var b=prompt("sayı girt")
// console.log(b)
// confirm
// val=confirm("are you sure:")
// console.log(val)
//scroll
// val=scrollX
// val=scrollY

// val =location// kullancagın zelllikler gelir
// val=location.host
// val=location.hostname
// val=location.protocol
// val=location.search
*/

/* let var const farkları
var glabola olarak olusturulur foksiyon  bolok lar içinde gloabal olur 
let ve const ise bloglar ve foksiyonlar tarafından local olarak deger tutar 
for ve fokisyonlarda genellikle yenı deger tanmlayacaksan let yada const kullan 
*/

/*//html elamaent larıne ulasşma
//let val
 tek li secim
val=document.getElementById("ıd bilisi ver").classList.add("yeni class ekler")
val=document.getElementById("ıd bilisi ver").className("olan class ı tekrar yazar")

val=document.querySelector(". class vermek icin ornek .classname")//bunun kullanımı daha geniş
val=document.querySelector("# ıd  vermek icin ornek #idname")
val=document.querySelector("# ıd  vermek icin ornek #idname").textContent="texti degisir"
val=document.querySelector("# ıd  vermek icin ornek #idname").style.color="red"
//cok lu secim
// val=document.getElementsByClassName("classname")//dizi donderir
// val=document.getElementsByTagName("örnek li ,a ,ul vs.")
// val=document.querySelectorAll("bilirsin ")
// val=document.querySelectorAll("li:nth-child(odd)")
// val.forEach(function(item){
  //   item.style.color="red"
  // })
  // console.log(val)
  
  */
/* create new element
let li = document.createElement("li")
li.setAttribute("title","title bilgisi")
li.setAttribute("data-togle","5")
li.className="list-group-item list-group-item-secondary"
li.textContent="new list"
let a=document.createElement("a")
a.className="delete-item btn btn-outline-secondary float-end"
a.innerHTML="<i class='fa-solid fa-x'></i>"
a.setAttribute("href","#")
li.appendChild(a)
let ul=document.querySelector(".list-group").appendChild(li)
console.log(li)
*/
/* remove element replace element
//let tasklist=document.querySelector(".list-group")
// child remove
//tasklist.remove()//komple siler
//tasklist.children[0].remove()
//child replace
// const cardheader=document.querySelector(".card-header")
// const h2=document.createElement("h2")
// h2.setAttribute("class", "card-header")
// h2.appendChild(document.createTextNode("My Lİst"))
// const parent=document.querySelector(".card")
// parent.replaceChild(h2,cardheader)
// console.log(tasklist)
//classes
// let val
// let link=tasklist.children[0].children[0];//; onemli haberin olsunn 
// val=link.className;
// val=link.classList;
// val=link.classList[0];
// val=link.getAttribute("data-id")
// val=link.setAttribute("href","httpvbjdflvbhlda")
// val=link.hasAttribute("data-id")
// console.log(val)
*/

/* event listener

// const deleteall=document.getElementById("btnDeleteAll");
// deleteall.addEventListener("click",function(){
//   let ul=document.querySelector(".list-group")
//   for(let i=0 ;i<ul.children.length;i++){
  //     ul.children[i].remove()
  //   }
  // })
  
  // const deleteall=document.getElementById("btnDeleteAll");
  // deleteall.addEventListener("mouseover",function(){
    //   let ul=document.querySelector(".list-group")
    //   ul.remove();
    // })
    
    // const addbtn=document.querySelector("#button-addon2")
    // addbtn.addEventListener("click",function(){
//   let input=document.querySelector("input")

//   var value=(input.value)
//   if(value!=""){
//     addliste(value)
//     input.value=""
//   }
//   else{
  //     console.log("element yok")
  //   }
  // })
  // function addliste(value){
    //   const ul=document.querySelector("ul")
    //   const li=document.createElement("li")
    //   const a=document.createElement("a")
    //   li.className="list-group-item list-group-item-secondary"
    //   li.textContent=value
    //   a.setAttribute("href","#")
    //   a.className="delete-item btn btn-outline-secondary float-end"
    //   a.innerHTML="<i class='fa-solid fa-x'></i>"
    //   li.appendChild(a)
    //   ul.appendChild(li)
    
    // }
    
    
    // const input=document.querySelector("input");
    // // input.addEventListener("keydown",eventt)
    // // input.addEventListener("keyup",eventt)
    // // input.addEventListener("keypress",eventt)
    // // input.addEventListener("focus",eventt)
    // // input.addEventListener("blur",eventt)//focustan cıktıgında 
// input.addEventListener("cut",eventt)//input alanında ctr+x basınca yada sag click olunca 
// input.addEventListener("paste",eventt)
// input.addEventListener("copy",eventt)


// function eventt(e){

//   console.log("event type :"+ e.type)
//   // console.log("key code :"+ e.keyCode)
//   // console.log("value :"+ e.target.value)

// }
  */
  
  /*
// let form=document.querySelector(".form-control")

// let cardbody=document.querySelector(".card-body")
// let card=document.querySelector(".card")
// let container=document.querySelector(".container")
// let deleteitems=document.querySelectorAll(".fa-times")


// // form.addEventListener("click",function(e){
  // //   console.log(" form")
  // //   e.stopPropagation()//kullanmassan her birinde her form aslında bir card body elemanı o da card elemanı o da container elemanıdır hepsi calışır
  // // })
  // // cardbody.addEventListener("click",function(e){
    // //   console.log(" card body")
    // //   e.stopPropagation()
    // // })
    // // card.addEventListener("click",function(e){
      // //   console.log(" card")
      // //   e.stopPropagation()
      // // })
      // // container.addEventListener("click",function(e){
        // //   console.log(" container")
        // //   e.stopPropagation()
        // // })
        
        
        
        
        // // form.addEventListener("click",function(e){
          // //   console.log(" form")
          // //   e.stopPropagation()//kullanmassan her birinde her form aslında bir card body elemanı o da card elemanı o da container elemanıdır hepsi calışır
          // // },true)//bu true aslında hata  gibi bir sey yaparsan boyle once en buyuk eleman calışır 
          // // cardbody.addEventListener("click",function(e){
// //   console.log(" card body")
// //   e.stopPropagation()
// // },true)
// // card.addEventListener("click",function(e){
// //   console.log(" card")
// //   e.stopPropagation()
// // },true)
// // container.addEventListener("click",function(e){
  // //   console.log(" container")
  // //   e.stopPropagation()
  // // },true)
  
  
  // // deleteitems.forEach(function(item){
    // //   item.addEventListener("click",function(e){
      // //    // e.target.parent
      // //     console.log(e.target.parentElement.parentElement.remove())
      // //   })
      // // })
*/

/* //local storage and sessiınstorage
// let val
// localStorage.clear()
// localStorage.setItem("adı","murat")
// val=localStorage.getItem("adı")
// val=localStorage.removeItem("adı")
// let hobbies=["spor","kitap","atmak"]
// localStorage.setItem("hobbies",JSON.stringify(hobbies))
// console.log(JSON.parse(localStorage.hobbies)[0])

// sessionStorage//bunun ile farki bu tarayıcı kapandıgında silinir diğeri için manuel silmek gerekir
 */       

/*//demo bakılabilir biraz hata var 

let addbutton=document.querySelector("button")
addbutton.addEventListener("click",function(e){
  let input=document.querySelector("input")
  if (input.value!=""){
    localStorage.setItem(localStorage.length,input.value)
    reflec() 
    input.value="" 
  }
})



let deleteAll=document.querySelector("#btnDeleteAll")
deleteAll.addEventListener("click",function(e){
  var ul=document.querySelector(".list-group")
  for(let i=0;i<ul.children.length;i++){ul.children[i].remove()}

  localStorage.clear()
  reflec() 
})
 
localStorage.clear()
console.log(localStorage)

function addrow(text){
      let ul=document.querySelector("ul")
      let li=document.createElement("li")
      let a=document.createElement("a")
      a.setAttribute("href","#")
      a.className="delete-item btn  float-end"
      a.innerHTML="<i class='fas fa-times'></i>"
      li.className="list-group-item list-group-item-secondary"
      li.textContent=text
      li.appendChild(a)
      ul.appendChild(li)

}



function reflec(){
  var ul=document.querySelector(".list-group")
  for(let i=0;i<ul.childNodes.length;i++){ul.childNodes[i].remove()}
  
  var datas=localStorage
  console.log(datas)

  for(let i=0;i<datas.length;i++){
      console.log(datas[i])
      addrow(datas[i])
  }
}
 */

 /*//class yapısı
// function Person(name,year,job){
//   this.name=name
//   this.year=year
//   this.job=job
//   console.log(this)
//   this.calculator=function(){
//     return 2018-this.year
//   }
// }

// let emel=new Person("emel",1900,"stutend")
// console.log(emel.calculator())


//kalitim 

function Person(name,year,job){
  this.name=name
  this.year=year
  this.job=job
}
        
Person.prototype.calculator=function(){//burada kalıtım yoluyla ekiyoruz 
  return 2018-this.year
}
Person.GetName=function(){
  return this.name
}

let emel= new Person("emel",2000,"job") //new eklemmeyi unutma
console.log(emel.calculator())
console.log(emel.GetName())
    */     
        
 /* objeck yapıısı
var o1={
  name:"murat",
  age:20
}

var o2=o1
o2.name="sibelr"

console.log(o1)//degerleein aynısı kopyalanmıyor sadece adresi kopyalanıyor guncelleme işleminde tek adres var 
console.log(o2)
  */       
/*foksiyona foksiyon göndermek parametre ile 
function multiSum(a,b,c,callback){
  let arr=[]
  for(let i=0;i<3;i++){
    arr[i]=callback(arguments[i]*2)
  }
  return arr
}
function addone(a){
  return a+1
}
var val
val=multiSum(5,10,20,addone)//foksiyona bir foksiyonu parametre olarak gonderebilirsin 
console.log(val)
 */

/*//build in costructors
let str1="murat";
let str2 =new String("murat");//bu sana bazı ekstra özllkiler sağlar  aynısı Number vs. içined var 
// console.log(typeof str1);
// console.log(str1);

// console.log(typeof str2);
// console.log(str2);
*/

//kalitim demo
/*
function Person(name){
  this.name=name
}

function Teacher( name,branch){
  Person.call(this,name)
  this.branch=branch
}


Teacher.prototype.teach=function(){
  console.log(` ${this.name}  ${this.branch} ogretti`)

}



function Student(name,number){
  Person.call(this,name)
  this.number=number
}
Student.prototype.study=function(){
  console.log(` ${this.name} ${this.number}  calıştı`)
}



function Headmaster(name,branch){
  Teacher.call(this,name,branch)
}
Headmaster.prototype.shareTask=function(){
  console.log(` ${this.name} mudur ${this.branch}   calıştı`)
}

let s1= new Student("murat",12)
s1.study()
console.log("***************")
let t1=new Teacher("ogretmen","math")
t1.teach()
console.log("***************")
let m1=new Headmaster("mudur ","phisik")
m1.shareTask()
let m2=new Headmaster("tayfun","phisic")
*/
//Primitive & Objects 
/*
var obj1={
  name:"murat",
  age:21
}
var obj2=obj1//buradaki olay obj lerin kopyaladıgında vs. ayrı bir bellek olmadıgından aynı adres kopyaladıgından 
// yapılan degişiklık tum kopyalara etkilenir 
// fonnkisyonşara gondeerdiginde vs. yaptıgın degişiklıklar adreste  ki degişkenin degeerleri oldıgı için kullnılır 
obj1.age=22

console.log(obj2.age)
*/

//Callback functiona funtion gönderme 
/*function multiSum(a,b,c,callback){
  let val=[];
  if(callback && typeof callback ==="function"){
    for(let i=0;i<arguments.length;i++){
      val[i]=callback(arguments[i]*2)
    }
  }
  return val
}


function addOne(a){
  return a+1
}
console.log(multiSum(5,10,20,addOne))

console.log(multiSum(5,10,30,function(a){//tek kullanımlık bir foksşyon ise bunu kullan 
  return a+15
}
))*/

//tek kullanımlık foksiyon  Immediate functions  2 kullanımı var 
/*
// (function(){

// }{//parametreler})

// (function(){

// })(//parametreler )

(function(){
  var days=["sunday","monday","tuesday","wednesday",
  "thursday","friday","saturday"]
  let today=new Date()
  console.log(days[today.getDay()])
}())
*/

//Fonksiyondan Fonksiyon Döndürme
/*function Question(hobby){
  switch(hobby){
    case 'car':
      return function(name){
        console.log(name+" do you have a car ?")
      }
      break;
    case 'home':
      return function(name){
        console.log(name+ " do you have a home ?")
      }
      break;
    default:
      return function(name,home){
        console.log(name+ " how are you  ?"+ home )
      }
  }
}

var carQuestion=Question('car')
carQuestion('murat')
var defauldQuestion=Question('default')
defauldQuestion('Sibel','home')*/


//Getter & Setter
/*
// const Person={
//   firstname:"murat",
//   lastname:'oksuz',
//   get fullname(){
//     console.log(this.firstname +" "+this.lastname)
//   },
//   set setvalue(value){
//     const parts=value.split(" ")
//     this.firstname=parts[0]
//     this.lastname=parts[1]
//   }
// }
const person={
  firstname:"murat",
  lastname:'oksuz',
}
Object.defineProperty(person,'age',{
  value:50,
  writable:true//default olarak false gelir false olursa disarıda degiştirme sansın olmaz 
})
Object.defineProperty(person,'fullname',{
  get function(){
        console.log(this.firstname +" "+this.lastname)
      },
  set function(value){
        const parts=value.split(" ")
        this.firstname=parts[0]
        this.lastname=parts[1]
      }
})
//Person.setvalue="sibel oksuz" // burada işte fonksiyon olarak tanımlamıyorsun deger olarak tanımlıyorsun 
person.set
//console.log(person.fullname)
console.log(person)
*/

//call bind apply
/*
// var welcome=function(){//fonksiyonda objeck cagırmak 
//   console.log("welcome "+this.name)
// }
// var yugut={name:"yigit"}
// var ada={name:"ada"}

// welcome.call(yugut)
// welcome.apply(yugut)//parametre almıyorsa ikisi aynı işle-v yapıyor 

// welcomeYugut=welcome.bind(yugut)// paramete yoksa böyle kullanabilirsin 
// welcomeYugut()


// var welcome=function(a,b){//fonksiyonda objeck cagırmak 
//     console.log("welcome "+this.name+"are you interested in "+a+ " and "+b)
//   }
//   var yugut={name:"yigit"}
//   var ada={name:"ada"}
  
//   welcome.call(yugut,"angular","java")
//   welcome.apply(yugut,["angıu","java"])//parametreli kullanım
  
//   welcomeYugut=welcome.bind(yugut)//  parametreli kullanım
//   welcomeYugut("angular","jaca")
*/  

//try catch
/*
var user={name:"murar"}
try{
    console.log(user.name)
    if(!user.email){
        throw new SyntaxError("user has no email")
    }
}
catch(e){
  console.log(e)
  console.log(e.name)
  console.log(e.message)
  console.log(e instanceof ReferenceError)
  console.log(e instanceof SyntaxError)
  console.log(typeof e)
}
*/

// Quiz demo basarısız
/*
function Quiz(ask,answer,sıklar){
  this.ask=ask
  this.answer=answer
  this.sıklar=sıklar
}
Quiz.prototype.CheckAnswer=function(selection){
  var skore=0
  if(selection=== this.answer)skore++
  return skore
}

var oneQuestion= new Quiz("what's the most popular language ?","python",["Python","Javascript","Angular","React"])
var twoQuestion= new Quiz("what's the most popular language2 ?","python2",["Python2","Javascript2","Angular2","React2"])
var threeQuestion= new Quiz("what's the most popular language3 ?","python3",["Python3","Javascript3","Angular3","React3"])
var questions=[oneQuestion,twoQuestion,threeQuestion]

for(let i=0;i<questions.length;i++){
  var ask=document.querySelector(".question")
  ask.textContent=questions[i].ask
  
  var options=document.querySelectorAll(".answer")
  options.forEach(function(option){
    var sıklar=questions[i].sıklar
    sıklar.forEach(function(sık){
      option.textContent=sık
    })
  })
}

var all_option=document.querySelectorAll(".answer")
all_option.forEach(function(option){
  option.addEventListener("click",function(e){
    var answer= e.target.textContent
    
  })
})
*/
// arrow function
/*
//es5
let welcomees5=function(){
  console.log("hello from es5")
}
welcomees5();
//es6
let welcomees6=() => {
  console.log("welcome es6")
}
welcomees6()
//es5
let multies5= function(x,y){return x*y}
console.log(multies5(5,6))
//es6
let multies6 = (x,y) => x*y
let multies62 = (x,y) => {return x*y}
//es5
let splites5= function(text){
   return text.split(" ")
}
//es6 
let splites6= text =>text.split(" ")

//es5
let getproductes5=function(id,text){
  return {
    id:id,
    text:text
  }
}
let getproductes6= (id,text) => (
  {
    id:id,
    text:text}
)
//es5
const phones=[
  {name:"iphone 5",price:5000},
  {name:"iphone 8",price:5000},
  {name:"iphone 7",price:5000},
  {name:"iphone 6",price:5000},
]
let pricees5=phones.map(function(phone){
  return phone.price
})
//es6
let pricees6=phones.map(phone =>phone.price)

//es5
const arr=[1,2,3,45,81,95]
let evenes5=arr.filter(function(a){
  return a%2==0
})
let evenes6=arr.filter(a=>a%2==0)
*/

// 'this' Keyword
/*
// let list= {
//   category: 'phone',
//   names: ["IPhone 8", "Samsung S8", 'IPhone 7'],
//   call: function(){
//   this.names.map (function (name) {
//   console.log(`${this.category}  ${name}`);//bu yanlış kullanım 'this'  foksiyonun içinde tanımlı degil
//   })
//   }
// }
// list.call();

// let list= {
//     category: 'phone',
//     names: ["IPhone 8", "Samsung S8", 'IPhone 7'],
//     call: function(){
//       var self=this
//     this.names.map (function (name) {
//     console.log(`${self.category}  ${name}`);//bu dogrus su bu ama uzun var zaten foksiyonlarda tanımlanabiliyor yanı heryerde kullanabiliyrsun
//     })
//     }
//   }
//   list.call();

// let list= {
//   category: 'phone',
//   names: ["IPhone 8", "Samsung S8", 'IPhone 7'],
//   call: function(){
//   this.names.map ( name=> {
//   console.log(`${this.category}  ${name}`);// bu en dogrusu  bu 
//   })
//   }
// }
// list.call();
*/

/* es6 ile gelen ozellikler
function gettotal(a,b,c){
  return a+b+c
}
//console.log(gettotal(10,20,30))
let arr =[10,20,30]
 //es5
//console.log(gettotal.apply(null,arr))
//es6
//console.log(gettotal(...arr))

let arr1 = ['two', 'three'];
let arr2 = ['one', 'four', 'five'];
let arr3=[ "one ",...arr1]// sonuna arr1 elemanlarını ekler
//arr1.push(arr2);// bu kullanım 2. index e bir dizi gonderir
//arr1.push(...arr2) //bu ise elemanları ekler sonraki indexlere 
//arr1.unshift(arr2);
console.log(arr3);
*/
/*ees6 ile gelen ozellikler foksiyonlar 
//es6 
//burada boyle yapmassan gonderdiğin degerler argumants paramtresine gider bu da arrey degil donusturmek gerekir boyle dıreck array olarak geliyor 
function sum(...arr){//almasada gondersiğin degerler burada saklanır 
  let result=0
  arr.forEach(a=>result+=a)
  return result
}
//console.log(sum(10,20,30))

// function isDriver(...years){
//   years.forEach(year=>console.log(2023-year>=18))
// }
// isDriver(2000,2015,2010,2001)


function isDriver(age,...years){//baska paremetreler var ise böyle yapılıyor 
  years.forEach(year=>console.log(2023-year>=age))
}
//isDriver(17,2000,2015,2010,2001)

var a,b,rest

[a,b]=[10,20] //tanımlayabilirsin 
[a,b,rest]=[10,20,30,40,40]//ilk 2 deger a ve b sonraakiler hepsi rest olacak 


// const arr1=["one","two","three"]
// const [one,two,three]=arr1
// console.log(one,two, three)


const objcon={
  server:"localhost",
  post:"8800",
  timeout:"12"
}
const {server,port,timout}=objcon
console.log(server,post,timeout)
*/

//es6 array
/*
const boxes=document.querySelectorAll(".box")
//es5
// let boxesEs5=Array.prototype.slice.call(boxes)
// boxesEs5.forEach(function(box) {
//   box.style.backgroundColor="green"  
// });
//es6
// Array.from(boxes).forEach(box=>
//   box.style.backgroundColor="green")

//mesela es6 ile for işlemi
// var es6box=Array.from(boxes)
// for(let box of es6box){
//   if(box.className=="box blue")continue
//   box.textContent="I'm changed"
// }


// // stringi karakterlere bolmek istersen 
// let arr=Array.from("moders js dersi")
// console.log(arr)

//objenin blirli elemanlarını direct dizi yapmak

// const products = [
//   {name: 'Samsung S8', price : 3000},
//   {name: 'Samsung S7',price : 2000},
//   {name: 'Samsung S6',price : 1000}
//   ]
// console.log(Array.from(products,prd =>
//   prd.name));//burada mesela name leri dizi haline getirdik 
// console.log(Array.from(products,prd =>
//     prd.name=="Samsung S8"));//burada bir filter işlemi yaptık filan 
// // soyle bu işlemleri find filter findIndex ile yine yaparız fakat bize dizi degeil object dondurur 

let numbers=["a","b","c"]
let entries=numbers.entries()//dizideki her bir elemana bir key atar yanı object donusturur
//for (let i of entries)console.log(i)


// let keys=numbers.keys()//diziyi object turune donusturur ve sadece key tutar 
// for(let j of keys)console.log(j)

let values=numbers.values()//diziyi object turune donusturur ve sadece values tutar 
for(let k of values)console.log(k)
// tum prototype ozelliklerini  için https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with bu siteyi ziyaret et yada Array.Prototype yaz developer sayfasına git 

*/
//maps object si 
/*
let val
const numbers=new Map()
numbers.set(1,"one")
numbers.set("2","two")
val=numbers
val=numbers.get(1)//key degerini veriyorsun 
val=numbers.size//bıyutunu verir
val=numbers.has("2")//eleman var mı 
//val=numbers.delete(1)
//numbers.clear()
//console.log(val)
// for(var [key,value] of numbers){
//   console.log(key +" ="+value)
// }

console.log(...numbers)
console.log(numbers)
*/

//Sets object si 
/*
let val
var myset=new Set()
myset.add(1)
myset.add(2)
myset.add(2)//olan degeri tekrar atamanz 
myset.add({a:1,b:2})
var obj={a:1,b:2}
myset.add(obj)//ikiside aynı olmasınıa ragmen referans adresi farklı oldugu içintakrar atar

val=myset
val=myset.has(1)
val=myset.size

//console.log(val)
//console.log(Array.from(myset))
let myset2=new Set([1,2,3,2])
//console.log(myset2)

//aynı elemanlaı bir set te toplama 
let intersect=new Set([...myset].filter(x =>myset2.has(x)))
console.log(intersect)
//farklı elemanları bir settte toplama 
let difference=new Set([...myset].filter(x =>!myset2.has(x)))
console.log(difference)
*/

//Classes
/*
class PersonEs6{
  constructor(name,job,yearofbirth){
    this.name=name
    this.job=job
    this.year=yearofbirth
  }
  calculate(){
    return 2018-this.year
  }
}
let emel=new PersonEs6("muat","teacher",2002)
console.log(emel.calculate())
*/
//static
/*
//yardımcı foksiyonlar gibi dusun veri tabanı işlemlerinde ve bu gibi işlmelerde ise yarar
class Point{
  constructor(x,y){
    this.x=x 
    this.y=y
  }
  static distance(a,b){
    const dx=a.x-b.x
    const dy=a.y-b.y
    return Math.hypot(dx,dy)
  }
}

let d1=new Point(10,10)
let  d2=new Point(4,2)
console.log(Point.distance(d1,d2))
*/
//sub classes
/*
class PersonES6{
  constructor(firstname,lastlame){
    this.firstname=firstname
    this.lastlame=lastlame
  }
  sayHi(){return `hello I'm ${this.firstname}  ${this.lastlame}`}
}
class CustomerES6 extends PersonES6{
  constructor(firstname,lastlame,phone,username){
    super(firstname,lastlame)
    this.phone=phone
    this.username=username
  }
}

let customer1=new CustomerES6("aa","bb","011","aabb")
console.log(customer1.sayHi())
*/

//asekron işlemler 
/*
//bir proses var belli bir sure alıyor bu yapılırken de
// arkadan baska işlmeler yapılsın vakit kaybı olmasın 

var xhr=new XMLHttpRequest()
xhr.onreadystatechange= function(){
  if(xhr.readyState==4){
    if(xhr.status===200){
      console.log(xhr.responseText)
    }else if (xhr.status===404){
      console.log("kaynak bulunamadı")
    }
  }
}
xhr.onprogress=function(){
  console.log("on progresing")
}
xhr.open("GET","msg1.txt",true)//false yaoparsan sekron işlem yaparsın pek tavsiye edilmez
xhr.send()


// ready State:
// 0: reguest not initialized
// 1:server connection established
// 2: reguest received
// 3:proccessing reguest
// 4:request finished and response ins ready

// status:
// 200: ok
// 403:forbidden
// 404: not found
*/

//get json data /datas
/*
document.querySelector("#get-employee").addEventListener("click",load_data)

function load_data(){
  document.querySelector(".gif").style.display="block"
  

  setTimeout(() => {
        var xhr =new XMLHttpRequest()
        var table=document.querySelector(".response")
        xhr.open("GET","employees.json",true)
        xhr.onload= function(){
        let html=""
          if(this.status===200)
            var json_datas=JSON.parse(this.responseText)
            json_datas.forEach(emplyee => {
              html+=`
                      <tr>
                        <td>${emplyee.firstname}</td>
                        <td>${emplyee.lastname}</td>
                        <td>${emplyee.age}</td>
                        <td>${emplyee.redirect}</td>
                      </tr>          
                  `
        
            });
            table.innerHTML=html
            
            
            document.querySelector(".gif").style.display="none"
          }
          xhr.send()
        }, 1500);
       console.log("burada") 
 }
*/

//api demo basarılı
/*
var url ="https://jsonplaceholder.typicode.com/posts" 
let btn_one=document.querySelector("#get-one")
let btn_all=document.querySelector("#get-all")

btn_one.addEventListener("click",get_one)
btn_all.addEventListener("click",get_all)
function get_one(){
  console.log("burada")
  let txt=document.querySelector(".txt").value
  var xhr=new XMLHttpRequest()
  xhr.open("GET",`${url}/${txt}`,true)
  xhr.onload=function(){
    console.log(xhr.responseText)
  }
  xhr.send()
}
function get_all(){
  console.log("buradaw1")
  var xhr=new XMLHttpRequest()
  xhr.open("GET",url,true)
  xhr.onload=function(){
    console.log(JSON.parse(xhr.responseText ))
  }
  xhr.send()
}
*/

//asekron callbacks
// asekronlarda işlmemler sıraya alınıyordu bir işlemm yaparken diğeri yapılıyordu 
//bunda ise sıraya almak istiyoruz yani bir func bittikten sonra diğer işlem olsun
/* 
// var products=[
//   {id:1,name:"s1",price:12},
//   {id:5,name:"s3",price:13},
//   {id:4,name:"s4",price:14},
//   {id:3,name:"s5",price:15}
// ]

// function addproduct(pdr){
//   setTimeout(() => {
//     products.push(pdr)
  
//   }, 2000);
// }

// function getproducts(){
//   setTimeout(() => {
//     products.forEach((p)=>{
//       console.log(p.name)
//     })
//   }, 1000);
// }

// addproduct({id:2,name:"s2",price:11})// once bunun eklenip sonra yazdırmasıın beklerız fakat yukardakini aynen yazdırıyor
// getproducts()
// cozum 1
// var products=[
//   {id:1,name:"s1",price:12},
//   {id:5,name:"s3",price:13},
//   {id:4,name:"s4",price:14},
//   {id:3,name:"s5",price:15}
// ]

// function addproduct(pdr,callback){//ancak bu sekilde kullandıgında duzgun calısır 
//   setTimeout(() => {
//     products.push(pdr)
//     callback()
//   }, 2000);
// }

// function getproducts(){
//   setTimeout(() => {
//     products.forEach((p)=>{
//       console.log(p.name)
//     })
//   }, 1000);
// }

// addproduct({id:2,name:"s2",price:11},getproducts)// once bunun eklenip sonra yazdırmasıın beklerız fakat yukardakini aynen yazdırıyor


// var products=[
//   {id:1,name:"s1",price:12},
//   {id:5,name:"s3",price:13},
//   {id:4,name:"s4",price:14},
//   {id:3,name:"s5",price:15}
// ]

// function addproduct(pdr){ 
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       products.push(pdr)
//       let added=true
//       if(added){
//         resolve()
//       }else{
//         reject("hata: 400")
//       }
//     });
//   })
// }

// function getproducts(){
//   setTimeout(() => {
//     products.forEach((p)=>{
//       console.log(p.name)
//     })
//   }, 1000);
// }

// addproduct({id:2,name:"s2",price:11}).//promise ile daha duzgun bir kullanım elde ettik 
// then(getproducts)
// .catch((err)=>{console.log(err)})
*/



//bu ise illa promise objesi olusturma diye cunki bu sana promise objesi donderiyor
async function fi()
{return "hello"}
fi().then((res)=>{
  console.log(res)
})



