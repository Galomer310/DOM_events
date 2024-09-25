// 1
const form = document.getElementById("userForm");
console.log(form);
// 2
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
console.log(fName);
console.log(lName);
// 3
const fNameByName = document.getElementsByName("firstname");
const lNameByName = document.getElementsByName("lastname");
console.log(fNameByName);
console.log(lNameByName);
// 4
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = fName.value.trim();
    const lastName = lName.value.trim();

    if (firstName === '' || lastName === '') {
        alert('please fill in both fileds.');
        return;
    }

    const usersAnswerList = document.querySelector('.usersAnswer');
    const firstNameLi = document.createElement('li');
    const lastNameLi = document.createElement('li');

    firstNameLi.textContent = `First Name: ${firstName}`;
    lastNameLi.textContent = `Last Name: ${lastName}`;

    usersAnswerList.appendChild(firstNameLi);
    usersAnswerList.appendChild(lastNameLi);

    fName.value = ''; 
    lName.value = ''; 
});