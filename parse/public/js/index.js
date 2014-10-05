Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");

register = function(username, email, password){
	var user = new Parse.User();
	user.set("username", username);
	user.set("email", email);
	user.set("password", password);

	user.signUp(null,{
		success: function(user){
			alert('You have successfully registered!');
		}
		error: function(user, error){
			alert('Error: ' + error.code + ' ' + error.message);
		}
	});


}


