const canvas = document.getElementById("canvas");
canvas.width = "600";
canvas.height = "400";
const img = new Image();

img.onload = function onLoad() {
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 600, 400);
};

img.src = "./emily_blunt.jpg";

// const ctx = canvas.drawImage();
