import {
    play,
    next,
    prev
} from './musicPlayer.js';

import {
    SongData as sd
} from './songData.js';

let Song = new Audio();

//set up the song number in the queue
let songData = {
    song: Song,
    songNum: 0,
};


//the stuff
let player = document.querySelector('.player');
let prevBtn = document.querySelector('.prev');
let playBtn = document.querySelector('#play-btn');
let nextBtn = document.querySelector('.next');

prevBtn.addEventListener("click", (function () {
    prev(songData)
}));
playBtn.addEventListener("click", (function () {
    play(songData, playBtn)
}));
nextBtn.addEventListener("click", (function () {
    next(songData)
}));

playBtn.className = "play";

console.log(sd)