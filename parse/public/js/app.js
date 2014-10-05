//This initialize statement identifies the app
Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");

//Saves something to database and can alert if it was done successfully
simpleSave = function(obj){
	obj.save(null, {
	  success: function(obj) {
	    // Execute any logic that should take place after the object is saved. 
	    // Uncomment for debugging
	    alert('New object created with objectId: ' + obj.id);
	  },
	  error: function(obj, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    // Uncomment for debugging.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

$("#brand").click(function(){
	//alert('test');


	
})






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