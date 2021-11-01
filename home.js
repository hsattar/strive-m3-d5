const artistContainer1 = document.querySelector('#artistContainer1')
const artistContainer2 = document.querySelector('#artistContainer2')
const artistContainer3 = document.querySelector('#artistContainer3')
const artistContainer4 = document.querySelector('#artistContainer4')
const albumContainer1 = document.querySelector('#albumContainer1')
const albumContainer2 = document.querySelector('#albumContainer2')
const albumContainer3 = document.querySelector('#albumContainer3')
const albumContainer4 = document.querySelector('#albumContainer4')

const fetchData = (queryType, query) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const displayData = (container, queryType, query) => {
    if (queryType === 'artist') {
        fetchData(queryType, query)
        .then(query => container.innerHTML +=  `
        <div class="card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <a href="./artists/artists.html?album=${query.id}">
                <img src="${query.picture_xl}" class="card-img-top pt-2 img-fluid" alt="...">
                <div class="card-body">
                    <p class="hp-subhero-title">${query.name}</p>
                </div>
            </a>
        </div>`
        )
    }
    if (queryType === 'album') {
        fetchData(queryType, query)
        .then(query => container.innerHTML +=  `
        <div class="card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img src="${query.cover_xl}" class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${query.title}</p>
        </div>
    </div>`
        )
    }
}

const artists = [
    ['1562681', '13', '12246', '246791', '564'],
    ['12178', '5306539', '4104927', '1188', '384236'],
    ['9507694', '9236850', '4794268', '8706544', '12088868'],
    ['293585', '75798', '11152580', '429675', '145']
]

const artistContainers = [artistContainer1, artistContainer2, artistContainer3, artistContainer4]

for (let i = 0; i < artistContainers.length; i++) {
    artists[i].forEach(artist => {
        displayData(artistContainers[i], 'artist', artist)
    })
}

const albums = [
    ['86773062', '104188', '9007781', '69319552', '119606'],
    ['11848922', '8990105', '15478674', '3791241', '13680908'],
    ['14400090', '267291462', '182811182', '119043862', '41728321'],
    ['9188269', '746059', '244223', '739505', '231552772']
]

const albumContainers = [albumContainer1, albumContainer2, albumContainer3, albumContainer4]

for (let i = 0; i < albumContainers.length; i++) {
    albums[i].forEach(album => {
        displayData(albumContainers[i], 'album', album)
    })
}

let searchQuery = ''

const songSearch = document.querySelector('#song-search')
songSearch.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        window.location.href = 'http://127.0.0.1:5500/search/search.html'
        searchQuery = songSearch.value
        localStorage.setItem('userSearch', searchQuery)
    }
})