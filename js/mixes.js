import {
    SongData as sd
} from './songData.js'

export let sleepyVibes = {
    title: 'Sleepy Vibes',
    length: 10,
    order: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ]
}

export let litVibes = {
    title: 'Lit Vibes',
    length: 4,
    order: ["11", "12", "13", "14"]
}

export let rockVibes = {
    title: 'Rock Vibes',
    length: 4,
    order: ["11", "11"]
}

export function setUpRecently(audio) {

    console.log(sd.recent)

    if (sd.recent[0] != undefined) {
        createElem('recently-first', sd.recent[0].title, 'nil', 'recently-one-heading')
    }
    if (sd.recent[1] != undefined) {
        createElem('recently-second', sd.recent[1].title, 'nil', 'recently-two-heading')
    }
    if (sd.recent[2] != undefined) {
        createElem('recently-third', sd.recent[2].title, 'nil', 'recently-three-heading')
    }
}

export function setUpPop() {
    createElem('pop-one', 'sleepy vibes', 'nil', 'pop-one-heading')
    createElem('pop-two', 'lit vibes', 'nil', 'pop-two-heading')
    createElem('pop-three', 'rock vibes', 'nil', 'pop-three-heading')
}

export function createElem(div, title, songs, headingId) {
    let divElem = document.getElementById(div)
    let heading;
    if (document.getElementById(headingId) == undefined) {
        heading = document.createElement('h3')
        heading.id = headingId
    } else {
        heading = document.getElementById(headingId);
    }
    heading.innerHTML = title;
    divElem.appendChild(heading)
}