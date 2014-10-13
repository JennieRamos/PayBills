//define functions and global variables here...
var siteloc = "http://localhost/Paybills";
var scriptloc = "/scripts/";

function fetchemail(receiptNo)
{
   $.ajax({
      url: siteloc + scriptloc + "sendemail.py",
      data: { receiptNo:receiptNo},
   
      dataType: 'json',
      success: function (res) {
				console.log("Ok");
				if(res[0][0] != "None")
				{
				     $('p').append("OK");
				    
				}
				else 
				   $('p').append("KO");
		} 
    }); 
}

function setreceipt(date)
{
   $.ajax({
      url: siteloc + scriptloc + "setreceipt.py",
		data: {date:date
		},
		dataType: 'json',
		success:
		function (res){
		     console.log("OK");
				
		      $('p').append(res);
				
		}
   }); 
}

function printreceipt(receiptNo)
{
   $.ajax({
      url: siteloc + scriptloc + "printreceipt.py",
		data: {receiptNo:receiptNo
		},
		dataType: 'json',
		success:
		function (res){
				console.log(res);
				$('p').append(res);
				fetchemail(receiptNo);
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
