const searchLandingDisplay = () => {
    const searchEverything = document.querySelector('#search-everything')
    searchEverything.innerHTML = `
    <div class="search-card d-flex" style="background-color: rgb(17, 253, 253);">
    <h4 class="search m-3 d-inline">Podcasts</h4>

    <div class="d-flex cardimg"><img src="/assets/cards/1.jpg"
            class="search-img shadow-lg" alt=""></div>
</div>
 <div class="search-card d-flex" style="background-color: gray;">
    <h4 class="search m-3 d-inline">Lists</h4>

    <div class="d-flex cardimg"><img src="/assets/cards/2.jpg"
            class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: blue;">
<h4 class="search m-3 d-inline">Hits</h4>

<div class="d-flex cardimg"><img src="/assets/cards/3.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(153, 63, 189);">
<h4 class="search m-3 d-inline">New</h4>

<div class="d-flex cardimg"><img src="/assets/cards/4.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(255, 94, 0);">
<h4 class="search m-3 d-inline">Explore</h4>

<div class="d-flex cardimg"><img src="/assets/cards/6.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(18, 54, 20);">
<h4 class="search m-3 d-inline">Concerts</h4>

<div class="d-flex cardimg"><img src="/assets/cards/7.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(167, 167, 64);">
<h4 class="search m-3 d-inline">Pop</h4>

<div class="d-flex cardimg"><img src="/assets/cards/8.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: green;">
<h4 class="search m-3 d-inline">Moods</h4>

<div class="d-flex cardimg"><img src="/assets/cards/9.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(109, 12, 44);">
<h4 class="search m-3 d-inline">Acustic</h4>

<div class="d-flex cardimg"><img src="/assets/cards/10.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: green;">
<h4 class="search m-3 d-inline">Popular</h4>

<div class="d-flex cardimg"><img src="/assets/cards/11.jpg"
        class="search-img shadow-lg" alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(77, 11, 55);">
<h4 class="search m-3 d-inline">Frequency</h4>

<div class="d-flex cardimg"><img src="/assets/cards/12.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(37, 212, 224);">
<h4 class="search m-3 d-inline">Dance</h4>

<div class="d-flex cardimg"><img src="/assets/cards/13.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(19, 5, 80);">
<h4 class="search m-3 d-inline">Gangsta</h4>

<div class="d-flex cardimg"><img src="/assets/cards/14.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(31, 196, 39);">
<h4 class="search m-3 d-inline">Concerts</h4>

<div class="d-flex cardimg"><img src="/assets/cards/15.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(204, 181, 197);">
<h4 class="search m-3 d-inline">Pop</h4>

<div class="d-flex cardimg"><img src="/assets/cards/16.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(211, 243, 32);">
<h4 class="search m-3 d-inline">Moods</h4>

<div class="d-flex cardimg"><img src="/assets/cards/17.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(77, 48, 70);">
<h4 class="search m-3 d-inline">Podcasts</h4>

<div class="d-flex cardimg"><img src="/assets/cards/18.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(77, 48, 70);">
<h4 class="search m-3 d-inline">Punk</h4>

<div class="d-flex cardimg"><img src="/assets/cards/19.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(161, 243, 9);">
<h4 class="search m-3 d-inline">Summer</h4>

<div class="d-flex cardimg"><img src="/assets/cards/20.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(79, 110, 7);">
<h4 class="search m-3 d-inline">Tokio</h4>

<div class="d-flex cardimg"><img src="/assets/cards/21.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(73, 5, 11);">
<h4 class="search m-3 d-inline">Movie</h4>

<div class="d-flex cardimg"><img src="/assets/cards/22.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(18, 54, 20);">
<h4 class="search m-3 d-inline">Pride</h4>

<div class="d-flex cardimg"><img src="/assets/cards/23.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(112, 36, 6);">
<h4 class="search m-3 d-inline">Soul</h4>

<div class="d-flex cardimg"><img src="/assets/cards/24.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(210, 214, 210);">
<h4 class="search m-3 d-inline">Country</h4>

<div class="d-flex cardimg"><img src="/assets/cards/25.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(86, 27, 197);">
<h4 class="search m-3 d-inline">Flamenco</h4>

<div class="d-flex cardimg"><img src="/assets/cards/26.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: gray;">
<h4 class="search m-3 d-inline">Work Out</h4>

<div class="d-flex cardimg"><img src="/assets/cards/27.jpg" class="search-img shadow-lg"
    alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(58, 58, 78);">
<h4 class="search m-3 d-inline">EQAL</h4>

<div class="d-flex cardimg"><img src="/assets/cards/28.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(153, 63, 189);">
<h4 class="search m-3 d-inline">Metal</h4>

<div class="d-flex cardimg"><img src="/assets/cards/29.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(109, 11, 11);">
<h4 class="search m-3 d-inline">Love</h4>

<div class="d-flex cardimg"><img src="/assets/cards/30.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(18, 54, 20);">
<h4 class="search m-3 d-inline">Sleep</h4>

<div class="d-flex cardimg"><img src="/assets/cards/31.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(167, 167, 64);">
<h4 class="search m-3 d-inline">Games</h4>

<div class="d-flex cardimg"><img src="/assets/cards/32.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: green;">
<h4 class="search m-3 d-inline">Family</h4>

<div class="d-flex cardimg"><img src="/assets/cards/33.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(224, 160, 233);">
<h4 class="search m-3 d-inline">Cooking</h4>

<div class="d-flex cardimg"><img src="/assets/cards/34.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(37, 7, 7);">
<h4 class="search m-3 d-inline">Classic</h4>

<div class="d-flex cardimg"><img src="/assets/cards/35.jpg" class="search-img shadow-lg"
alt=""></div>
</div>
<div class="search-card d-flex" style="background-color: rgb(0, 255, 157);">
<h4 class="search m-3 d-inline">Blues</h4>

<div class="d-flex cardimg"><img src="/assets/cards/36.jpg" class="search-img shadow-lg" alt="">
</div>
</div>
<div class="search-card d-flex" style="background-color: rgb(49, 6, 66);">
<h4 class="search m-3 d-inline">Folk</h4>

<div class="d-flex cardimg"><img src="/assets/cards/37.jpg" class="search-img shadow-lg" alt="">
</div>
</div>
<div class="search-card d-flex" style="background-color: rgb(255, 94, 0);">
<h4 class="search m-3 d-inline">LoL</h4>

<div class="d-flex cardimg"><img src="/assets/cards/38.jpg" class="search-img shadow-lg" alt="">
</div>
</div>
<div class="search-card d-flex" style="background-color: rgb(18, 54, 20);">
<h4 class="search m-3 d-inline">RnB</h4>

<div class="d-flex cardimg"><img src="/assets/cards/39.jpg" class="search-img shadow-lg" alt="">
</div>
</div>
<div class="search-card d-flex" style="background-color: rgb(59, 70, 228);">
<h4 class="search m-3 d-inline">Latino</h4>

<div class="d-flex cardimg"><img src="/assets/cards/40.jpg" class="search-img shadow-lg" alt="">
</div>
</div>
<div class="search-card d-flex" style="background-color: rgb(226, 132, 25);">
<h4 class="search m-3 d-inline">Indie</h4>

<div class="d-flex cardimg"><img src="/assets/cards/42.jpg" class="search-img shadow-lg" alt="">
</div>
</div>`
}

searchLandingDisplay()

const searchInput = document.querySelector('#song-search')
const searchBtn = document.querySelector('#search-btn')

window.onload = () => {
    searchInput.focus()
    setTimeout(() => {
        localStorage.clear()
    }, 2000)
}

searchInput.addEventListener('keyup', e => {
    if((searchInput.value.length === 0)) {
        searchLandingDisplay()
    } 
    if (searchInput.value.length > 0) {
        searchBtn.click()
    }
    console.log(searchInput.value.length)
})

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
//work

const searchResults = (data) => {
    let randomTime = Math.random()
    const searchResultsText = document.getElementById('search-results')
    let results = data.data
    searchResultsText.innerHTML = `Showing <b>${results.length}</b> results for <b>${searchInput.value}</b> in <b>${randomTime.toFixed(2)}</b> seconds</b>`
}

const callApi = (query) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        .then(response =>response.json()
        .then(data => {
            searchResults(data)
            displayResults(data)
        }))
        .catch(err => console.error(err))
}

searchBtn.addEventListener('click', () => {
    callApi(searchInput.value)
    searchResults()
    searchInput.value = ''
})

const userQuery = localStorage.getItem('userSearch')
if (userQuery.length > 0) {
    callApi(userQuery)
}