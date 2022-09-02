// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
 document.getElementById('navbar').innerHTML=navbar();


 let show = JSON.parse(localStorage.getItem("news"))

 let container = document.getElementById("detailed_news")

 let showData = (show)=>{

    let div = document.createElement("div")


    let image = document.createElement("img")
        image.src = show.urlToImage;

        let p1 = document.createElement("p")
        p1.innerText = show.description;

        let p2 = document.createElement("h3")
        p2.innerText = show.title;

        div.append(image, p1,p2)

        container.append(div)


 }

 showData(show)