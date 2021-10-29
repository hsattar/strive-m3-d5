let darkTheme = false;

const root = document.documentElement
const themeToggle = document.querySelector('#toggle-theme')

const toggleTheme = () => {

    if (darkTheme) {
        root.style.setProperty('--black', '#000')
        root.style.setProperty('--light-black', '#2a2a2a')
        root.style.setProperty('--dark-black', '#121212')
        root.style.setProperty('--light-gray', '#b3b3b3')
        root.style.setProperty('--white', '#fff')
        root.style.setProperty('--dark-gray', '#727272')
        root.style.setProperty('--sidebar-text-color', '#a0a0a0')
        root.style.setProperty('--card-wrapper-bg', '#5554545e')
        root.style.setProperty('--recently-played', '#3e3e3e')
        root.style.setProperty('--good-morning', '#3c0908')
        root.style.setProperty('--sidebar-selected', '#b3b3b3')
        root.style.setProperty('--sidebar-other', '#b3b3b3')
        root.style.setProperty('--sidebar-other-hover', '#fff')
        darkTheme = false
    } else {
        root.style.setProperty('--black', '#fff')
        root.style.setProperty('--light-black', '#b3b3b3')
        root.style.setProperty('--dark-black', '#b3b3b3')
        root.style.setProperty('--light-gray', '#000')
        root.style.setProperty('--white', '#000')
        root.style.setProperty('--dark-gray', '#5e5d5d')
        root.style.setProperty('--sidebar-text-color', '#2e2e2e')
        root.style.setProperty('--card-wrapper-bg', '#b3b3b3')
        root.style.setProperty('--recently-played', '#b3b3b3')
        root.style.setProperty('--good-morning', '#fff')
        root.style.setProperty('--sidebar-selected', '#727272')
        root.style.setProperty('--sidebar-other', '#2a2a2a')
        root.style.setProperty('--sidebar-other-hover', '#000')
        darkTheme = true
    }
}


// window.onload = () => {
//     toggleTheme()
// }

themeToggle.onclick = () => {
    toggleTheme()
}

const goodMorningCards = [
    {
        img: './assets/cards/9.jpg',
        title: 'Song 1'
    },
    {
        img: './assets/cards/10.jpg',
        title: 'Song 2'
    },
    {
        img: './assets/cards/11.jpg',
        title: 'Song 3'
    },
    {
        img: './assets/cards/12.jpg',
        title: 'Song 4'
    },
    {
        img: './assets/cards/13.jpg',
        title: 'Song 5'
    },
    {
        img: './assets/cards/14.jpg',
        title: 'Song 6'
    },
    {
        img: './assets/cards/15.jpg',
        title: 'Song 7'
    },
    {
        img: './assets/cards/16.jpg',
        title: 'Song 8'
    },
    {
        img: './assets/cards/17.jpg',
        title: 'Song 9'
    },
    {
        img: './assets/cards/18.jpg',
        title: 'Song 10'
    },
    {
        img: './assets/cards/19.jpg',
        title: 'Song 11'
    },

    {
        img: './assets/cards/20.jpg',
        title: 'Song 12'
    },

]

const goodMorningContainer = document.querySelector('.good-morning-container')
goodMorningCards.forEach(card => {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'col-6 col-md-4 col-lg-3 d-flex align-items-center'
    cardContainer.innerHTML = `
    <div class="card-wrapper d-flex my-2 align-items-center rounded">
        <img cla src="${card.img}">
        <p class="ml-3 mb-0">${card.title}</p>
    </div>`
    goodMorningContainer.appendChild(cardContainer)
})

const recentlyPlayed = [
    './assets/cards/1.jpg',
    './assets/cards/2.jpg',
    './assets/cards/3.jpg',
    './assets/cards/4.jpg',
    './assets/cards/5.jpg',
    './assets/cards/6.jpg',
]

const showsToTry = [
    './assets/cards/7.jpg',
    './assets/cards/8.jpg',
    './assets/cards/9.jpg',
    './assets/cards/10.jpg',
    './assets/cards/11.jpg',
    './assets/cards/12.jpg',
]

const moreWhatYouLike = [
    './assets/cards/13.jpg',
    './assets/cards/14.jpg',
    './assets/cards/15.jpg',
    './assets/cards/16.jpg',
    './assets/cards/17.jpg',
    './assets/cards/18.jpg',
]

const hits = [
    './assets/cards/19.jpg',
    './assets/cards/20.jpg',
    './assets/cards/21.jpg',
    './assets/cards/22.jpg',
    './assets/cards/23.jpg',
    './assets/cards/24.jpg',
]

