const searchInput = document.querySelector('#song-search')
// const searchQuery = searchInput.value
const searchBtn = document.querySelector('#search-btn')

window.onload = () => {
    searchInput.focus()
}

searchInput.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        e.preventDefault()
        searchBtn.click()
    }
})

searchBtn.addEventListener('click', () => {
    callApi()
    searchResults()
    searchInput.value = ''
})

const callApi = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput.value}`)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(`There was an error. Status Code - ${response.status}`)
                    return   
                }
    
                response.json().then(function(data) {
                    console.log(data)
                    searchResults(data)
                    displayResults(data)
                })
            }
        )
    
        .catch(function(err) {
            console.log(`Fetch Error`, err)
        })
}

const searchResults = (data) => {
    let randomTime = Math.random()
    const searchResultsText = document.getElementById('search-results')
    let results = data.data
    searchResultsText.innerHTML = `Showing <b>${results.length}</b> results for <b>${searchInput.value}</b> in <b>${randomTime}</b> seconds</b>`
}

let playPauseBtnClicks = 0
let currentSongTime = 0
let isPaused = false
let secondsPassed = 0

const displayResults = (data) => {
    const resultsContainer = document.getElementById('show-results-container')
    resultsContainer.innerHTML = ''
    let results = data.data
    results.forEach(result => {
        const resultsCard = document.createElement('div')
        resultsCard.className = 'hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2 rounded'
        resultsCard.innerHTML = `   
        <img src="${result.album.cover_small}" class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <div class="buttoncard"></div>
            <p class="hp-subhero-title">Song - ${result.title}</p>
            <p>Album - ${result.album.title}</p>
            <p class="hp-subhero-subtitle mb-0">${result.artist.name}</p>
        </div>`
        resultsContainer.appendChild(resultsCard)
        resultsCard.addEventListener('click', () => {
            currentSongTime = 0
            secondsPassed = 0
            const albumImg = document.getElementById('albumImg')
            const songTitle = document.getElementById('songTitle')
            const songArtist = document.getElementById('songArtist')
            const musicPlay = document.getElementById('musicPlay')
            const playPauseBtn = document.getElementById('playPauseBtn')
            const refresh = document.getElementById('refresh')
            const visibleTime = document.getElementById('visibleTime')
            const trackBar = document.querySelector('.track-bar').style            
            albumImg.setAttribute('src', `${result.album.cover_small}`)
            songTitle.innerText = `${result.title}`
            songArtist.innerText = `${result.artist.name}`
            musicPlay.setAttribute('src', `${result.preview}`)
            playPauseBtn.className = 'bi bi-pause-circle-fill mx-3'
            playPauseBtn.addEventListener('click', () => {
                playPauseBtnClicks++
                if (playPauseBtnClicks % 2 === 0) {
                    musicPlay.play()
                    playPauseBtn.className = 'bi bi-pause-circle-fill mx-3'
                    isPaused = false
                } else {
                    musicPlay.pause()
                    playPauseBtn.className = 'bi bi-play-circle-fill mx-3'
                    isPaused = true
                }
            })
            const updateTrackBar = setInterval(() => {
                if (currentSongTime === 300) {
                    clearInterval(updateTrackBar)
                }
                if (!isPaused) {
                    currentSongTime += 10
                    secondsPassed++
                }
                if (secondsPassed < 10) {
                    visibleTime.innerText = `0:0${secondsPassed}`
                } else {
                    visibleTime.innerText = `0:${secondsPassed}`
                }
                trackBar.setProperty('--songTime', `${currentSongTime}px`)
            }, 1000)
            refresh.addEventListener('click', () => {
                clearInterval(updateTrackBar)
            })      
        })
    })
}


