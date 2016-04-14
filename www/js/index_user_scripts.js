/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnSignup */
    $(document).on("click", "#btnSignup", function(evt)
    {
        
    		var datasignup = {
    			appid: appId,
    			appsecret: appSecret,
    			username: $("#username2").val(),
                name: $("#name2").val(),
                email: $("#email2").val(),
    			password: $("#password2").val()
    		};
    
    		$.ajax({
    			type: "get",
    			url : "http://d-a.im/api/account/register", 
    			data: datasignup,
    			dataType:"jsonp", //seperti biasanya
    			beforeSend:function(){
                 $("#loading").html("<img src='img/loading.gif'>");
               },
    			error: function(data) {
    				$("#loading").html("Unknown error");
    			},
    			success: function(data)
    			{
    	switch (JSON.parse(data.status)) {
        case 404:
    					$('#loading').html("Error: User Not Found");
            break; 
        case 200:
                
                if(typeof(Storage) !== "undefined") {
                    // Code for localStorage/sessionStorage.
                    localStorage.setItem("myusername", $("#username2").val());
                    localStorage.setItem("myemail", $("#email2").val());
                    localStorage.setItem("myname", $("#name2").val());
                    localStorage.setItem("mypicture", data.u_picture);
                } else {
                    $("#loading").html("success. Please wait..");
    					$.session.set('username',$("#username2").val());
    					$.session.set('uname',$("#name2").val());
    					$.session.set('uemail',$("#email2").val());
    					$.session.set('upicture',data.u_picture);
    					$.session.set('ustatus','....');
                }
   		
            break; 
        default: 
    					$('#loading').html("error");
    	}
    			},
    
    		});
    		return false;
    });
    /////////////////////////////////////////-----------------------------
        /* button  #btnLogin */
    $(document).on("click", "#btnLogin", function(evt)
    {
        
    		var datalogin = {
    			appid: appId,
    			appsecret: appSecret,
    			username: $("#username").val(),
    			password: $("#password").val()
    		};
    
    		$.ajax({
    			type: "get",
    			url : "http://d-a.im/api/account/login", 
    			data: datalogin,
    			dataType:"jsonp", //seperti biasanya
    			beforeSend:function(){
                 $("#loading2").html("<img src='img/loading.gif'>");
               },
    			error: function(data) {
    				$("#loading2").html("Unknown error");
    			},
    			success: function(data)
    			{
    	switch (JSON.parse(data.status)) {
        case 404:
    					$('#loading2').html("Error: User Not Found");
            break; 
        case 200:
                if(typeof(Storage) !== "undefined") {
                    // Code for localStorage/sessionStorage.
                    localStorage.setItem("myusername", $("#username2").val());
                    $("#loading2").html("success. Please wait..");
    					localStorage.setItem('myuid',data.u_id);
    					localStorage.setItem('mysername',data.u_username);
    					localStorage.setItem('myname',data.u_name);
    					localStorage.setItem('myemail',data.u_email);
    					localStorage.setItem('mypicture',data.u_picture);
    					localStorage.setItem('mystatus',data.u_status);
    					location.href = "./main.html";
                } else {
                    $("#loading").html("success. Please wait..");
    					$.session.set('username',$("#username2").val());
    					$.session.set('uname',$("#name2").val());
    					$.session.set('uemail',$("#email2").val());
    					$.session.set('upicture',data.u_picture);
    					$.session.set('ustatus','....');
                }
                
    					
            break; 
        default: 
    					$('#loading2').html("error");
    	}
    			},
    
    		});
    		return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
