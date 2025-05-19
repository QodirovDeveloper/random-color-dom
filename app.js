// ! _________________________
// ! bg images

const images = ["url('/images/Syorfing.jpg')", "url('/images/wewe.jpg')"];
const randomIndex = Math.floor(Math.random() * images.length);
const randomBg = images[randomIndex];
document.getElementById("body").style.backgroundImage = randomBg;

// ! _________________________
// ! ul
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colors.length);
    color += colors[index];
  }
  return color;
}
const liElements = document.querySelectorAll("li");
liElements.forEach((li) => {
  li.style.color = randomColor();
});

// ! _________________________
// ! boxes
function randomColor2() {
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    const index = Math.floor(Math.random() * colors.length);
    color += colors[index];
  }
  return color;
}
const boxElements = document.querySelectorAll(".boxes");
boxElements.forEach((boxes) => {
  boxes.style.backgroundColor = randomColor();
});
// ! _________________________
// ! boxes content text
function randomColor3() {
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    const index = Math.round(Math.random() * colors.length);
    color += colors[index];
  }
  return color;
}
const contentColor = document.querySelectorAll(".boxes");
contentColor.forEach((content) => {
  content.style.color = randomColor3();
});

// ! _________________________
// ! click me

const tailwindRanglar = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-400",
  "bg-purple-500",
  "bg-orange-400",
];

const qutilar = document.querySelectorAll(".clickMe");

qutilar.forEach((quti) => {
  quti.addEventListener("click", () => {
    tailwindRanglar.forEach((rang) => quti.classList.remove(rang));

    const tasodifiyRang =
      tailwindRanglar[Math.floor(Math.random() * tailwindRanglar.length)];
    quti.classList.add(tasodifiyRang, "text-white");
  });
});