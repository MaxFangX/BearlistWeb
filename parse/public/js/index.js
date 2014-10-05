Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");

$('.btn-register').click(function(){
	username = $('#registerName').val();
	email = $('#registerEmail').val();
	password1 = $('#registerPassword').val();
	password2 = $('#registerPasswordConfirm').val();
	if(password1.equals(password2)){
		register(username, email, password);
	}
	else{
		alert('Passwords don\'t match!');
	}
});

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
			alert('Error registering: ' + error.code + ' ' + error.message);
		}
	});

}

//Otherwise known as log in
enter = function(email, password){
	Parse.User.logIn("email", "password",{
		success: function(user){
			alert('You have logged in!');
		},
		error: function(user, error){
			alert('The login failed.');

		}
	})
}

//Log out
exit = function(){
	Parse.User.logOut();
	var currentUser = Parse.User.current();
}

//KeepUser
keepUser = function(){
	var currentUser = Parse.User.current();
	if(currentUser){
		//Do stuff with the user
	}else{
		//Show the signup or login page
	}
}

$(document).ready(keepUser);


