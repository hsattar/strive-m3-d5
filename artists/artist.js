const fetchData = query => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
        .then(response => response.json())
        .then(data => displayArtistData(data))
        .catch(error => console.error(error))
}
            
const displayArtistData = data => {
    const artistName = document.querySelector('.artist-name')
    const albumHeader = document.querySelector('.album-header-image')
    artistName.innerText = data.name
    albumHeader.style.backgroundImage = `url(${data.picture_xl})`
    fetchArtistSongs(data)
} 

const fetchArtistSongs = data => {
    fetch(`${data.tracklist}`)
    .then(response => response.json())
    .then(songs => displayArtistSongs(songs))
    .catch(error => console.error(error))
}

const displayArtistSongs = songs => {
    const popSongsList = document.querySelector('#popSongsList')
    console.log(songs.data)
    popSongsList.innerHTML = songs.data.map(song => `
    <div class="row song-info my-2">

        <div class="col-11">
            <p class="my-0 font-weight-bold">${song.title}</p>
            <p class="mt-0 mb-2 smaller-text light-gray-text">${song.album.title}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${song.duration}</p>
        </div>
    
    </div>`).join('')
}


const artistId = new URLSearchParams(window.location.search).get('artist')
if (artistId !== null) fetchData(artistId)
if (artistId === null) fetchData(12246)