

let userarr = JSON.parse(localStorage.getItem("users")) || [];
console.log(userarr)

displaydata(userarr)
function displaydata(data){
  data.forEach((elem)=>{

    let btn = document.getElementById("log_in");
    btn.addEventListener("click", ()=>{

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value

if(email == elem.email && password==elem.password){
  alert("Login successful!")
  window.location.href="index.html"
}
else if(email !== elem.email){
  alert("User doesn't exist, Sign Up")
}
else if(email !== elem.password){
  alert("Wrong credentials")
} 
})

  })

}