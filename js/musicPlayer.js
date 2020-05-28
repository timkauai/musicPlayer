import {
    setUpSongData as sd
} from './songData.js'

let songDuration;
let isPlaying = false;

export function prev(songData) {
    if (songData.songNum != 0) {
        songData.songNum--;
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        songData.song.play();
        sd(songData.songNum);
    } else {}
}

export function play(songData, playBtn) {
    if (!isPlaying) {
        if (songDuration != null) {
            songData.song.duration = songDuration
        }

        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        songData.song.play();
        isPlaying = true;
        playBtn.className = "pause";
    } else {
        isPlaying = false;
        songData.song.pause();
        playBtn.className = "play";
    }
}

export function next(songData) {
    songData.songNum++;
    songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
    if (!doesFileExist(songData.song.src)) {
        songData.songNum = 0;
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
    }
    songData.song.play();
    sd(songData.songNum);
}

export function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}