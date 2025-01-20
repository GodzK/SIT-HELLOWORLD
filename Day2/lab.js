 const songs = [ { name: "Shape of You", artist: "Ed Sheeran", yearPublished: 2017, viewCount: 6000000000 }, { name: "Blinding Lights", artist: "The Weeknd", yearPublished: 2019, viewCount: 4000000000 }, { name: "Someone Like You", artist: "Adele", yearPublished: 2011, viewCount: 3000000000 }, { name: "Bad Guy", artist: "Billie Eilish", yearPublished: 2019, viewCount: 2000000000 }, { name: "Bohemian Rhapsody", artist: "Queen", yearPublished: 1975, viewCount: 1500000000 }, { name: "Rolling in the Deep", artist: "Adele", yearPublished: 2010, viewCount: 1700000000 }, { name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", yearPublished: 2014, viewCount: 5000000000 }, { name: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", yearPublished: 2017, viewCount: 8000000000 }, { name: "Closer", artist: "The Chainsmokers ft. Halsey", yearPublished: 2016, viewCount: 3500000000 }, { name: "Thinking Out Loud", artist: "Ed Sheeran", yearPublished: 2014, viewCount: 3700000000 }, { name: "Let Her Go", artist: "Passenger", yearPublished: 2012, viewCount: 3200000000 }, { name: "Shallow", artist: "Lady Gaga & Bradley Cooper", yearPublished: 2018, viewCount: 1800000000 }, { name: "Believer", artist: "Imagine Dragons", yearPublished: 2017, viewCount: 2100000000 }, { name: "Senorita", artist: "Shawn Mendes & Camila Cabello", yearPublished: 2019, viewCount: 2200000000 }, { name: "Old Town Road", artist: "Lil Nas X", yearPublished: 2019, viewCount: 1500000000 }, ];

// 1. Search Songs by name function searchSongByName(name) {
    function searchSongByName(name){
        return songs.filter(data=> data.name === name)
    }

console.log(searchSongByName("Shape of You",songs))

// 2. Search Songs by artist 
    function searchSongByArtist(artist) {
        return songs.filter(data=>data.artist === artist)
    }
console.log(searchSongByArtist("The Weeknd"))

// 4. Delete By name 
function deleteSongByName(name) {
    let index = songs.findIndex(data => data.name === name)
    if (index !== -1){
        songs.splice(index,1)
        return songs
    }
    else{
        console.log("no song found")
    }
    
}
console.log(deleteSongByName("Shape of You"))


function filter(songs){
    return songs.filter(view => view.viewCount > 15000000)
}

console.log(filter(songs))
