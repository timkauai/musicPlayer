export let SongData = {
    recent: [],
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
    },
    2: {
        media: {
            song: '2.mp3',
            albumCover: 'revenge.png'
        },
        name: 'Sacrifices',
        artist: 'Various',
        album: 'Revenge'
    },
    3: {
        media: {
            song: '3.mp3',
            albumCover: 'revenge.png'
        },
        name: '1993',
        artist: 'Various',
        album: 'Revenge'
    },
    4: {
        media: {
            song: '4.mp3',
            albumCover: 'blkswn.png'
        },
        name: 'Wild Irish Roses',
        artist: 'Smino',
        album: 'Blkswn'
    },
    5: {
        media: {
            song: '5.mp3',
            albumCover: 'milky-way.png'
        },
        name: 'Tribe',
        artist: 'Bas & J. Cole',
        album: 'Milky Way'
    },
    6: {
        media: {
            song: '6.mp3',
            albumCover: 'blkswn.png'
        },
        name: 'Anthetamine',
        artist: 'Smino',
        album: 'blkswn'
    },
    7: {
        media: {
            song: '7.mp3',
            albumCover: 'blkswn.png'
        },
        name: "Edgar Allen Poe'd Up",
        artist: 'Smino',
        album: 'blkswn'
    },
    8: {
        media: {
            song: '8.mp3',
            albumCover: 'blkswn.png'
        },
        name: 'Netflix and Dusse',
        artist: 'Smino',
        album: 'blkswn'
    },
    9: {
        media: {
            song: '9.mp3',
            albumCover: 'bucket-list.png'
        },
        name: 'Bucket List',
        artist: 'Saba',
        album: 'Bucket List Project'
    },
    10: {
        media: {
            song: '10.mp3',
            albumCover: 'bucket-list.png'
        },
        name: 'Stoney',
        artist: 'Saba',
        album: 'Bucket List Project'
    },
    11: {
        media: {
            song: '11.mp3',
            albumCover: 'sweet-action.png'
        },
        name: 'Whats Poppin',
        artist: 'Jack Harlow',
        album: 'Sweet Action'
    },
    12: {
        media: {
            song: '12.mp3',
            albumCover: 'welcome-to-chilis.png'
        },
        name: 'Welcome To Chilis',
        artist: 'Yung Gravy & BBNO$',
        album: 'Welcome to Chilis'
    },
    13: {
        media: {
            song: '13.mp3',
            albumCover: 'cheryl.png'
        },
        name: 'Cheryl',
        artist: 'Yung Gravy',
        album: 'Cheryl'
    },
    14: {
        media: {
            song: '14.mp3',
            albumCover: 'sensational.png'
        },
        name: 'Magic',
        artist: 'Yung Gravy',
        album: 'Sensational'
    },
    15: {
        media: {
            song: '15.mp3',
            albumCover: 'album.png'
        },
        name: 'Sympathy for the Devil',
        artist: 'the Rolling Stones',
        album: 'album'
    },
    16: {
        media: {
            song: '16.mp3',
            albumCover: 'album.png'
        },
        name: "You Can't Always get What you Want",
        artist: 'the Rolling Stones',
        album: 'album'
    },
    17: {
        media: {
            song: '17.mp3',
            albumCover: 'album.png'
        },
        name: "Gimme Shelter",
        artist: "The Rolling Stones",
        album: 'album'
    }
}

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