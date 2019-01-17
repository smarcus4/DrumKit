


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stops the function from running
    audio.currentTime=0; //rewinds the audio clip so it allows us to play the audio quickly
    audio.play();
    key.classList.add("playing")
};

function removeTransition(event){
if(event.propertyName !== "transform") return; //skip it if there is no transform
this.classList.remove("playing");

}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))



window.addEventListener("keydown", playSound)

console.log(playSound);







// window.addEventListener("keyup", (e)=>{
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     key.classList.remove("playing");
// })
