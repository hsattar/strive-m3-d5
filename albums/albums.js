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

const songInfo = document.querySelectorAll('.song-info')
songInfo.forEach(song => {
    song.addEventListener('click', e => {
        if (song.classList.contains('selected-song')) {
            song.classList.remove('selected-song')
        }
        const songInformation = e.currentTarget
        songInformation.classList.add('selected-song')
        const songTitle = document.querySelector('.selected-song div:nth-child(2)')
        console.log(songTitle)
    })
})

const albumSongsList = document.querySelector('#albumSongsList')