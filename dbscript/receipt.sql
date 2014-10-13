create table receipt(
    receipt_id serial primary key,
    accountno_FK serial references account (accountno),
    receiptNo serial,
	rDate date
);


--HOW TO USE:
-- SELECT getReceipt(1);

create or replace function getReceipt(in int, out int, out date) 
	returns setof record as

$$ 
    select receiptNo, rDate from receipt
				where receipt_id = $1;
$$
 
	language 'sql';


--HOW TO USE:
-- SELECT setReceipt('9304230','December 5, 2014');

create or replace function setReceipt(p_rDate date) 
returns int as

$$
declare
  v_receipt_id int; 
begin
  select into v_receipt_id receipt_id from receipt
	where rDate = p_rDate;
  
   insert into receipt(rDate) values (p_rDate);
   
   select receiptNo from receipt where rDate = p_rDate;
  end;
$$
    language 'plpgsql';
	
create or replace function getReceiptNo(in int, out int) 
	returns int as

$$ 
    select receiptNo from receipt
				where receipt_id = $1;
$$
 
	language 'sql';
    
	
