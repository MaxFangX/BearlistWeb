var client_id = "hT5CABQ4EF4";
var client_secret = "nyT3Nluu_M8";
var timestamp = new Date().getTime();
var uniqueid = Parse.User.current().id; //Unique ID of how user is identified in your system
console.log(client_id + " " + client_secret + " " + uniqueid)

var hash = CryptoJS.HmacSHA256(client_id + uniqueid + timestamp, client_secret);
var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
var name = Parse.User.current().fetch().then(function (user) {
	user.get('name')
});

function get_token(other_user) {
    var init_options = {
        uniqueid: uniqueid,
        uniqueid2: other_user,
        firstname: name,
        lastname: " ",
        timestamp: timestamp,
        signature: signature,
        get_accesstoken: function(result) {
            console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
            startchat(result.access_token, uniqueid2);
        },
        error: function(result) {
            console.log("error code: " + result.error_code + " message: " + result.error_message);
        }
    };
    Moxtra.setup(init_options);
}

function startchat(access_token, uniqueid2) {
	var options = {
	    unique_id: uniqueid + "," + uniqueid2,
	    iframe: false,
	    tagid4iframe: "chatcontainer",
	    iframewidth: "820px",
	    iframeheight: "450px",
	    autostart_meet: true,
	    autostart_note: false,
	    access_token: access_token,
	    start_chat: function(event) {
	        alert("Chat started session Id: " + event.session_id);
	    },
	    invite_meet: function(event) {
	        alert("Meet invite");
	    },
	    start_meet: function(event) {
	        alert("Meet started session key: " + event.session_key + " session id: " + event.session_id);
	    },
	    end_meet: function(event) {
	        alert("Meet end event");
	    },
	    invite_member: function(event) {
	        alert("Invite member into binder Id: " + event.binder_id);
	    },
	    request_note: function(event) {
	        alert("Note start request");
	    },
	    error: function(event) {
	        alert("Chat error code: " + event.error_code + " error message: " + event.error_message);
	    }
	};
	Moxtra.chat(options);
}