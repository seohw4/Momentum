const images = ["img4.jpg", "img5.jpg", "img6.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const container = document.querySelector(".container");
container.style.backgroundImage = `url(img/${chosenImage})`;
