const { ml5 } = window;
const classifier = ml5.imageClassifier("MobileNet", console.log);
// Use the link below instead of "MobileNet" to turn Seefood into Hotdog or not.
// "https://teachablemachine.withgoogle.com/models/-JrVsmzr/model.json"

const result = document.querySelector(".result h2");
const image = document.querySelector(".image");

async function classifyImage() {
  const results = await classifier.classify(image);
  result.innerText = results[0].label;
}

function handleUpload(files) {
  image.src = URL.createObjectURL(files[0]);
  setTimeout(classifyImage, 50);
}
