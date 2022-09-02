



let login = document.getElementById("login")
login.addEventListener("click",()=>{
  window.location.href="login.html"
})

let signup = document.getElementById("signup")
signup.addEventListener("click",()=>{
  window.location.href="signup.html"
})


let hoteldata =  JSON.parse(localStorage.getItem("hotel")) || [];
let container = document.getElementById("hotels-list")

let getData = async () =>{
  let query = document.getElementById("query").value;
  let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

  let res = await fetch(url);
  let data = await res.json();
  console.log(data.hotels)
  append(data.hotels)

}

let append = (data)=>{

  data.forEach((elem)=>{

    // console.log(elem.Images.one)
    let div = document.createElement("div")
    div.setAttribute("id", "hotel")

    let image = document.createElement("img")
    image.src =elem.Images.one;

    let title = document.createElement("p")
    title.innerText=elem.Title;

    let price = document.createElement("p")
    price.innerText=elem.Price;

    let rating = document.createElement("p")
    rating.innerText=elem.Rating;

    let acnon = document.createElement("p")
    acnon.innerText=elem.Ac

    let book = document.createElement("button")
    book.setAttribute("class","book")
    book.innerText = "BOOK NOW"
    book.addEventListener("click", ()=>{
      bookNow(elem)
    })

    div.append(image,title,price,rating,acnon,book)

    container.append(div)

  })

  
}

let  bookNow = (elem)=>{
  hoteldata.push(elem)
localStorage.setItem("hotel",JSON.stringify(hoteldata))
window.location.href="checkout.html"

}