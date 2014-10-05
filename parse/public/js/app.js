//This initialize statement identifies the app
Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");



//Function that is called when submit is pressed
$('.upload-btn').click(function(){
	var email = 'default';
	// var store = Parse.User.current().getUserName();
	// console.log(store);
	var id = Parse.User.current().id;
	console.log('id: '+id);
	var User = Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.get(id, {
	  success: function(query) {
	    // The object was retrieved successfully.
	    //alert('GetCurrentUserEmail() successful');
	    email = query.get("username");
		//console.log('email: '+ email);
		var title = $('#post-title').val();
		//console.log('title: '+ title);
		var description = $('#post-description').val();
		//console.log('description: '+description);
		makePost(email, title, description);
	  },
	  error: function(object, error) {
	    // The object was not retrieved successfully.
	    // error is a Parse.Error with an error code and message.
	    alert('GetCurrentUserEmail() failed');
	    return 'bad email';
	  }
	});
});


//Makes a new post
makePost = function(email, title, description){
	var Post = Parse.Object.extend("post");
	var p = new Post();
	p.set("author",email);
	p.set("title", title);
	p.set("description", description);
	console.log('post created');
	p.save(null, {
	  success: function(p) {
	    // Execute any logic that should take place after the object is saved.
	    //alert('New object created with objectId: ' + p.id);
	    $('.alert-success').removeClass('hidden');
	  },
	  error: function(p, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    //alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

makePostWithImage = function(email, title, description, image){
	var Post = Parse.Object.extend("post");
	var p = new Post();
	p.set("author",email);
	p.set("title", title);
	p.set("description", description);
	console.log('post created');
	p.save(null, {
	  success: function(p) {
	    // Execute any logic that should take place after the object is saved.
	    //alert('New object created with objectId: ' + p.id);
	    $('.alert-success').removeClass('hidden');
	  },
	  error: function(p, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    //alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

//Returns an array of all the posts
getAllPosts = function(){
	var Post = Parse.Object.extend("post");
	var query = new Parse.Query(Post);
	//alert(query.length);
	query.find({
		success: function(results){ 
			//results.descending("createdAt");
			//alert('Retrieved '+results.length+' results.');
			addAllPosts(results);
		},
		error: function(error){
			//alert("Error: " + error.code + " " + error.message);
		}
	});
}

//Display all the posts
addAllPosts = function(postArr){
	var Post = Parse.Object.extend("post");
	var query = new Parse.Query(Post);

	for(i = 0; i < 3; i++){
		id = postArr[i].id;
		//console.log(id);
		query.get(id, {
		  success: function(query) {
		    // The object was retrieved successfully.
		    //alert('GetCurrentUserEmail() successful');
		    var email = query.get("author");
			console.log('email: '+ email);
			var title = query.get("title");
			console.log('title: '+ title);
			var description = query.get("description");
			console.log('description: '+description);
			var created = query.get("createdAt");
			console.log('created: '+created);
			addPost(email, title, description, created);
		  },
		  error: function(object, error) {
		    // The object was not retrieved successfully.
		    // error is a Parse.Error with an error code and message.
		    alert('GetCurrentUserEmail() failed');
		    return 'bad email';
		  }
		});		



	}
}

//Gets number of new posts
getPostNumber = function(){
	var posts = document.getElementsByClassName('panel-title');
	//alert(posts.length);
	if(posts == null){
		return 1;
	}
	return posts.length+1;
}

postedByCurrentUser = function(){
	return '';
}

addPost = function(email, title, description, created){
	var htmlString = '';
	htmlString += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse'+getPostNumber()+'">'+title+'<br><small>Posted at '+created+'</small></a></h4></div><div id="collapse'+getPostNumber()+'" class="panel-collapse collapse"><!-- Listing content --><div class="panel-body"><p>'+description+'</p><!-- Thumbnails in listing content --><div class="container"> <div class="row" style="width: 90%"><div class="col-xs-6 col-md-3"><a href="#" class="thumbnail"><img src="http://i.imgur.com/2udI0ews.jpg" alt="..."></a></div></div></div></div></div></div> <!-- End div for one listing lols -->';

	$('.panel .panel-default').append(htmlString);
}

//Toggling
$('.buy-btn').click(function(){
	if($('.buy-page').hasClass('last-page')){}
	else{
	$('.buy-page').removeClass('hidden');
	$('.last-page').addClass('hidden');
	$('.last-page').removeClass('last-page');
	$('.buy-page').addClass('last-page');
}});
$('.sell-btn').click(function(){
	if($('.sell-page').hasClass('last-page')){}
	else{
	$('.sell-page').removeClass('hidden');
	$('.last-page').addClass('hidden');
	$('.last-page').removeClass('last-page');
	$('.sell-page').addClass('last-page');
}});
$('.my-listings-btn').click(function(){
	if($('.mylisting-page').hasClass('last-page')){}
	else{
	$('.mylisting-page').removeClass('hidden');
	$('.last-page').addClass('hidden');
	$('.last-page').removeClass('last-page');
	$('.mylisting-page').addClass('last-page');
}});
//TODO
$('.messages-btn').click(function(){
	if($('.chat-page').hasClass('last-page')){}
	else{
	$('.chat-page').removeClass('hidden');
	$('.last-page').addClass('hidden');
	$('.last-page').removeClass('last-page');
	$('.chat-page').addClass('last-page');
}});

//Log out
exit = function(){
	Parse.User.logOut();
	var currentUser = Parse.User.current();
}

//KeepUser
keepUser = function(){
	var currentUser = Parse.User.current();
	if(currentUser){
		
	}else{
		document.location.replace('index.html');
	}
}
$(document).ready(keepUser);

//Testing purposes
$("#brand").click(function(){
	//alert('test');
	//makePost('maxfangx@gmail.com', '63 XXL Condoms', 'Courtesy of David Nguyen');
	//getAllPosts();
	
	//exit();
	getAllPosts();

});

//To test that app.js works
/*var main = function(){
	alert('Page is ready!');
}
$(document).ready(main);*/

/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
  return msgbox.showAsync();
});*/


//Makes the wrapping All class
/*makeAll = function(){
	var All = Parse.Object.extend("All");
	var a = new All();
	var edus = new Array();
	a.set("colleges",area);

	console.log('All created');
	a.save(null, {
	  success: function(a) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + a.id);
	  },
	  error: function(a, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}
makeAll();
*/

//Facebook guy implementation
/*getAllPostIds = function(){
	var q = new Parse.Query("Post");
	return q.find().then(function(objects)) {
		// Note(thomas): this may need to be function(index, object)
		return Parse._.map(objects, function(object) {
			return object.id;
		});
	});
}*/

//Saves something to database and can alert if it was done successfully
/*simpleSave = function(obj){
	obj.save().
	then(function(obj) {
      // Execute any logic that should take place after the object is saved. 
      // Uncomment for debugging
      alert('New object created with objectId: ' + obj.id);
    }, function(error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      // Uncomment for debugging.
      alert('Failed to create new object, with error code: ' + error.message);
    });
}*/