/*
    Initial work to control user access based on username and password pairs
     stored in a remote json file
*/

//This section gets the remote user/password list stored in our Github and returns it as a json objectt and calls the user validation function
function getAllUsers(){
    var requestURL = "https://raw.githubusercontent.com/Kevinschoen05/Muzocracy/feature/login/data/users.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        var userList = request.response;
        //console.log(userList);
        userValidation(userList);
    };
}
/*this function takes in the user/password list received above as a json object and checks
 if the input the user gives in the login.html matches any of the stored valid login pairs. 
 if yes, logs them into index.html (playlist page) 
 if no, alerts them of failed login

 TODOS: work on for loop because both successful and failed logins return their responses for every
 loop through regardless of a success/fail on each iteration
*/

function userValidation(jsonObj){
    var username = document.getElementById("usernameInput");
    var password = document.getElementById("passwordInput");
    var users = jsonObj["users"];
    
    for(var i=0; i < users.length; i++)
    {
        if(username.value == users[i]["Username"]){
            if(password.value == users[i]["Password"]){
                console.log("login successful");
                window.location.href = "index.html";
            }
        }
        else{
            alert("Incorrect Username or Password")
        }
    }

}