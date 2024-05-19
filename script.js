var button = document.querySelector(".clickbutton");
var toastcontainer = document.querySelector(".toastnotify");
function newmsg(type){
    let newmsgcontainer = document.createElement("div");
    if(type.includes("Success")){
        newmsgcontainer.innerHTML = "<i class='fa-solid fa-circle-check' id='correct'></i>" + type;
        newmsgcontainer.classList.add("correct");
        console.log(newmsgcontainer);
    }
    else if(type.includes("Error")){
        newmsgcontainer.innerHTML = "<i class='fa-solid fa-circle-xmark' id='error'></i>" + type;
        newmsgcontainer.classList.add("error");
        console.log(newmsgcontainer);
    }
    else if(type.includes("Invalid")){
        newmsgcontainer.innerHTML = "<i class='fa-solid fa-circle-exclamation' id='invalid'></i>" + type;
        newmsgcontainer.classList.add("invalid");
        console.log(newmsgcontainer);
    }
    toastcontainer.appendChild(newmsgcontainer);
    setTimeout(()=>{
        newmsgcontainer.remove()
    },5500);
}