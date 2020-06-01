import {
    setUpSongData as sd
} from './songData.js'
import {
    queue
} from './queue.js'

let songDuration;
let isPlaying = false;

export function prev(songData) {

    let songRef = 0;

    if (queue.length == 0) {
        songData.songNum--;
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        songRef = songData.songNum
    } else {
        queue.current--;
        if (queue.order[queue.current] == ',' || queue.order[queue.current] == ' ') {
            queue.current--;
        }
        songData.song.src = '../music/' + String(queue.order[queue.current]) + '.mp3'
        songRef = queue.order[queue.current]

        console.log(songData.song.src)
        console.log(queue)
    }

    if (!doesFileExist(songData.song.src)) {
        songRef = 0;
        queue.current = 0
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        console.log('file doesnt exist')
    }

    sd(songRef)

    if (isPlaying) {
        songData.song.play();
    }
}

export function play(songData, playBtn) {
    if (!isPlaying) {
        if (songDuration != null) {
            songData.song.duration = songDuration
        }

        if (queue.length == 0) {
            songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
            sd(songData.songNum);
        } else {
            console.log('in sond data here')
            songData.song.src = '../music/' + String(queue.order[queue.current]) + '.mp3'
            sd(queue.order[queue.current]);
        }
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

    let songRef = 0;

    if (queue.length == 0) {
        songData.songNum++;
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        songRef = songData.songNum
    } else {
        queue.current++;
        if (queue.order[queue.current] == ',' || queue.order[queue.current] == ' ') {
            queue.current++;
        }
        songData.song.src = '../music/' + String(queue.order[queue.current]) + '.mp3'
        songRef = queue.order[queue.current]

        console.log(songData.song.src)
        console.log(queue)
    }

    if (!doesFileExist(songData.song.src)) {
        songRef = 0;
        queue.current = 0
        songData.song.src = '../music/' + String(songData.songNum) + '.mp3';
        console.log('file doesnt exist')
    }

    sd(songRef)

    if (isPlaying) {
        songData.song.play();
    }
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