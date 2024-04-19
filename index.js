let container = document.querySelector("#container")
let stopWatch = document.querySelector("#container>#stopWatch")
let display = document.querySelector("#container>#stopWatch>.display")
let BTN = document.querySelector("#container>#stopWatch>.BTN")
let start = document.querySelector("#container>#stopWatch>.BTN>.start")
let pause = document.querySelector("#container>#stopWatch>.BTN>.pause")
let reset = document.querySelector("#container>#stopWatch>.BTN>.reset")


let [hr,sec,min,milsec] = [0,0,0,0];

let int = null;

start.addEventListener("click", ()=>{
    
    int=setInterval(displayTimer,10);
    
})

pause.addEventListener("click", ()=>{
    clearInterval(int);
})

reset.addEventListener("click" , ()=>{
    clearInterval(int);
    [hr,min,sec,milsec] = [0,0,0,0];
    display.innerHTML = "00  00";
})

function displayTimer(){
    milsec+=10;
    if(milsec==1000){
        milsec = 0;
        sec++;
    }

    if(sec==60){
        sec=0;
        min++;

    }    
    if(min==60){
        min = 0;
        hr++
    }
    
    
    
    let s =sec<10 ? "0" + sec : sec;
    let ms = milsec<10 ? "00" + milsec : milsec;

    if(min===0){
        display.innerHTML = `${s} ${ms}`
    }
    else if(hr===0){
        let m = min<10 ? "0" + min : min;
        display.innerHTML = `${m} : ${s} ${ms}`
    }
    else{
        let h = hr<10 ? "0" + hr : hr;
        display.innerHTML = `${h} : ${m} : ${s} ${ms}`
    }
}

