// written by chapel1337
// made on 9/15/2022
// took 1 hour and 30 minutes to make because i was trying to make the damn dog picture not go out of view
// turns out it's literally impossible to find actual height and width of the browser
// this is why i hate js

let dogIcon = document.getElementById("icon");

let container = document.getElementById("container");
let containerInfo = container.getBoundingClientRect();

let height = containerInfo.height;
let width = containerInfo.width;

function move()
{
    let randomWidth = Math.floor(Math.random() * width);
    let randomHeight = Math.floor(Math.random() * height);

    dogIcon.style.position = "absolute";
    // dogIcon.style.left = randomWidth + "px";
    // dogIcon.style.top = randomHeight + "px";

    
    var animation = dogIcon.animate([
        { left: randomWidth + "px" },
        { top: randomHeight + "px" }
    ], {
        duration: 1000,
        fill: "forwards"
        
    })

    console.log("moved");
}

setInterval(move, 1500);