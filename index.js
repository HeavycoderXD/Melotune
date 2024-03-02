const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    
//Song 1
    {
        path: 'assets/1.mp3',
        displayName: '1. Locked Away Mashup 💌',
        cover: 'assets/1.jpg',
        artist: 'Sush & Yohan x Aaron Aamir',
    },

//Song 2
    {
        path: 'assets/2.mp3',
        displayName: '2. Barso Re 💧 ',
        cover: 'assets/2.jpg',
        artist: 'Shreya Ghoshal',
    },

//Song 3
{
    path: 'assets/3.mp3',
    displayName: '3. O Maahi 💞',
    cover: 'assets/3.jpg',
    artist: 'Arijit Singh',
},

//Song 4
{
    path: 'assets/4.mp3',
    displayName: '4. Maharani 👸🏻 ',
    cover: 'assets/4.jpg',
    artist: 'Karun X Arpit Bala',
},

//Song 5
{
    path: 'assets/5.mp3',
    displayName: '5. Paisa Hai Toh 🤑 ',
    cover: 'assets/5.jpg',
    artist: 'Vishal Dadlani X Sachin-Jigar',
},

//Song 6
{
    path: 'assets/6.mp3',
    displayName: '6. Dil Cheez Tujhe Dedi 🎷',
    cover: 'assets/6.jpg',
    artist: 'Arijit Singh X Ankit Tiwari',
},

//Song 7
{
path: 'assets/7.mp3',
displayName: '7. Chaleya 🏃',
cover: 'assets/7.jpg',
artist: 'Arijit Singh & Shilpa Rao',
},

//Song 8
{
path: 'assets/8.mp3',
displayName: '8. Main Agar Kahoon 👩‍❤️‍👨 ',
cover: 'assets/8.jpg',
artist: 'Shreya Ghoshal X Sonu Nigam',
},

//Song 9
{
    path: 'assets/9.mp3',
    displayName: '9. Kalaastaar 😎 ',
    cover: 'assets/9.jpg',
    artist: 'Yo Yo Honey Singh',
},

//Song 10
{
    path: 'assets/10.mp3',
    displayName: '10. Too Many Nights 🌌',
    cover: 'assets/10.jpg',
    artist: 'Metro Boomin X Don Toliver',
},

//Song 11
{
path: 'assets/11.mp3',
displayName: '11. Broken Angel 🙈',
cover: 'assets/11.jpg',
artist: 'Arash X Helena',
},

//Song 12
{
path: 'assets/12.mp3',
displayName: '12. Raanjhana 👫 ',
cover: 'assets/12.jpg',
artist: 'Jaswinder Singh X Shiraz Uppal',
},

//Song 13
{
    path: 'assets/13.mp3',
    displayName: '13. Desi Desi 🤴🏻',
    cover: 'assets/13.jpg',
    artist: 'Raju Punjabi',
},

//Song 14
{
    path: 'assets/14.mp3',
    displayName: '14. Yaar Purane 🌍 ',
    cover: 'assets/14.jpg',
    artist: 'Sumit Goswami',
},

//Song 15
{
path: 'assets/15.mp3',
displayName: '15. Baarishein X Locked Away 🌊',
cover: 'assets/15.jpg',
artist: 'Anuv Jain X Adam Levine ',
},

//Song 16
{
path: 'assets/16.mp3',
displayName: '16. Gang Up 🔫 ',
cover: 'assets/16.jpg',
artist: 'Young Thug, 2 Chainz X Wiz Khalifa',
},

//Song 17
{
    path: 'assets/17.mp3',
    displayName: '17. Sapno Ki Raani 👰',
    cover: 'assets/17.jpg',
    artist: 'Kishore Kumar X Roddy Rich ',
},

//Song 18
{
    path: 'assets/18.mp3',
    displayName: '18. Saudebaazi 🕺',
    cover: 'assets/18.jpg',
    artist: 'Anupam Amod',
},

//Song 19
{
path: 'assets/19.mp3',
displayName: '19. Afghan Jalebi 🤤',
cover: 'assets/19.jpg',
artist: 'Asrar',
},

//Song 20
{
path: 'assets/20.mp3',
displayName: '20. One Love 💘 ',
cover: 'assets/20.jpg',
artist: 'Shubh',
},

//Song 21
{
    path: 'assets/21.mp3',
    displayName: '21. Despacito 🍾 ',
    cover: 'assets/21.jpg',
    artist: 'Luis Fonsi X Daddy Yankee',
},

//Song 22
{
    path: 'assets/22.mp3',
    displayName: '22. Janam Janam 🎭 ',
    cover: 'assets/22.jpg',
    artist: 'Arijit Singh X Antara Mitra',
},

//Song 23
{
path: 'assets/23.mp3',
displayName: '23. Babam Bam 🕉🛐',
cover: 'assets/23.jpg',
artist: 'Paradox',
},

//Song 24
{
path: 'assets/24.mp3',
displayName: '24. Danza Kuduro 🚗',
cover: 'assets/24.jpg',
artist: 'Don Omar X Lucenzo',
},

