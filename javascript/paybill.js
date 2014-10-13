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
      		alert(res[0][0]);
      }
    });
}

function fetchaccountinfo(accountno)
{
	$.ajax({
      url: siteloc + scriptloc + "paybill.py",
      data: {accountno:accountno,
      	pldtacct:pldtacct,
      	amount:amount
             },
      dataType: 'json',
      success: function (res) {
      		alert(res[0][0]);
      }
    });
}


} 