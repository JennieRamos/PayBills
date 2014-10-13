create table receipt(
    receipt_id serial primary key,
	accountno_FK int references account (accountno),
    receiptNo serial,
	rDate date
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

create or replace function setReceipt(p_rDate date,p_accountno_FK int) 
returns text as

$$
declare
  v_receipt_id int; 
begin

   insert into receipt(rDate,accountno_FK) 
					values
					(p_rDate,p_accountno_FK);

	return 'OK';
  end;


$$
    language 'plpgsql';
	
create or replace function getReceiptNo(in date, in int, out int) 
	returns int as

$$ 
    select receiptNo from receipt
				where accountno_FK = $2 and rDate = $1;
$$
 
	language 'sql';
    
	
