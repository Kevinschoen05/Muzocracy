/*
    Initial work to populate the playlist table from a remote json file containing
    a dummy Spotify playlist. 
*/

//This section gets the remote playist stored in our Github and returns it as a json objectt and calls the populate table function
var table = document.querySelector("tbody");
var requestURL = "https://raw.githubusercontent.com/Kevinschoen05/Muzocracy/feature/playlist/data/spotify_playlist.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var playlist = request.response;
    //console.log(playlist);
  populateTable(playlist);
  upvoteSongs(2)
};

//populate table function populates the empty html table in the index.html file dynamically from the json object returned above
function populateTable(jsonObj){
    var songs = jsonObj["songs"]; 
    var tableBody = document.querySelector("tbody");
    for(var i=0; i < songs.length; i++)
    {
        //dynamically creating the html elements necessary to populate the table
        var tableRow = document.createElement("tr");
        var tableArtist = document.createElement("td");
        var tableTrackTitle = document.createElement("td");
        var tableAlbum = document.createElement("td");
        var tableISRC = document.createElement("td")
        var tableLength = document.createElement("td");
        var tableSpotifyID = document.createElement("td");
        var tableVoteCount = document.createElement("td");
        var voteIcon = document.createElement("td");
        var voteIconUp = document.createElement("a");
        var voteIconDown = document.createElement("a");

        //filling the html elements created above with the corresponding json object values
        tableVoteCount.textContent = 0;
        tableArtist.textContent = songs[i]["Artist"];
        tableTrackTitle.textContent = songs[i]["Track Title"];
        tableAlbum.textContent = songs[i]["Album"];
        tableISRC.textContent = songs[i]["ISRC"];
        tableLength.textContent = songs[i]["Length"];
        tableSpotifyID.textContent = songs[i]["SpotifyID"]
        
        //this section is strictly controlling the placement and button functionality of the green upvote arrow
        voteIcon.appendChild(voteIconUp);
        voteIconUp.setAttribute("class",  " btn fa fa-arrow-circle-up")
        voteIconUp.setAttribute("id", "upvoteArrow")
        voteIconUp.setAttribute("data-toggle", "button")
        voteIconUp.setAttribute("aria-pressed", "false")
        voteIconUp.setAttribute("autocomplete", "off")

        //this section is strictly controlling the placement and button functionality of the red downvote arrow
        voteIcon.appendChild(voteIconDown);
        voteIconDown.setAttribute("class", " btn fa fa-arrow-circle-down");
        voteIconDown.setAttribute("id", "downvoteArrow");
        voteIconDown.setAttribute("data-toggle", "button")
        voteIconDown.setAttribute("aria-pressed", "false")
        voteIconDown.setAttribute("autocomplete", "off")

        
        //this section appends all of the html elements to a table row allowing a playlist of any size to be created dynamically
        tableRow.appendChild(tableArtist);
        tableRow.appendChild(tableTrackTitle);
        tableRow.appendChild(tableAlbum);
        tableRow.appendChild(tableISRC);
        tableRow.appendChild(tableLength);
        tableRow.appendChild(tableSpotifyID);
        tableRow.appendChild(tableVoteCount);
        tableRow.appendChild(voteIcon);
        
        
        //this section appends all of the "n" number of rows to the table body
        tableBody.appendChild(tableRow);
        
        //this section sets the id attribute to specific HTML elements created dynamically above so they can be styled/modified in the styl.css file
        tableVoteCount.setAttribute("id", "Position" + i);
        tableArtist.setAttribute("id", "Artist");
        tableTrackTitle.setAttribute("id", "trackTitle");
        tableAlbum.setAttribute("id","Album");
        tableISRC.setAttribute("id", "ISRC");
        tableLength.setAttribute("id", "Length");
        tableSpotifyID.setAttribute("id", "SpotifyID")
    };

};
   
function upvoteSongs(songPosition){
    var songPosition = songPosition;
    
    var voteCount = document.getElementById("Position" + songPosition)
    voteCount.value ++;
    console.log(voteCount.value);



};