const day= document.getElementById('day');
const hour= document.getElementById('hour');
const min= document.getElementById('min');
const secs= document.getElementById('secs');
let items= document.querySelectorAll('.tim h2')
function show(){
const futDate= new Date(2021,10,26,11,30,30,0).getTime();

const preDate= new Date().getTime();
const myTime=futDate-preDate;

let myDays=Math.floor(myTime/86400000);
let myHours=Math.floor((myTime % 86400000)/3600000);
let myMin=Math.floor((myTime%3600000)/60000);
let mySec=Math.floor((myTime % 60000)/1000);

function f(item) {
    if(item<10){
        return(item=`0${item}`)
    }
    return item
}

day.textContent=f(myDays);
hour.textContent=f(myHours);
min.textContent=f(myMin);
secs.textContent=f(mySec);
}
setInterval(show,1000)



