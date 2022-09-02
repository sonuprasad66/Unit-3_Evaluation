

let addproducts = document.getElementById("add_product")
addproducts.addEventListener("click", function(){
    window.location.href="index.html"
})

let container = document.getElementById("products_data");

let userdata = JSON.parse(localStorage.getItem("data"));
// console.log(userdata)

displaydata(userdata)
function displaydata(data){
    data.forEach(function(elem,index){

        let div = document.createElement("div")

        let brand = document.createElement("p")
        brand.innerText=elem.brand;

        let name = document.createElement("p")
        name.innerText=elem.name;

        let price = document.createElement("p")
        price.innerText=elem.price;

        let image = document.createElement("img")
        image.src=elem.image;

        let rdiv = document.createElement("div")
        rdiv.setAttribute("id","cbtn")

        let remove = document.createElement("button")
        remove.innerText="Remove"
        remove.addEventListener("click", function(){
            RemoveP(elem,index)
           
        })

        rdiv.append(remove)
        div.append(image,brand,name,price,rdiv)
        container.append(div)

    })
}


function  RemoveP(elem,index){
    userdata.splice(index,1)
    localStorage.setItem("data",JSON.stringify(userdata))
    window.location.reload();
}