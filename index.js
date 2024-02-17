// selecting varia
var nav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    nav.style.right=0
})

closenav.addEventListener("click",function(){
    nav.style.right="-50%"
})