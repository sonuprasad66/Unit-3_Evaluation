//store the products array in localstorage as "data"

let showbtn = document.getElementById("show_products")
showbtn.addEventListener("click", function(){
    window.location.href="inventory.html"
})

let form = document.getElementById("product_form");
let submit = document.getElementById("submit")

let data = JSON.parse(localStorage.getItem("data")) || [];

submit.addEventListener("click", function(){
event.preventDefault();
window.location.reload();

let userdata = {
    brand: form.product_brand.value,
    name: form.product_name.value ,
    price: form.product_price.value,
    image: form.product_image.value
}

data.push(userdata)
console.log(data)
localStorage.setItem("data",JSON.stringify(data))
})
