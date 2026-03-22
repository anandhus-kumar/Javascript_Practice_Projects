const input = document.getElementById("password");
const img = document.getElementById("eyeimg");





img.addEventListener("click",()=>{

if(input.value.length === 0 ){
  input.classList.add("error");
 setTimeout(()=>{
  input.classList.remove("error")
 },200)
}else{
 if(input.type === "password"){
    input.type = "text";
    img.src = "eye-open.png"
  }else{
    input.type ="password";
    img.src = "eye-close.png"
  }
}




 

})