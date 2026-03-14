const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote")

async function getQuotes(){
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author
}

getQuotes();

function tweet(){
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} + ---- + ${author.innerHTML} `,"Tweet window","width=600, height= 300" );
}

newQuote.addEventListener("click",() => {
  getQuotes();
})
