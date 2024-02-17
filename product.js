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
// search element
var product_container=document.getElementById("product_container")
var search=document.getElementById("searchbox")
    var productlist=product_container.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var enteredvalue=event.target.value.toUpperCase()
        
        for(count = 0;count<productlist.length; count=count+1)
        {
            var productname=productlist[count].querySelector("h1").textContent
            if(productname.toUpperCase().indexOf(enteredvalue)<0){
                productlist[count].style.display="none"

            }
            else{
                productlist[count].style.display="block"
            }
        }
    })