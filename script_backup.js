import * as mdc from 'material-components-web';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));


var playlist = {

  songs: [{
    title: "Stargazing",
    artist: "Travis Scott",
    album: "ASTROWORLD",
    votes: 2
  }, {
    title: "Sicko Mode",
    artist: "Travis Scott",
    album: "ASTROWORLD",
    votes: 9
  }, {
    title: "Carousel",
    artist: "Travis Scott",
    album: "ASTROWORLD",
    votes: 10
  }],
  
   playlistOrder: [{}],
  
  displaySongs: function() {
    this.getPlaylistOrder();
  },

  addSongs: function(songTitle, songArtist, songAlbum) {
    this.songs.push({
      title: songTitle,
      artist: songArtist,
      album: songAlbum,
      votes: 0
    });
    this.displaySongs();
  },

  upvoteSongs: function(songPosition) {
    this.songs[songPosition].votes++;
    this.displaySongs();
  },

  downvoteSongs: function(songPosition) {
    this.songs[songPosition].votes--;
    this.displaySongs();
  },

  getPlaylistOrder: function() {
    playlistOrder = this.songs.slice().sort(function(a, b) {
      return (b.votes - a.votes);
    });
    this.playlistOrder = playlistOrder;
    console.log(playlistOrder);
  }
};

var handlers = { 
  displaySongs: function(){
    view.displaySongs();
  }, 
  
  addSongs: function(){
    var addSongsSongTitleInput = document.getElementById("addSongsSongTitleInput");
    var addSongsSongArtistInput = document.getElementById("addSongsSongArtistInput");
    var addSongsSongAlbumInput = document.getElementById("addSongsSongAlbumInput");
    playlist.addSongs(addSongsSongTitleInput.value, addSongsSongArtistInput.value, addSongsSongAlbumInput.value);
    addSongsSongTitleInput.value="";
    addSongsSongArtistInput.value="";
    addSongsSongAlbumInput.value="";
    view.displaySongs();
  },
  
  upvoteSongs: function(){
    var upvoteSongsPositionInput = document.getElementById("upvoteSongsPositionInput");
    playlist.upvoteSongs(upvoteSongsPositionInput.valueAsNumber);
    upvoteSongsPositionInput.value ="";
    view.displaySongs();
  }, 
  
  downvoteSongs: function(){
    var downvoteSongsPositionInput = document.getElementById("downvoteSongsPositionInput");
    playlist.downvoteSongs(downvoteSongsPositionInput.valueAsNumber);
    downvoteSongsPositionInput.value ="";
    view.displaySongs();
  }
  
};