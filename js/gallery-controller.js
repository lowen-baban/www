document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.getElementById('carouselInner');

  const totalImages = 10; // Total number of images
  const folderPath = 'assets/photos/';

  for (let i = 1; i <= totalImages; i++) {
    const div = document.createElement('div');
    div.className = 'carousel-item' + (i === 1 ? ' active' : '');
    div.innerHTML = `
      <img src="${folderPath}${i}.jpeg" class="d-block w-100" alt="Image ${i}">
    `;
    carouselInner.appendChild(div);
  }
});