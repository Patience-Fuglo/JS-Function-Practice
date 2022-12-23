// Your Code Here
const images = [
  './assets/images/1.jpg',
  './assets/images/2.jpg',
  './assets/images/3.jpg',
  './assets/images/4.jpg',
  './assets/images/5.jpg',
  './assets/images/6.jpg'
]


const image = document.querySelector('.image')
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const bubbleButtons = document.querySelectorAll('.bubble')

let currentImageIndex = 0
image.src = images[currentImageIndex]
bubbleButtons[currentImageIndex].textContent = '●'

for (let i = 0; i < bubbleButtons.length; i++) {
  bubbleButtons[i].addEventListener('click', function (e) {
      currentImageIndex = i;
      image.src = images[currentImageIndex]
      for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
      bubbleButtons[currentImageIndex].textContent = '●'
  })
}

previousButton.addEventListener('click', function () {
  if (currentImageIndex > 0) currentImageIndex--
  image.src = images[currentImageIndex]
  for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
  bubbleButtons[currentImageIndex].textContent = '●'
})

nextButton.addEventListener('click', function () {
  if (currentImageIndex < 5) currentImageIndex++
  image.src = images[currentImageIndex]
  for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
  bubbleButtons[currentImageIndex].textContent = '●'
})