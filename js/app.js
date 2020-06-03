import {
    play,
    next,
    prev
} from './musicPlayer.js';

import {
    setUpSongData as sd,
    SongData as data
} from './songData.js';

import {
    queue
} from './queue.js'

import {
    sleepyVibes,
    litVibes,
    rockVibes,
    setUpRecently as rec,
    setUpPop as pop
} from './mixes.js'

let Song = new Audio();

//set up the song number in the queue
let audio = {
    song: Song,
    songNum: 0,
};

if (queue.length != 0) {
    sd(queue.order[queue.current]);
} else {
    sd(audio.songNum);
}

//get nessesary document things
let player = document.querySelector('.player');
let prevBtn = document.querySelector('.prev');
let playBtn = document.querySelector('#play-btn');
let nextBtn = document.querySelector('.next');
let popOne = document.querySelector('#pop-one');
let popTwo = document.querySelector('#pop-two');
let popThree = document.querySelector('#pop-three');
let slider = document.querySelector('#slider');

//initialization of a couple classes
playBtn.className = "play";

//slider setup
slider.oninput = function () {
    audio.song.currentTime = this.value
}
updateValue()


//set up the click and keydown events
prevBtn.addEventListener("click", (function () {
    prev(audio)
}));
playBtn.addEventListener("click", (function () {
    play(audio, playBtn)
}));
nextBtn.addEventListener("click", (function () {
    next(audio)
}));
popOne.addEventListener("click", (function () {
    playMix(sleepyVibes)
}))
popTwo.addEventListener("click", (function () {
    playMix(litVibes)
}))
popThree.addEventListener("click", (function () {
    playMix(rockVibes)
}))
document.body.onkeyup = function (e) {
    if (e.keyCode == 32 || e.keyCode == 75) {
        play(audio, playBtn)
    }
    if (e.keyCode == 76) {
        next(audio)
    }

    if (e.keyCode == 74) {
        prev(audio)
    }
}

//set up some stuff from modules
pop()

function playMix(mixName) {
    queue.order = mixName.order
    queue.length = mixName.length
    play(audio, playBtn)
    data.recent.unshift(mixName)
    rec(audio)
}

function updateValue() {
    slider.value = audio.song.currentTime
    slider.max = audio.song.duration

    setTimeout(updateValue, 1000)
}