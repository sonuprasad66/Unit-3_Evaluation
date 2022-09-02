// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import navbar from "../components/navbar.js";
//  document.getElementById('navbar').innerHTML=navbar();

//  import {India,China,Usa,Uk,Newzeland} from "../components/fetch.js"
// document.getElementById("in").addEventListener("click",India)
// document.getElementById("ch").addEventListener("click",China)
// document.getElementById("us").addEventListener("click",Usa)
// document.getElementById("uk").addEventListener("click",Uk)
// document.getElementById("nz").addEventListener("click",Newzeland)


// const input = document.getElementById('search_input');
// input.addEventListener("keypress",()=>{
//     Search()
//     window.location.href="search.html"
// })


// let Search = async ()=>{
//     const query = document.getElementById('search_input').value;
//     let url = `https://masai-api.herokuapp.com/news?q=${query} `;
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.articles)
//     Append(data.articles)

// }




// let results = document.getElementById("results");

// let Append = (data)=>{
//     let results = document.getElementById("results");
//     results.innerHTML=null;
//     data.forEach(({urlToImage,title,description,content} )=>{

//         let div = document.createElement("div")
//         div.setAttribute("class","news")

//         let div1 = document.createElement("div")
//         div.setAttribute("id","div1")

//         let div2 = document.createElement("div")
//         div.setAttribute("id","div2")


//         let image = document.createElement("img")
//         image.src = urlToImage;

//         let p1 = document.createElement("p")
//         p1.innerText = description;

//         let p2 = document.createElement("p")
//         p2.innerText = title;

//        div1.append(image)
//        div2.append(p1,p2)
//        results.append(div1,div2)

//     })

// }