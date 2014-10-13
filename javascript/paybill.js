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
      }
    });
}
function fetchaccountinfo(accountno)
{
	var balance;
	$.ajax({
      url: siteloc + scriptloc + "paybill.py",
      data: {accountno:accountno
             },
      async:false,
      dataType: 'json',
      success: function (res) {
      		balance = res[0][1];
      }
    });

    return balance;
}
 
