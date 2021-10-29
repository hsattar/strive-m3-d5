const favSongs = [
    {
        title: '20th Century Fox Fanfare',
        artist: 'Queen',
        duration: '0:25'
    },
    {
        title: 'Somebody To Love',
        artist: 'Queen',
        duration: '4:55'
    },
    {
        title: 'Doing All Right - ...Revisited',
        artist: 'Queen',
        duration: '3:16'
    },
    {
        title: 'Keep Yourself Alive - Live At The Rainbow',
        artist: 'Queen',
        duration: '3:56'
    },
    {
        title: 'Killer Queen',
        artist: 'Queen',
        duration: '2:59'
    },
    {
        title: 'Fat Bottomed Girls - Live In Paris',
        artist: 'Queen',
        duration: '4:37'
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: '5:54'
    },
    {
        title: 'Now I\'m here - Live At The Hammersmith Odeon',
        artist: 'Queen',
        duration: '4:25'
    },
    {
        title: 'Crazy Little Thing Called Love',
        artist: 'Queen',
        duration: '2:43'
    }    
]

const favouriteSongsContainer = document.querySelector('#favourite-songs-container')

for (let i = 0; i < favSongs.length; i++) {
    const songRow = document.createElement('div')
    songRow.innerHTML = `
    <div class="row song-info mb-3">
                    
        <div class="col-1 num-order light-gray-text">
            <p>${i + 1}</p>
        </div>

        <div class="col-1 list-song-img">
        <img src="../assets/cards/${i+1}.jpg" class="img-fluid rounded">
        </div>

        <div class="col-9 ">
            <p class="my-0 font-weight-bold">${favSongs[i].title}</p>
            <p class="mt-0 mb-2 smaller-text light-gray-text">${favSongs[i].artist}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${favSongs[i].duration}</p>
        </div>
    
    </div>`
    favouriteSongsContainer.appendChild(songRow)
}

let btnRock = document.getElementById("rock")
let btnUnderground = document.getElementById("underground")
let btnREB = document.getElementById("r&b")
let btnJazz = document.getElementById("jazz")
let btnModern = document.getElementById("modern")

let rockSection = document.getElementById("rockStyle")
let underSection = document.getElementById("undergroundStyle")
let rebSection = document.getElementById("rebStyle")
let jazzSection = document.getElementById("jazzStyle")
let modernSection = document.getElementById("modernStyle")



btnRock.addEventListener("click", function() {
    rockSection.classList.toggle("displaynone")
})

btnREB.addEventListener("click", function() {
    rebSection.classList.toggle("displaynone")

})
btnUnderground.addEventListener("click", function() {
    underSection.classList.toggle("displaynone")

})
btnJazz.addEventListener("click", function() {
    jazzSection.classList.toggle("displaynone")

})
btnModern.addEventListener("click", function() {
    modernSection.classList.toggle("displaynone")
})

let heartIcons = document.querySelectorAll("i")

heartIcons.forEach(element => {
    element.addEventListener("click", function(e) {

        if (element.classList.contains("bi-heart")) { //if the preferred heart is false
            element.classList.remove("bi-heart"); //  we change class of heart
            element.classList.add("bi-heart-fill") // ==========================
            let likedSong = this.previousElementSibling; // here we select the favourite song and his content
            let selectedElement = likedSong.innerHTML; //==============================================
            favSongs.push(selectedElement) // here we add the son at the array of favourite song reay to be show

        } else if (!element.classList.contains("bi-heart")) {
            element.classList.remove("bi-heart-fill"); //if the preferred heart is true
            element.classList.add("bi-heart") //  we change class of heart
            let likedSong = this.previousElementSibling; // here we select the favourite song and his content
            let selectedElement = likedSong.innerHTML; //==============================================
            let index = favSongs.indexOf(selectedElement) // here we check if the song is into the array
            if (index >= 0) { // if it's true
                favSongs.splice(index) // we delete the song
            }
        }

    })
}); // end function add event listener