export function setUpSongData(songNum) {
    let songTag = document.querySelector('#song-tag');
    let artistTag = document.querySelector('#artist-tag');
    let albumTag = document.querySelector('#album-tag');
    let albumCover = document.querySelector('#album-cover');

    songTag.innerHTML = SongData[songNum].name;
    artistTag.innerHTML = SongData[songNum].artist;
    albumTag.innerHTML = SongData[songNum].album;

    let albumCoverImg = document.querySelector('#album-cover-img')

    if (albumCoverImg == null) {
        albumCoverImg = document.createElement('img');
        albumCoverImg.src = '../music/album-covers/' + SongData[songNum].media.albumCover;
        albumCoverImg.id = 'album-cover-img'
        albumCover.appendChild(albumCoverImg);
    } else {
        albumCoverImg.src = '../music/album-covers/' + SongData[songNum].media.albumCover;
    }
}

export let SongData = {
    0: {
        media: {
            song: '0.mp3',
            albumCover: 'care-for-me.png'
        },
        name: 'Prom / King',
        artist: 'Saba',
        album: 'Care For Me'
    },
    1: {
        media: {
            song: '1.mp3',
            albumCover: 'care-for-me.png'
        },
        name: 'Grey',
        artist: 'Saba',
        album: 'Care For Me'
    }
}