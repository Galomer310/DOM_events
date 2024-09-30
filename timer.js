function greeting() {
    alert("Hello World"); 
    const para = document.createElement('p');
    const node = document.createTextNode("Hello World!")
    para.appendChild(node);

    const element = document.getElementById('container');
    element.appendChild(para);
}

let count = 0;
const intervalID = setInterval(() => {
    greeting();
    count++;

    // Clear interval after 5 greetings
    if (count === 5) {
        clearInterval(intervalID);
    }
}, 2000);

// Clear interval on button click
document.getElementById("clear").addEventListener("click", () => {
    clearInterval(intervalID);
});
