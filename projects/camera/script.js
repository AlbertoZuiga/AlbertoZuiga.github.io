const video = document.getElementById("video");
const snapButton = document.getElementById("snap");
const errorMessage = document.getElementById("error-message");
const pictures = document.getElementById("pictures");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error("Error al acceder a la cámara: ", err);
    errorMessage.style.display = "block";
  }
}

function takePicture() {
  const download = document.createElement("a");
  const new_canvas = document.createElement("canvas");
  new_canvas.width = (video.offsetWidth - 4) / 3;
  new_canvas.height = (video.offsetHeight - 4) / 3;

  download.href = new_canvas.toDataURL("image/png");
  download.download = "snapshot.png";
  download.appendChild(new_canvas);
  pictures.appendChild(download);

  const context = new_canvas.getContext("2d");
  context.drawImage(video, 0, 0, new_canvas.width, new_canvas.height);
}

snapButton.addEventListener("click", () => {
  takePicture();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") takePicture();
});

startCamera();
