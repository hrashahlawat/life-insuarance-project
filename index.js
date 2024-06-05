let watch = document.getElementById("watch")
let round = document.getElementById("round")
let lapsRecord =document.getElementById("lapsrecord")


let minutes = 0 , seconds= 0, millisec =0;
 watch.innerHTML = `${minutes}:${seconds}:${millisec}`
function stopwatch(){
    if(millisec<9){
        millisec++
    }
    else{
        millisec=0
        if(seconds<59){
            seconds++;
        }
        else{
            seconds=0
            if(minutes<59){
                minutes++
            }
            else{
                minutes=0;
            }
        }
    }
    watch.innerHTML =`${minutes}:${seconds}:${millisec}`

}

let stopper ;
 let stopw = document.getElementById("stop");
 stopw.addEventListener("click" ,  ()=>{
    clearInterval(stopper)
    lap.innerHTML =`lap ${minutes}: ${seconds}:${millisec}`

 })

 let start = document.getElementById("start")
 start.addEventListener("click" , ()=>{
    stopper= setInterval(stopwatch , 100)
 })

 let reset = document.getElementById("reset")
 reset.addEventListener("click" , ()=>{
    clearInterval(stopper)
    minutes=0;
    seconds=0;
    millisec=0;
    watch.innerHTML = `${minutes}:${seconds}:${millisec}`
 })

 let lap = document.getElementById("lap");
 lap.addEventListener("click  ", ()=>{
    clearInterval(lapsRecord)
    round.innerHTML =`LAP ${minutes}:${seconds}:${millisec}`
    stopper = setInterval(stopwatch , 100)
    let p = document.createElement('p')
    p.innerHTML = `LAP ${minutes}:${seconds}:${millisec}`
    lapsRecord.appendChild(p)
 } )