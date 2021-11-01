const fetchData = query => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayArtistData(data)
        })
        .catch(error => console.error(error))
}
            
const displayArtistData = (data) => {
    const artistName = document.querySelector('.artist-name')
    const albumHeader = document.querySelector('.album-header-image')
    artistName.innerText = data.name
    albumHeader.style.backgroundImage = `url(${data.picture_xl})`
} 


const albumId = new URLSearchParams(window.location.search).get('album')
fetchData(albumId)