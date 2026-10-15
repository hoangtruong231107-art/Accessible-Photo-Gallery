function upDate(previewPic) {
  console.log("upDate event triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const image = document.getElementById("image");
  image.textContent = previewPic.alt;
  image.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
  const image = document.getElementById("image");
  image.style.backgroundImage = "url('')";
  image.textContent = "Hover over an image below to display here.";
}

function addTabindex() {
  console.log("addTabindex event triggered");

  const images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
