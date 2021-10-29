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




    .then(response => {
    return response.json();
    })
    .then(body => {
        console.log(body);
        let getBody = document.querySelector(".rowBody")
        
        let allInOne  = body.data.map(element => `     fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ummon")

        <div class="row my-2 song-info">
            <div class="col-1 light-gray-text">
            </div>
            <div class="col-8 col-md-7 d-md-flex">
                <img class="artist-song-img mr-2 d-none d-md-block" src="${element.album.cover_medium}">
                <p class="my-0 font-weight-bold">${element.album.title}</p>
            </div>
            <div class="col-1 light-gray-text">
                <p>${element.duration}</p>
            </div>
         </div>
        
        
        
        `).join('')
        getBody.innerHTML = allInOne
        let albumHeaderImg = document.querySelector(".album-header-image")
        albumHeaderImg.style.backgroundImage = `url(${body.data[0].album.cover_xl}) `   
        let getArtistName = document.querySelector(".artist-queen")
        getArtistName.innerText = `${body.data[0].artist.name}`
        let selectImgArtist = document.getElementById("img-Artist")
        selectImgArtist.src = ` ${body.data[0].album.cover_small} `
                                    
    
        let selectPostedByArtist = document.getElementById("posted-ByArtist")
        selectPostedByArtist.innerHTML = `${body.data[0].artist.name}`

        let selectHeader = document.getElementById("bestOfArtist")
        selectHeader.innerHTML = `${body.data[0].artist.name}`
    
    
       
        // console.log(allInOne);
    })    
    

        // let getBody = document.querySelector(".rowBody")








// fetch("https://deezerdevs-deezer.p.rapidapi.com/track/eminem", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "e334965e54msh9ecc20393960d49p17a512jsn57ecf5713172"
// 	}
// })
// .then(response => {
// 	console.log(response.json());
// })
// // .then(data => {
// // 	console.log(data);
// // })
// .catch(err => {
// 	console.error(err);
// });