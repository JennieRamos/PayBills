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

function setreceipt(receiptNo, date)
{
   $.ajax({
      url: siteloc + scriptloc + "settreceipt.py",
		data: {receiptNo:receiptNo,
			   date:date
		},
		dataType: 'json',
		success:
		function (res){
		     console.log("OK");
				if(res[0][0] != "None")
				{
				     $('p').append("OK!");
				}
				else 
				   $('p').append("None");
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