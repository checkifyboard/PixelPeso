
// Optional: Show block number on hover in console
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mouseenter', () => {
    const id = block.getAttribute('id');
    console.log(`Hovering on: ${id}`);
  });
});
