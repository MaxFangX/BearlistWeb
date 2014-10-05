Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");


register = function(username, email, password){
	var user = new Parse.User();
	user.set("username", email);
	user.set("password", password);
	user.set("name", username);

	user.signUp(null, {
		success: function(user){
			alert('You have successfully registered!');
		},
		error: function(user, error){
			alert('Error registering: ' + error.code + ' ' + error.message);
		}
	});
}
//Register
$('.btn-register').click(function(){
	var name = $('#registerName').val();
	console.log(name);
	var email = $('#registerEmail').val();
	console.log(email);
	var password1 = $('#registerPassword').val();
	console.log(password1);
	var password2 = $('#registerPasswordConfirm').val();
	console.log(password2);
	if(password1==password2){
		register(name, email, password1);
	}
	else{
		alert('Passwords don\'t match!');
	}
	console.log('Reached end of code');
});


//Logging in
$('.login-btn').click(function(){
	var email = $('.login-email').val();
	var password = $('.login-password').val();
	enter(email,password);
});

//Otherwise known as log in
enter = function(email, password){
	//console.log('You have reach here');
	Parse.User.logIn(email, password,{
		success: function(user){
			//console.log('Checkpoint 2');
			alert('You have logged in!');
			window.location.href = "app.html"
		},
		error: function(user, error){
			//console.log('Checkpoint 3');
			alert('The login failed.'+error.code+' '+error.message);
		}
	});
	event.preventDefault();
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
		window.location.replace('app.html');
	}else{
		//Show the signup or login page
	}
}

$(document).ready(keepUser);

$('.navbar-brand').click(function(){

	exit();
})
