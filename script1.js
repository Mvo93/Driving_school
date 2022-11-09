let img=document.querySelector("#images")
console.log(img)
setInterval(  function(){
    let x=Math.floor(Math.random() * 3)
    img.innerHTML=` <img src ="img/${x}.jpg" id="img">`},
    2000)
setTimeout(function(){
    let blo=document.querySelector("#otz")
let arr=[5,6,7,8,9]

function rendert(){
let result=''
arr.forEach(function(item,index){
    result+=`<img src ="img/${item}.jpg" class="otziv${index}">`
})
blo.innerHTML=result
arr.unshift(arr.pop())
move()
}
setInterval(rendert,3000)
function move(){
let otziv0= document.querySelector(".otziv0")
let otziv1=document.querySelector(".otziv1")
let step=setInterval(function(){
    otziv1.style.scale=`1.4`
    otziv0.style.transform = `translate(310px, -43px)`
    otziv1.style.transform = `translate(280px, -40px)`
    otziv0.style.scale=`1.2`
},1800)
}
},2000)
let x=0
function go(){
    x+=3
    document.querySelector("#car").style.transform = `translate(${x}px, ${x}px)`
if (x==99)
clearInterval(fly)
}
let fly=setInterval(go,30)

let plus=document.querySelector("#main")
document.addEventListener("scroll",function(){
let spis=document.querySelectorAll(".pl")
spis.forEach(function(item,index){
 setTimeout(function(){   item.style.opacity="100"
},index*1000)
})
}
)
let otz=document.querySelector("#osnova")
setInterval(function(){
    otz.style.boxShadow = `20px 10px 10px #${randColor()}`
},500)

function randColor(){
    let answer=""
    let colors="0123456789abcdef"
    for(let i=0;i<6;i++){
    let ran=Math.floor(Math.random()*16)
    answer+=colors[ran]
    }
    return answer
}
randColor()
let y=0
function go2(){
    y+=3
    document.querySelector("#second_car").style.transform = `translate(0px, ${y}px)`
if (y==1200)
clearInterval(fly2)
}

let fly2=setInterval(go2,30)
let road=document.querySelector("#main_road")
road.addEventListener("scroll",()=>console.log("рулл"))









