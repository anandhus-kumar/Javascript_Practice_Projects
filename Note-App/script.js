
const notesContainer =  document.querySelector(".notes-container");
const  createBtn =  document.querySelector(".btn");
const msg = document.querySelector(".copy-msg");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes")
} 
 showNotes();

function updateStorage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}



createBtn.addEventListener("click",createNotes);

// function resetState(){
//   while(notesContainer.firstChild){
//     notesContainer.removeChild(notesContainer.firstChild)
//   }
// }

function createNotes(e){
 let note = document.createElement("div");
  let inputBox= document.createElement("p");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");

   note.classList.add("note");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable","true");

  img1.src ="images/delete.png"
  img2.src ="images/copy.png"

  img1.className ="delete";
  img2.className = "copy"

 
 note.appendChild(inputBox);
  note.appendChild(img1);
  note.appendChild(img2);

  notesContainer.appendChild(note);
  updateStorage();



}




notesContainer.addEventListener("click",e =>{
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
  if(e.target.classList.contains("copy")){
    let text = e.target.parentElement.querySelector(".input-box").innerText;
    navigator.clipboard.writeText(text);
    msg.classList.add("show");
    setTimeout(()=>{
      msg.classList.remove("show")
    },1000)
    
  } 


})


document.addEventListener("keydown", event => {
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})