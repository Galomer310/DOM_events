// 1
let allBoldItems;

function getBoldItems() {
  const paragraph = document.querySelector('p'); 
  allBoldItems = paragraph.getElementsByTagName('strong');
}

getBoldItems();
console.log(allBoldItems);

function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "green"; 
  }
}

function returnItemsToDefault() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black"; 
  }    
}

function mouseOver() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].addEventListener('mouseover', highlight);
  }
}

function mouseOut() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].addEventListener('mouseout', returnItemsToDefault);
  }
}

mouseOver();
mouseOut();
