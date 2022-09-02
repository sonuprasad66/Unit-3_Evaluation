

let hoteldata =  JSON.parse(localStorage.getItem("hotel")) || [];
console.log(hoteldata)
let container = document.getElementById("hotel_details")

displaydata(hoteldata)
function displaydata(data){
  data.forEach((elem)=>{


    let div = document.createElement("div")
    div.setAttribute("id", "hotel")

    let div1 = document.createElement("div")

    let div2 = document.createElement("div")

    let image1 = document.createElement("img")
    image1.src =elem.Images.one;

    let image2 = document.createElement("img")
    image2.src =elem.Images.two;

    let title = document.createElement("p")
    title.innerText=elem.Title;

    let price = document.createElement("p")
    price.innerText=elem.Price;

    div1.append(image1)
    div2.append(image2)

    div.append(div1,div2)

    container.append(div ,title,price)


    })

}


let bookbtn = document.getElementById("book")
bookbtn.addEventListener("click", ()=>{

    let uname = document.getElementById("user_name").value;

    alert(`${uname} Your booking is successful!`)
})