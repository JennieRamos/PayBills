//define functions and global variables here...
var siteloc = "http://localhost/Paybills";
var scriptloc = "/scripts/";

function fetchemail(receiptNo)
{
   $.ajax({
      url: siteloc + scriptloc + "sendemail.py",
      data: { recieptNo:recieptNo},
   
      dataType: 'json',
      success: function (res) {
				console.log(res);
				if(res[0][0] != "None")
				{
				     $('p').append("OK");
				    
				}
				else 
				   $('p').append("KO");
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
			 $("#printreceipt").append('');
		}
   }); 
}