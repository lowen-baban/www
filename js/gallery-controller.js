const myCarouselElement = document.querySelector('#carouselExampleControls')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
  pause:false
})