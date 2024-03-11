const images = ["img4.jpg", "img2.jpeg", "img3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const container = document.querySelector(".container");
container.style.backgroundImage = `url(img/${chosenImage})`;
