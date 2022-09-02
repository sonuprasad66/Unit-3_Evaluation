

let container = document.getElementById("cart")
let userdata = JSON.parse(localStorage.getItem("cart_items")) || [];

displaydata(userdata)
function displaydata(data){

  data.forEach(function(elem,index){

let div = document.createElement("div")
div.setAttribute("class","item")

let image = document.createElement("img")
image.src = elem.image;

let name = document.createElement("h2")
name.innerText=elem.name;

let price = document.createElement("h3")
price.innerText = elem.price

let adiv = document.createElement("div")
adiv.setAttribute("class","remove")
let remove  = document.createElement("button")
remove.innerText = "Remove"
remove.addEventListener("click", function(){
  removeItem(elem,index)
})

adiv.append(remove)
div.append(image,name,price,adiv)

container.append(div)

})
}

function removeItem(elem,index){
  userdata.splice(index,1)
  localStorage.setItem("cart_items", JSON.stringify(userdata))
  window.location.reload();

}

function calculate(){
  let cart_total = document.getElementById("cart_total")
let sum=0;
for(let i=0; i<userdata.length; i++){
  sum=sum+userdata[i].price;
}
console.log(sum)
cart_total.innerText=sum;

}
calculate();




let checkout = document.getElementById("checkout")
checkout.addEventListener("click",function(){
  window.location.href="checkout.html"
})