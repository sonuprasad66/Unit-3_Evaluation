

let id;
let btn = document.getElementById("submit")
btn.addEventListener("click", function(){
let i=0;
 id = setInterval(function(){

  if(i==0){
    alert("Your order is confirmed ")
  }
  else if(i==3){
    alert("Your order is being Packed")
  }else if(i==8){
    alert("Your order is in transit")
  }else if(i==10){
    alert("Your order is out for delivery")
  }else if(i==12){
    alert("Order delivered")
    clearInterval(id)
  }
i=i+1
console.log(i)

},1000)

})