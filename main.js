window.addEventListener('scroll', reveal);
window.addEventListener('scroll', show);
const pre = document.querySelector("pre");

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function show(){
    var shows = document.querySelectorAll('.show');
    for (var a = 0; a < shows.length; a++){
        var winheight = window.innerHeight;
        var showtop = shows[a].getBoundingClientRect().top;
        var showpoint = 150;
        if(showtop < winheight - showpoint){
            shows[a].classList.add('now');
        }
        else{
            shows[a].classList.remove('now');
        }
    }
}

document.addEventListener("mousemove", (e) =>{
    rotateElement(e, pre)
});

function rotateElement(event, element){
    //Mouse position tracker
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)

    //find the pre
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    //get offset from middle
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}