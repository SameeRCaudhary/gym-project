
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
function setHours (){
  let h = new Date();
   document.getElementById('hours').innerHTML = h.getHours();
}
function setMinutes (){
    let m = new Date();
    document.getElementById('minutes').innerHTML = m.getMinutes();

}
function setSecond (){
    let sec = new Date();
    document.getElementById('second').innerHTML= sec.getSeconds();

}
function getMilliSecond (){
    let millsecond = new Date();
    document.getElementById('milli').innerHTML = millsecond.getMilliseconds();
}
setInterval(setHours,1000);
setInterval(setMinutes,1000);
setInterval(setSecond,1000);
setInterval(getMilliSecond,1000);
