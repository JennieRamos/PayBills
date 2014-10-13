create table receipt(
    receipt_id serial primary key,
	accountno_FK serial references account (accountno),
    receiptNo text,
	rDate date,	
);


--HOW TO USE:
-- SELECT getReceipt(1);

create or replace function getReceipt(in int, out text, out date) 
	returns setof record as

$$ 
    select receiptNo, rDate from receipt
				where receipt_id = $1;
$$
 
	language 'sql';


--HOW TO USE:
-- SELECT setReceipt('9304230','December 5, 2014');

create or replace function setReceipt(p_receiptNo text, p_rDate date) 
returns text as

$$
declare
  v_receipt_id int; 
begin
  select into v_receipt_id receipt_id from receipt
	where receiptNo = p_receiptNo;
  
   insert into events(receiptNo, rDate) 
					values
					(p_receiptNo, p_rDate)
  
  return 'Ok';
  end;
$$
    language 'plpgsql';
	
create or replace function getReceiptNo(in text, out text) 
	returns text as

$$ 
    select receiptNo from receipt
				where receipt_id = $1;
$$
 
	language 'sql';
    
	
