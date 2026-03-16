let toastBox = document.getElementById("toast-box");
let buttonElement = document.querySelector(".buttons")
let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Oops! error Occured'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid submission'



function showToast(msg){

 
    let toast = document.createElement("div");
    
       toast.classList.add("toast");
       toast.innerHTML = msg;
       toastBox.appendChild(toast)
       if (msg.includes('error')){
        toast.classList.add("err");
       }else if(msg.includes('Invalid')){
        toast.classList.add("invalid")
       }

       setTimeout(() => {
        toast.remove();
        
       }, 5000);
    }
       

 
 
 