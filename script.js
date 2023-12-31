const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";

let rows = 10;

for (let i = 0; i < rows * 3; i++) {
  let img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  console.log(img.src);

  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 5) + 300;
}
