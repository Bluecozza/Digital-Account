function ajaxContact(theForm) {
var $ = jQuery;
$(document).ready(function(){
				 $.ajax({
					url : "http://localhost/ci/profile.json", 
				   type: "get", //form method
				   dataType:"jsonp", 
				   success:function(data){
					var i;
					for(i = 0; i < data.length; i++) {
						$("#dlink").append("<li id='dlink_" + data[i].d_id + "'>" + data[i].d_id + "(" + data[i].d_nama + "), Saldo: Rp. " + data[i].d_saldo + ",-</li>");
					}
					},
				   error: function(xhr, Status, err) {
					 $("Terjadi error : "+Status);
				   }
				 });
//checking session

    //var checkkey = $( "input[name=input-check]").val();
    var checkkey = 'username';
    var answer = $.session.get(checkkey);
    if(answer != undefined){
      $("#status").html(answer);
    }else{
      $("#status").html("Undefined");
    }



//end
	
  $("#session-add").submit(function(e){
    e.preventDefault();
    var key = $( "input[name=session-add-key]").val();
    var value = $( "input[name=session-add-value]" ).val();
    $.session.set(key,value);
    $(".response-add span").html("Key : "+key+" & Value : "+value+" added successfully.");
    $( "input[name=session-add-key]").val("");
    $( "input[name=session-add-value]" ).val("");
  });
  
  $("#session-clear").submit(function(e){
    e.preventDefault();
    var clearkey = $( "input[name=session-clear]").val();
    $.session.remove(clearkey);
    $(".response-clear span").html(clearkey+" removed successfully.");
    $( "input[name=session-clear]").val("");
  });
  
  $("#session-check").submit(function(e){
    e.preventDefault();
    var checkkey = $( "input[name=input-check]").val();
    var answer = $.session.get(checkkey);
    if(answer != undefined){
      $(".storage-val strong span").html(answer);
    }else{
      $(".storage-val strong span").html("Undefined");
    }
    $( "input[name=input-check]").val("");
  });
  
  $(".removeall").on("click",function(e){
    e.preventDefault();
    $.session.clear();
    $(".response-removeall span").html("All session variables are removed.");
  });
  
  $(".pageload").on("click",function(e){
    e.preventDefault();
    var checksession = $.session.get('test');
    if(checksession != undefined){
      $(".page-content").load("templates/index.html");
    }else{
      $(".page-content").html("Please add 'test' variable in left box to access this page.<br>Ex : Key = 'test' & value = 'test'");
    }
  });
});
}