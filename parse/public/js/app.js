//This initialize statement identifies the app
Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");


//Saves something to database and can alert if it was done successfully
simpleSave = function(obj){
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
}

//Testing purposes
$("#brand").click(function(){
	//alert('test');
	getPostNumber();
});

getAllPostIds = function(){
	var q = new Parse.Query("Post");
	return q.find().then(function(objects)) {
		// Note(thomas): this may need to be function(index, object)
		return Parse._.map(objects, function(object) {
			return object.id;
		});
	});
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

getCollapse = function(){
	var result = '<a data-toggle="collapse" data-parent="#accordion" href="#collapse';
	result += getPostNumber();
	result += '">';
}

getTitle = function(){
	return 'Max For Sale';
}

getDateTime = function(){
	
	return '<small>Posted one hour ago at 3:35 PM 10/4/2014</small>';
}

getDescription = function(){

	return '<p>very sxc bod sxc men sxc much cheap 58 cents (btw when the machines take over you can make change of that 1294 ways lols)</p>';
}

getImage = function(){

	return '<img src="http://i.imgur.com/b8SsFnhs.jpg" alt="...">';
}

addPost = function(){
	htmlString = '';
	htmlString += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">';
	htmlString += getCollapse();
	htmlString += getTitle();
	htmlString += '<br>';
	htmlString += getDateTime();
	htmlString += '</a></h4></div><div id="collapse';
	htmlString += getPostNumber();
	htmlString += '" class="panel-collapse collapse"><div class="panel-body">';
	htmlString += getDescription();
	htmlString += '<div class="container"><div class="row" style="width: 90%"><div class="col-xs-6 col-md-3"><a href="#" class="thumbnail">';
	htmlString += getImage();
	htmlString += '</a></div></div></div></div></div></div>';
	$('.panel .panel-default').append(htmlString);
}




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