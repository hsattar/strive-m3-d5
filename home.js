const artist1 = document.querySelector('#artist1')
const artist2 = document.querySelector('#artist2')
const artist3 = document.querySelector('#artist3')
const artist4 = document.querySelector('#artist4')

const album1 = document.querySelector('#album1')
const album2 = document.querySelector('#album2')
const album3 = document.querySelector('#album3')
const album4 = document.querySelector('#album4')

const artistContainer1 = document.querySelector('#artistContainer1')
const artistContainer2 = document.querySelector('#artistContainer2')
const artistContainer3 = document.querySelector('#artistContainer3')
const artistContainer4 = document.querySelector('#artistContainer4')

const albumContainer1 = document.querySelector('#albumContainer1')
const albumContainer2 = document.querySelector('#albumContainer2')
const albumContainer3 = document.querySelector('#albumContainer3')
const albumContainer4 = document.querySelector('#albumContainer4')

console.log(artist1)
console.log(album2)
console.log(artistContainer1)
console.log(albumContainer1)

const fetchData = (query) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const displayData = (container, artist) => {
    fetchData(artist)
    .then(artist => container.innerHTML =  `
    <div class="card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img src="${artist.picture_xl}" class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${artist.name}</p>
        </div>
    </div>`
    )
}

const artists1 = ['ariana', 'eminem', 'taylor', 'rhianna', 'queen', 'queen']

artists1.forEach(artist => {
    displayData(artistContainer1, artist)
})