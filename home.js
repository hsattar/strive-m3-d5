// const artist1 = document.querySelector('#artist1')
// const artist2 = document.querySelector('#artist2')
// const artist3 = document.querySelector('#artist3')
// const artist4 = document.querySelector('#artist4')
// const album1 = document.querySelector('#album1')
// const album2 = document.querySelector('#album2')
// const album3 = document.querySelector('#album3')
// const album4 = document.querySelector('#album4')

const artistContainer1 = document.querySelector('#artistContainer1')
const artistContainer2 = document.querySelector('#artistContainer2')
const artistContainer3 = document.querySelector('#artistContainer3')
const artistContainer4 = document.querySelector('#artistContainer4')

const albumContainer1 = document.querySelector('#albumContainer1')
const albumContainer2 = document.querySelector('#albumContainer2')
const albumContainer3 = document.querySelector('#albumContainer3')
const albumContainer4 = document.querySelector('#albumContainer4')

const fetchData = (query) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const fetchData2 = (query) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const displayData = (container, artist) => {
    fetchData(artist)
    .then(artist => container.innerHTML +=  `
    <div class="card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img src="${artist.picture_xl}" class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${artist.name}</p>
        </div>
    </div>`
    )
}

const displayData2 = (container, album) => {
    fetchData2(album)
    .then(album => container.innerHTML +=  `
    <div class="card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img src="${album.cover_xl}" class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${album.title}</p>
        </div>
    </div>`
    )
}

const artists = [
    ['1562681', '13', '12246', '246791', '564'],
    ['12178', '5306539', '4104927', '1188', '384236'],
    ['9507694', '9236850', '4794268', '8706544', '12088868'],
    ['293585', '75798', '11152580', '429675', '145']
]

artists[0].forEach(artist => {
    displayData(artistContainer1, artist)
})

artists[1].forEach(artist => {
    displayData(artistContainer2, artist)
})

artists[2].forEach(artist => {
    displayData(artistContainer3, artist)
})

artists[3].forEach(artist => {
    displayData(artistContainer4, artist)
})

// for (let i = 0; i < artists.length; i++) {
//     artists[i].forEach(artist => {
//         displayData(`artistContainer${i}`, artist)
//     })
// }

const albums = [
    ['86773062', '104188', '9007781', '69319552', '119606'],
    ['11848922', '8990105', '15478674', '3791241', '13680908'],
    ['14400090', '267291462', '182811182', '119043862', '41728321'],
    ['9188269', '746059', '244223', '739505', '231552772']
]

albums[0].forEach(album => {
    displayData2(albumContainer1, album)
})

albums[1].forEach(album => {
    displayData2(albumContainer2, album)
})

albums[2].forEach(album => {
    displayData2(albumContainer3, album)
})

albums[3].forEach(album => {
    displayData2(albumContainer4, album)
})