let displayTime = document.getElementById("display");
let [sec,min,hr] = [0,0,0];
let timer = null;

function setTimer(){
  sec++;
  if(sec == 60){
    sec = 0
    min ++;
    if(min == 60){
      min =0;
      hr++;
    }
  }
  let h = hr<10 ? "0" + hr : hr;
  let m = min<10 ? "0" + min : min;
  let s = sec<10 ? "0" + sec : sec;
  displayTime.innerHTML = h + ":" + m + ":" + s
}

function startWatch(){
  if(timer!=null){
    clearInterval(timer);
  }
 timer = setInterval(setTimer,1000)
}

function stopWatch(){
  clearInterval(timer);

}

function resetWatch(){
  clearInterval(setTimer);
  [sec,min,hr] = [0,0,0];
  displayTime.innerHTML = "00:00:00";
}