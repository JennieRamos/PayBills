$(function() 
{
  $("#btn-payment").click(
    function(){
      if ($("#pldtaccountnumber").val() == "" && $("#amount").val() == "")
        alert('Error!');
      else
        paybill($.cookie('accountnumber'),$("#pldtaccountnumber").val(),$("#amount").val());
    }
  
  );

}); 
