

let arr = JSON.parse(localStorage.getItem("users")) || [];
let btn = document.getElementById("sign_up");
btn.addEventListener("click", ()=>{

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value

  let userdata = new User(name,email,password)
   arr.push(userdata)
   console.log(arr)
   localStorage.setItem("users",JSON.stringify(arr))

})

class User{
  constructor(n,e,p){
    this.name = n;
    this.email = e;
    this.password = p;
  }
}