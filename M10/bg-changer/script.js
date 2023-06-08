const colors = ["yellow", "blue", "orange", "red", "pink"];

const container = document.querySelector(".container");

colors.forEach((color) => {
  const element = document.querySelector(`#${color}`);
  element.addEventListener("click", () => {
    document.body.style.background = color;
  });
});

const image = document.querySelector(".image");
const cat = document.querySelector("#cat");
const dog = document.querySelector("#dog");
const catUrl =
  "url('https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=400&h=400&q=75')";
const dogUrl =
  "url('https://www.health.com/thmb/fF-F4tehNc9vNVr98RIfy0nxLXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dogs-pembroke-welsh-corgi-400x400-359aa995d81642adaedf7e0856a1e9d2.jpg')";

cat.addEventListener("click", () => {
  image.style.backgroundImage = catUrl;
});

dog.addEventListener("click", () => {
  image.style.backgroundImage = dogUrl;
});
