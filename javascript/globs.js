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

var receiptNo = 1000;
function setreceiptNo(date)
{
    receiptNo++;
	setreceipt(receiptNo, date);
}

function setreceipt(receiptNo, date)
{
   $.ajax({
      url: siteloc + scriptloc + "setreceipt.py",
		data: {receiptNo:receiptNo,
			   date:date
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

				if(res[0][0] != "None")
				{
					 console.log("OK");
				     $('p').append("Receipt No.:" + res[0][0] + "<br> Date: " + res[0][1] + "<br> Account No.: " + res[0][2] +
					 "<br> Amount: " + res[0][4]);

				    
				}
				else 
				   console.log("KO");
				   $('p').append("Receipt No.: NONE ");
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
