var table = document.querySelector("tbody");
var requestURL = "https://raw.githubusercontent.com/Kevinschoen05/Muzocracy/feature/UI/data/spotify_playlist.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var playlist = request.response;
    //console.log(playlist);
  populateTable(playlist);
};


function populateTable(jsonObj){
    var songs = jsonObj["songs"]; 
    var tableBody = document.querySelector("tbody");
    for(var i=0; i < songs.length; i++)
    {
        var tableRow = document.createElement("tr");
        var tableArtist = document.createElement("td");
        var tableTrackTitle = document.createElement("td");
        var tableAlbum = document.createElement("td");
        var tableISRC = document.createElement("td")
        var tableLength = document.createElement("td");
        var tableSpotifyID = document.createElement("td");
        var tableVoteCount = document.createElement("td");
        var voteIcon = document.createElement("td");
        var voteIconUp = document.createElement("i");
        var voteIconDown = document.createElement("i");


        tableVoteCount.textContent = songs[i]["Votes"];
        tableArtist.textContent = songs[i]["Artist"];
        tableTrackTitle.textContent = songs[i]["Track Title"];
        tableAlbum.textContent = songs[i]["Album"];
        tableISRC.textContent = songs[i]["ISRC"];
        tableLength.textContent = songs[i]["Length"];
        tableSpotifyID.textContent = songs[i]["SpotifyID"]
        
        voteIcon.appendChild(voteIconUp);
        voteIconUp.setAttribute("class",  "fa fa-arrow-circle-up")
        voteIconUp.setAttribute("id", "upvoteArrow")
        
        voteIcon.appendChild(voteIconDown);
        voteIconDown.setAttribute("class", "fa fa-arrow-circle-down");
        voteIconDown.setAttribute("id", "downvoteArrow");
        

        
        tableRow.appendChild(tableArtist);
        tableRow.appendChild(tableTrackTitle);
        tableRow.appendChild(tableAlbum);
        tableRow.appendChild(tableISRC);
        tableRow.appendChild(tableLength);
        tableRow.appendChild(tableSpotifyID);
        tableRow.appendChild(tableVoteCount);
        tableRow.appendChild(voteIcon);
        
        

        tableBody.appendChild(tableRow);
        
    };
    tableVoteCount.setAttribute("id", "VoteCount");
    tableArtist.setAttribute("id", "Artist");
    tableTrackTitle.setAttribute("id", "trackTitle");
    tableAlbum.setAttribute("id","Album");
    tableISRC.setAttribute("id", "ISRC");
    tableLength.setAttribute("id", "Length");
    tableSpotifyID.setAttribute("id", "SpotifyID")
}