window.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block img");
  const counterElement = document.getElementById("ad-counter");

  const totalBlocks = blocks.length;
  let occupied = 0;

  blocks.forEach(img => {
    if (!img.src.includes("blank.png")) {
      occupied++;
    }
  });

  if (counterElement) {
    counterElement.textContent = `${occupied} / ${totalBlocks} ads occupied`;
  }
});
