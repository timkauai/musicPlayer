import {
    play,
    next,
    prev
} from './musicPlayer.js';

import {
    setUpSongData as sd
} from './songData.js';

import {
    queue
} from './queue.js'

let Song = new Audio();

//set up the song number in the queue
let songData = {
    song: Song,
    songNum: 0,
};

if (queue.length != 0) {
    sd(queue.order[queue.current]);
} else {
    sd(songData.songNum);
}



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