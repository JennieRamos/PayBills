//define functions and global variables here...
var siteloc = "http://localhost/Paybills";
var scriptloc = "/scripts/";

function fetchemail(accountNo)
{
   $.ajax({
      url: siteloc + scriptloc + "sendemail.py",
      data: { accountNo:accountNo},
   
      dataType: 'json',
      success: function (res) {
				console.log(res);
		} 
    }); 
}

function setreceipt(accountno)
{
   $.ajax({
      url: siteloc + scriptloc + "setreceipt.py",
		data: {
			accountno:accountno
		},
		dataType: 'json',
		success:
		function (res){
		    console.log(res);
		    $('p').append(res);
		    console.log("OK");
		}
   }); 
}

function printreceipt(accountNo)
{
   $.ajax({
      url: siteloc + scriptloc + "printreceipt.py",
		data: {accountNo:accountNo
		},
		dataType: 'json',
		success:
		function (res){
				console.log(res);
				$('p').append(res);
				fetchemail(accountNo);
		}
   }); 
}




function isloggedin()
{
	if (!$.cookie("username") && !$.cookie("userid"))
		return false;
    else
		return true;	
}


function logout()
{
    $.removeCookie("username");
    $.removeCookie("userid"); 
    
    window.location.replace("login.html");	
}



function login(username,password)
{
   $.ajax({
      url: siteloc + scriptloc + "login.py",
      data: {username:username,
	     password:password },
      dataType: 'json',
      success:

	  function (res) 
	  {
			if (res[0][0] != "Your password did not match") //if login is successful redirect page
			{
				$.cookie("username",username);
				$.cookie("userid",res[0][0]);
 
				window.location.replace("index.html"); 
			}
			
			else
			{
				$('#status').empty();
				$('#status').append("Invalid username or password");
				$('#status').css('color','#FF0000');
			}
		
      } 
      }); 
}
