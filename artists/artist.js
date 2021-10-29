const artistSongs = [
    {
        img: "../assets/cards/1.jpg",
        name: "Another One Bites The Dust - Remastered 2011",
        downloads: "1,013,238,772",
        duration: "3:34",
    },
    {
        img: "../assets/cards/2.jpg",
        name: "Bohenmian Rhapsody - Remastered 2011",
        downloads: "1,497,986258",
        duration: "5:54",
    },
    {
        img: "../assets/cards/3.jpg",
        name: "Don't Stop Me Now - Remastered 2011",
        downloads: "1,063,959,983",
        duration: "3:29",
    },
    {
        img: "../assets/cards/4.jpg",
        name: "Under Pressure - Remastered 2011",
        downloads: "900,225,096",
        duration: "4:08",
    },
    {
        img: "../assets/cards/6.jpg",
        name: "We Will Rock You - Remastered 2011",
        downloads: "705,225,721",
        duration: "2:02",
    }
]


const popularSongsContainer = document.querySelector('#popular-songs-container')
console.log(popularSongsContainer)

for (let i = 0; i < artistSongs.length; i++) {
    const songRow = document.createElement('div')
    songRow.classList.add('col-12')
    songRow.innerHTML = `
    <div class="row my-2 song-info">
                        
        <div class="col-1 light-gray-text">
            <p>${i + 1}</p>
        </div>

        <div class="col-8 col-md-7 d-md-flex">
            <img class="artist-song-img mr-2 d-none d-md-block" src="${artistSongs[i].img}">
            <p class="my-0 font-weight-bold">${artistSongs[i].name}</p>
            <p class="d-md-none">${artistSongs[i].downloads}</p>
        </div>

        <div class="col-1 col-md-3 light-gray-text">
            <p class="d-none d-md-block">${artistSongs[i].downloads}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${artistSongs[i].duration}</p>
        </div>

    </div>`
    popularSongsContainer.appendChild(songRow)
}