//Song 25
{
path: 'assets/25.mp3',
displayName: '25. Na Na Na Naa 😓',
cover: 'assets/25.jpg',
artist: 'J Star',
},

//Song 26
{
path: 'assets/26.mp3',
displayName: '26. High Rated Gabru 💪 ',
cover: 'assets/26.jpg',
artist: 'Guru Randhawa',
},

//Song 27
{
path: 'assets/27.mp3',
displayName: '27. No Love X Tigini 🚯 ',
cover: 'assets/27.jpg',
artist: 'Shubh x Kikimoteleba',
},

//Song 28
{
path: 'assets/28.mp3',
displayName: '28. Feeling Proud 🔥 ',
cover: 'assets/28.jpg',
artist: 'Sumit Goswami',
},

//Song 29
{
path: 'assets/29.mp3',
displayName: '29. 9:45 🕗',
cover: 'assets/29.jpg',
artist: 'Prabh',
},

//Song 30
{
path: 'assets/30.mp3',
displayName: '30. Ghode pr sawaar 🎠',
cover: 'assets/30.jpg',
artist: 'Sireesha Bhagavatula',
},

//Song 31
{
path: 'assets/31.mp3',
displayName: '31. Stereo Hearts 📻',
cover: 'assets/31.jpg',
artist: 'Adam Levine X Fueled By Ramen',
},

//Song 32
{
path: 'assets/32.mp3',
displayName: '32. 12 saal 😩',
cover: 'assets/32.jpg',
artist: 'Bilal Saeed',
},

//Song 33
{
path: 'assets/33.mp3',
displayName: '33. Shape Of You 🌻',
cover: 'assets/33.jpg',
artist: 'Ed Sheeran',
},

//Song 34
{
path: 'assets/34.mp3',
displayName: '34. Sun Saathiya 🥀',
cover: 'assets/34.jpg',
artist: 'Priya Saraiya X Divya Kumar',
},

//Song 35
{
path: 'assets/35.mp3',
displayName: '35. Dheera Dheera 💥',
cover: 'assets/35.jpg',
artist: 'Ananya Bhat X Srikrishna',
},

//Song 36
{
path: 'assets/36.mp3',
displayName: '36. Waalian 🙌',
cover: 'assets/36.jpg',
artist: 'Harnoor',
},

//Song 37
{
path: 'assets/37.mp3',
displayName: '37. Dhokha Dhadi 💁',
cover: 'assets/37.jpg',
artist: 'Arijit Singh X Palak Muchhal ',
},

//Song 38
{
path: 'assets/38.mp3',
displayName: '38. Tu Hai Kahan ❓ ',
cover: 'assets/38.jpg',
artist: 'Usama Ali X Ahad Khan',
},

//Song 39
{
path: 'assets/39.mp3',
displayName: '39.Angrezi Beat 🍸',
cover: 'assets/39.jpg',
artist: 'Yo Yo Honey Singh X Gippy Grewal',
},

//Song 40
{
path: 'assets/40.mp3',
displayName: '40. Kaley Sheeshe 💎',
cover: 'assets/40.jpg',
artist: 'Addy Nagar',
},

//Song 41
{
    path: 'assets/41.mp3',
    displayName: '41. Play Date 🤞',
    cover: 'assets/41.jpg',
    artist: 'Melanie Martinez',
},

//Song 42
{
    path: 'assets/42.mp3',
    displayName: '42. Bachna Ae Haseeno 🗿',
    cover: 'assets/42.jpg',
    artist: 'Kishore Kumar X Vishal Dadlani',
},

//Song 43
{
path: 'assets/43.mp3',
displayName: '43. Hookah Bar 🍻',
cover: 'assets/43.jpg',
artist: 'Himesh Reshammiya',
},

//Song 44
{
path: 'assets/44.mp3',
displayName: '44. Arabic Kuthu 💃 ',
cover: 'assets/44.jpg',
artist: 'Anirudh Ravichander X Jonita Gandhi',
},

//Song 45
{
path: 'assets/45.mp3',
displayName: '45. Habibi X Danza Kuduro 🤙',
cover: 'assets/45.jpg',
artist: 'Ricky Rich X Don Omar',
},

//Song 46
{
path: 'assets/46.mp3',
displayName: '46. Sooraj Dooba Hai 🌞 ',
cover: 'assets/46.jpg',
artist: 'Arijit Singh X Aditi Singh Sharma',
},

//Song 47
{
path: 'assets/47.mp3',
displayName: '47. Aaja Ve Mahiya 🌛',
cover: 'assets/47.jpg',
artist: 'Imran Khan',
},

//Song 48
{
path: 'assets/48.mp3',
displayName: '48. Eenie Menie 👐 ',
cover: 'assets/48.jpg',
artist: 'Justin Bieber X Sean Kingston',
},

//Song 49
{
path: 'assets/49.mp3',
displayName: '49. Calm Down 🤗',
cover: 'assets/49.jpg',
artist: 'Rema X Selena Gomez',
},

//Song 50
{
path: 'assets/50.mp3',
displayName: '50. Jhak Maarke X Billo Raani 🌺 ',
cover: 'assets/50.jpg',
artist: 'Neeraj Shridhar X Anand Raaj',
},


];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);