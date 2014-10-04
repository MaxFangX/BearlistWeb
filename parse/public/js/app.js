Parse.initialize("0DjH3hlL03Nf8neV0qBuG8LfgzrGx6xZBOSN8zwi", 
	"vD6Ar9262yegpOE1hXQm8XKMeNNMkpGd6DwmNYoU");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
  return msgbox.showAsync();
});