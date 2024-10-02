function myMove() {
    let id = null;
    const element = document.getElementById("animate");
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (position == 350) {
            clearInterval(id);
        } else {
            position++;
            element.style.left = position + "px";
        }
    }
}