const bestOf2020 = [
    './assets/cards/25.jpg',
    './assets/cards/26.jpg',
    './assets/cards/27.jpg',
    './assets/cards/28.jpg',
    './assets/cards/29.jpg',
    './assets/cards/30.jpg',
]

const jumpBack = [
    './assets/cards/31.jpg',
    './assets/cards/32.jpg',
    './assets/cards/33.jpg',
    './assets/cards/34.jpg',
    './assets/cards/35.jpg',
    './assets/cards/36.jpg',
]

const fansOfSanah = [
    './assets/cards/1.jpg',
    './assets/cards/2.jpg',
    './assets/cards/3.jpg',
    './assets/cards/4.jpg',
    './assets/cards/5.jpg',
    './assets/cards/6.jpg',
]

const recentlyPlayedSection = document.querySelector('#recently-played-section')
recentlyPlayed.forEach(song => {
    const recentlyPlayedSongs = document.createElement('div')
    recentlyPlayedSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    recentlyPlayedSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="buttoncard"></div>
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    recentlyPlayedSection.appendChild(recentlyPlayedSongs)
})

const showsToTrySection = document.querySelector('#shows-to-try')
showsToTry.forEach(song => {
    const showsToTrySongs = document.createElement('div')
    showsToTrySongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    showsToTrySongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    showsToTrySection.appendChild(showsToTrySongs)
})

const moreWhatYouLikeSection = document.querySelector('#more-what-you-like')
moreWhatYouLike.forEach(song => {
    const whatYouLikeSongs = document.createElement('div')
    whatYouLikeSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    whatYouLikeSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="buttoncard"></div>
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    moreWhatYouLikeSection.appendChild(whatYouLikeSongs)
})

const hitsContainer = document.querySelector('#hits-container')
hits.forEach(song => {
    const hitsSongs = document.createElement('div')
    hitsSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    hitsSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    hitsContainer.appendChild(hitsSongs)
})

const bestOf2020Container = document.querySelector('#best-of-2020')
bestOf2020.forEach(song => {
    const hitsSongs = document.createElement('div')
    hitsSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    hitsSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="buttoncard"></div>
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    bestOf2020Container.appendChild(hitsSongs)
})

const jumpInContainer = document.querySelector('#jump-in-container')
jumpBack.forEach(song => {
    const jumpBackSongs = document.createElement('div')
    jumpBackSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    jumpBackSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    jumpInContainer.appendChild(jumpBackSongs)
})

const sanahFansContainer = document.querySelector('#sanah-fans-container')
fansOfSanah.forEach(song => {
    const sanahFansSongs = document.createElement('div')
    sanahFansSongs.className = 'card hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    sanahFansSongs.innerHTML = `
    <img src="${song}" class="card-img-top pt-2 img-fluid" alt="...">
    <div class="card-body">
        <p class="hp-subhero-title">Purple Rain</p>
        <p class="hp-subhero-subtitle">Another song from my soul</p>
    </div>`
    sanahFansContainer.appendChild(sanahFansSongs)
})

const favouriteSongs = [
    {
        name: '',
        duration: ''
    },
    
]

const setTimeForGoodMorning = function(){
    let myDate = new Date();   /* hour is before noon */ 
        if (myDate.getHours() < 12 )  { 
        document.getElementById('good-morning-h3').innerHTML ="Good Morning!";
        }else if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) {     /* hour is after noon */ 
          document.getElementById('good-morning-h3').innerHTML ="Good Afternoon!";
        }else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ){     
          document.getElementById('good-morning-h3').innerHTML= "Good Evening!"; /* hour is in the evening */ 
        } else{     
          document.getElementById('good-morning-h3').innerHTML="I am so DUMB to calculate the current time!"; 
        }
}
setTimeForGoodMorning()



let audioElement = document.querySelector('.audio-play')

let playButton = document.querySelector('.music-play-btn');
let pauseButton = document.querySelector('.music-pause-btn');

playButton.addEventListener("click", handlePlayButton, false);
pauseButton.addEventListener("click", handlePlayButton, false)
pauseButton.style.display = "none";
async function playAudio(){
  try {
    await audioElement.play();
    // playButton.classList.remove("bi bi-play-circle-fill");
  } catch(err) {
    // playButton.classList.remove("bi bi-play-circle-fill");
  }
}

function handlePlayButton() {
  if (audioElement.paused) {
    playAudio();
    pauseButton.style.display = "block";  
    playButton.style.display = "none"
  } else {
    audioElement.pause();
    playButton.style.display = "block"
    pauseButton.style.display = "none";  
  }
}
