var database = [
		{
			username:"shambo",
			password:"secret"
		}
];
var newsFeed = [
		{
			name:"Sunil",
			timeline:"So tried after learning html"
		},
		{
			name:"Adarsh",
			timeline:"yar ghar jaka pura padhai karuga"
		}
];
var userNamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");
function signIn(user,pass){
	if(user === database[0].username && pass === database[0].password){
		console.log(newsFeed);
	}
	else{
		alert("Sorry Incorrect Password or username");
	}
}
signIn(userNamePrompt,passwordPrompt);