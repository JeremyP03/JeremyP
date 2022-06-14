function RandomGame(){
let num;
let times = 0;
let timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
    clearInterval(timer);
    console.log("it took " + times + " try/tries.")
    }
   },1000)
}

