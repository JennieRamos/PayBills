var siteloc = "http://localhost/Paybills";
var scriptloc = "/scripts/";
function paybill(accountno,pldtacct,amount)
{
  $.ajax({
      url: siteloc + scriptloc + "paybill.py",
      data: {accountno:accountno,
      	pldtacct:pldtacct,
      	amount:amount
             },
      dataType: 'json',
      success: function (res) {
        console.log(res);
      		if (res["resp"] == "OK")
      		{
      			printreceipt(res["receiptNo"]);
      		}
          else if (res["resp"] == "Insufficient Funds")
            alert("Insufficient Funds!!");
          else
            alert("Something went horribly wrong. Try again later.");
      }
    });
}
function fetchaccountinfo(accountno)
{

	$.ajax({
      url: siteloc + scriptloc + "getaccountinfo.py",
      data: {accountno:accountno
             },
      async:false,
      dataType: 'json',
      success: function (res) {
      		console.log(res);
          $("#emailconfirmation").append("<i>"+res[0][2]+"</i>");
      }
    });

}
 
