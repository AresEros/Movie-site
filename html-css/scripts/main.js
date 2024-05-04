const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    console.log(mySrc)
    if (mySrc === "./image/wolf.jpg") {
        myImage.setAttribute("src", "image/gorrila.jpg");
    } else {
        myImage.setAttribute("src", "images/wolf.jpg");
    }
};

// Calling ID
/*const money = document.getElementById("money")
money.innerHTML = "hello Javascript"
money.style.color = "blue"
money.style.fontSize = "200px"
money.style.display = "none"*/

document.querySelector("h1").addEventListener('click', () => {
    const money = document.getElementById("money")
    money.innerHTML = "hello Javascript"
    money.style.color = "blue"
    //money.style.fontSize = "200px"
    //money.style.display = "none"
})

// Calling by class
//const mon = document.getElementsByClassName("mon")

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'khyle is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'khyle is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


