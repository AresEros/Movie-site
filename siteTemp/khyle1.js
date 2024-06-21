const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    console.log(mySrc)
    if (mySrc === "./image/catid.jpg") {
        myImage.setAttribute("src", "image/gorrila.jpg");
    } else {
        myImage.setAttribute("src", "images/catid.jpg");
    }
};
