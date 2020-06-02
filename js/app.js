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

import {
    sleepyVibes,
    litVibes
} from './mixes.js'

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
let popOne = document.querySelector('#pop-one');
let popTwo = document.querySelector('#pop-two');
let popThree = document.querySelector('#pop-three');
let slider = document.querySelector('#slider');
slider.value = songData.song.currentTime
slider.min = 0
slider.max = songData.song.duration

slider.oninput = function () {
    songData.song.currentTime = this.value
}

updateValue()

// let sleepyVibesBtn = document.querySelector('#sleepy-vibes');

prevBtn.addEventListener("click", (function () {
    prev(songData)
}));
playBtn.addEventListener("click", (function () {
    play(songData, playBtn)
}));
nextBtn.addEventListener("click", (function () {
    next(songData)
}));
// sleepyVibesBtn.addEventListener("click", playSleepyVibes);
popOne.addEventListener("click", (function () {
    playMix(sleepyVibes)
}))
popTwo.addEventListener("click", (function () {
    playMix(litVibes)
}))
popThree.addEventListener("click", playSleepyVibes)

playBtn.className = "play";

function playMix(mixName) {
    queue.order = mixName.order
    queue.length = mixName.length
    play(songData, playBtn)
    console.log(queue)
}

function updateValue() {
    slider.value = songData.song.currentTime
    slider.max = songData.song.duration

    setTimeout(updateValue, 1000)
}