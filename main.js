const date_text = document.querySelector(".date");
const time_bg = document.querySelector(".time_bg");
const time = document.querySelector(".time_");
const slider = document.querySelector(".image-slider");
const images = [
  "/alex-gruber-TQ9dbkr68ew-unsplash.jpg",
  "/marek-piwnicki-uBAgYvI_MKQ-unsplash.jpg",
  "/neom-_jfejQo2tZw-unsplash.jpg",
  "/neom-pyThxd4x8Tk-unsplash.jpg",
  "/neom-urBne08-lTQ-unsplash.jpg",
];
function setDate() {
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const current_date = date.getDate();
  const day = Days[date.getDay()];
  const month = Month[date.getMonth()];
  const year = date.getFullYear();
  date_text.textContent = `${day} ${current_date} ${month}, ${year}`;
}
setDate();
function setTime() {
  setInterval(setTime, 1000);
  const Hours_a_day = 24;
  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = new Date();
  const current_hour = date.getHours();
  const day_passed = (current_hour / Hours_a_day) * 100;
  time_bg.style = `transform: translateX(${day_passed - 100}%)`;
  const format = new Intl.DateTimeFormat("en-In", options);
  time.textContent = format.format(date);
}
setTime();
function addImages() {
  images.forEach((each, idx) => {
    const imgtag = document.createElement("img");
    imgtag.src = each;
    imgtag.setAttribute("class", "slider_image");
    imgtag.setAttribute("data-index", idx);
    slider.prepend(imgtag);
  });
}
addImages();

let nextindex = 0;
function AnimateImage() {
  let currentImage = document.querySelector(
    `[data-index='${nextindex.toString()}']`
  );
  currentImage.style.opacity = 0;
  if (Number(nextindex) < images.length - 1) {
    nextindex++;
    console.log("Next");
  } else {
    nextindex = 0;
  }
  currentImage = document.querySelector(
    `[data-index='${nextindex.toString()}']`
  );
  currentImage.style.opacity = 1;
}
setInterval(() => {
  AnimateImage();
}, 5000);
