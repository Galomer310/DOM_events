function greeting() {
    const para = document.createElement('p');
    const node = document.createTextNode("Hello World!");
    para.appendChild(node);

    const element = document.getElementById('container');
    element.appendChild(para);
}

let count = 0;
const intervalID = setInterval(() => {
    greeting();
    count++;

    if (count === 5) {
        clearInterval(intervalID);
        clearParagraphs();
    }
}, 2000);

function clearParagraphs() {
    const container = document.getElementById('container');
    container.innerHTML = ''; 
    count = 0; 
}

document.getElementById("clear").addEventListener("click", () => {
    clearInterval(intervalID);
    clearParagraphs();
});
