const time = document.querySelector("#time");

function TimeRefresh(){

    let setTime = new Date();

    let options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    
    let currentTime = setTime.toLocaleTimeString("pt-BR", options);
    
    /*
    let hours = setTime.getHours();
    let minutes = setTime.getMinutes();
    let seconds = setTime.getSeconds();

    time.textContent = hours + ":" + minutes + ":" + seconds
    */

    time.textContent = currentTime

};

setInterval(() => {

    TimeRefresh();

}, 1000);