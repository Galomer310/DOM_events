// 🌟 Exercise 1 : Change the article
// 1
const header = document.getElementsByTagName("h1")[0];
console.log(header);
// 2
const lastPElement = document.getElementsByTagName("p")[3];
lastPElement.remove();

const h2Element = document.getElementsByTagName("h2")[0];
h2Element.addEventListener("click", function() {
    h2Element.style.color = "red";
})

const h3Element = document.getElementsByTagName("h3")[0];
h3Element.addEventListener("click", function() {
    h3Element.style.display = "none";
})

const button = document.getElementsByTagName('button')[0];

button.addEventListener("click", function() {
    var pElements = document.getElementsByTagName("p");

    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.fontWeight = "bold";
    }
});