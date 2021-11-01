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

const fetchAlbum = query => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`)
    .then(response => response.json())
    .then(album => displayAlbum(album))
    .catch(error => console.error(error))
}

const displayAlbum = album => {
    console.log(album)
    const albumCover = document.querySelector('.album-cover')
    const albumTitle = document.querySelector('.album-title')
    const albumArtist = document.querySelector('.album-artist')
    const albumYear = document.querySelector('.album-year')
    const albumLength = document.querySelector('.album-length')
    const albumDuration = document.querySelector('.album-duration')
    const albumSongsList = document.querySelector('#albumSongsList')
    albumCover.src = `${album.cover_xl}`
    albumTitle.innerText = `${album.title}`
    albumArtist.innerText = `${album.artist.name}`
    albumYear.innerText = `${album.release_date}`
    albumLength.innerText = `${album.nb_tracks} songs`
    albumDuration.innerText = `${album.duration}`
    albumSongsList.innerHTML = album.tracks.data.map(album => `
    <div class="row song-info my-2">

        <div class="col-11">
            <p class="my-0 font-weight-bold">${album.title}</p>
            <p class="mt-0 mb-2 smaller-text light-gray-text">${album.artist.name}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${album.duration}</p>
        </div>
    
    </div>`).join('')
}

const albumId = new URLSearchParams(window.location.search).get('album')
if (albumId !== null) fetchAlbum(albumId)
if (albumId === null) fetchAlbum(15478674)