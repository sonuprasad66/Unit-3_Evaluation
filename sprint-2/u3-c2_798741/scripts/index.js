
async function getData(){

  let url = `https://grocery-masai.herokuapp.com/items`
  let res = await fetch(url);
  let data = await res.json();
//   console.log(data.data)
  append(data.data)

}
getData()

let userdata =JSON.parse(localStorage.getItem("cart_items")) || [];

let container = document.getElementById("groceries")

function append(data){

  data.forEach(function(elem){

    let div = document.createElement("div")
    div.setAttribute("class","item")

    let image = document.createElement("img")
    image.src = elem.image;

    let name = document.createElement("h2")
    name.innerText=elem.name;

    let price = document.createElement("h3")
    price.innerText = elem.price

    let adiv = document.createElement("div")
    adiv.setAttribute("class","add_to_cart")
    let add  = document.createElement("button")
    add.innerText = "Add To Cart"
    add.addEventListener("click", function(){
        addTocart(elem)
    })

    adiv.append(add)
    div.append(image,name,price,adiv)

    container.append(div)

  })

}

let a = JSON.parse(localStorage.getItem("wallet")) || [];
function addTocart(elem){

    
    let wallet = document.getElementById("wallet")
    let wallet_balance = (+wallet.innerText)

    let a = wallet_balance-elem.price
    localStorage.setItem("wallet", JSON.stringify(a))
    if(elem.price>wallet.innerText){
        alert("Insufficient balance")
    }else{
       
        wallet.innerText=a
        userdata.push(elem)
        localStorage.setItem("cart_items",JSON.stringify(userdata))
    }

}
