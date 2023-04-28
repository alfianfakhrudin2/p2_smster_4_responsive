$(document).ready(function()
{
$("#login").click(function()
{

	var uid = $("#uid").val();
	var password = $("#password").val();
	
	//checking for blank fields
	if( uid =='' || password =='')
		{
		  $('input[type="text"],input[type="password"]').css("border","2px solid red");
		  $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
		  alert("Please fill all fields...!!!!!!");
		}	

        else 
        {

    if ( password.length < 8 )
    {

       	  $('input[type="password"]').css("border","2px solid red");
		  $('input[type="password"]').css("box-shadow","0 0 3px red");
			alert(  'password must be of minimum 8 characters');
              $('#password').val('');
    }
    
 

 else {
 

			alert('Welcome  '+ uid + '!!!');
		}   



	}
	});

$("input").focus(function(){
    $(this).css("background-color","#cccccc");
     $(this).css("color","#000");
  });
  
  $("input").blur(function(){
    $(this).css("background-color","#ffffff");
    $(this).css("color"," #4f4f4f"); 
  });
});
