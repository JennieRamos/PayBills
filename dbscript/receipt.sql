create table receipt(
    receipt_id serial primary key,
    accountno_FK serial references account (accountno),
    receiptNo serial,
	rDate date,
	amount int
);


--HOW TO USE:
-- SELECT setReceipt('9304230','December 5, 2014');

create or replace function setReceipt(p_rDate date,p_accountno_FK int,p_amount int) 
returns int as

$$
declare
  v_receipt_id int;

begin
  select into v_receipt_id receipt_id from receipt
	where rDate = p_rDate;
  
   insert into receipt(rDate,accountno_FK,amount) values (p_rDate,p_accountno_FK,p_amount) returning receipt_id into v_receipt_id;

   return v_receipt_id;
  end;
$$
    language 'plpgsql';
	
create or replace function getReceiptNo(in int, out int,out int,out date,out int) 
	returns setof record as

$$ 
    select receiptNo,accountno_fk,rDate,amount from receipt
				where receipt_id = $1;
$$
 
	language 'sql';
    
	
