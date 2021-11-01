fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ckay")
    .then(response => {
    return response.json();
    })
    .then(body => {
        console.log(body);
        let getBody = document.querySelector(".rowBody")

        let allInOne  = body.data.map(element => `

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



    })
