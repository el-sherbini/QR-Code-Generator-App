const container = document.querySelector(".container"),
  qrInput = container.querySelector(".form input"),
  generateQrBtn = container.querySelector(".form button"),
  qrImg = container.querySelector(".qr-code img");
let preValue;

generateQrBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateQrBtn.innerText = "Generating QR Code...";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    container.classList.add("active");
    generateQrBtn.innerText = "Generate QR Code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    container.classList.remove("active");
    preValue = "";
  }
});
