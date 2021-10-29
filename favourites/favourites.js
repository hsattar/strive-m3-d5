const heart = document.querySelector('.bi-heart')
let heartClicks = 0
heart.addEventListener('click', () => {
    if (heartClicks % 2 === 0) {
        heart.className = 'bi bi-heart-fill'
        heart.style.color = 'red'
    } else {
        heart.className = 'bi bi-heart'
        heart.style = 'lightgrey'
    }
    heartClicks++
})
