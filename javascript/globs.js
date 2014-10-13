//define functions and global variables here...
var siteloc = "http://localhost/Paybills";
var scriptloc = "/scripts/";

function fetchemail(accountNo,receiptno)
{
   $.ajax({
      url: siteloc + scriptloc + "sendemail.py",
      data: { accountNo:accountNo,
      	receiptNo:receiptno
      },
   
      dataType: 'json',
      success: function (res) {
				console.log(res);
				$("#emailconfirmation").append("An email has been sent to ");
				fetchaccountinfo(accountNo);
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
		   	
		}
   }); 
}

function printreceipt(receipt_id)
{
   $.ajax({
      url: siteloc + scriptloc + "printreceipt.py",
		data: {receipt_id:receipt_id
		},
		dataType: 'json',
		success:
		function (res){
				console.log(res);
				if (res["resp"] == "OK")
				{

					$("#receiptno").empty();
					$("#date").empty();
					$("#amountmodal").empty();
					$("#accountno").empty();

					jQuery.noConflict();
					$("#receiptmodal").modal();
					$("#receiptno").append(res["receiptNo"]);
					$("#date").append(res["date"]);
					$("#amountmodal").append(res["amount"]);
					$("#accountno").append(res["acctno"]);


				}
				fetchemail($.cookie('accountnumber'),receipt_id);
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
