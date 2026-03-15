const URL =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inputElement = document.querySelector("#url-input");
const qrcodeElement = document.getElementById("qrcode");
const imgBoxElement =document.querySelector(".img-box")
console.log(qrcodeElement);



async function createQR(){
  const value = inputElement.value;

  if(value.length > 0){
  qrcodeElement.src = URL + value;
  inputElement.value = "";
  imgBoxElement.classList.add("show-img")
  }else {
    inputElement.classList.add("error")
    setTimeout(() =>{
      inputElement.classList.remove("error");
    },1000)
  }
 

  
}