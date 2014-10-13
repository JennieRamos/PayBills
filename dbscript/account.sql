create table account(
	accountno int primary key,
	pldtacct int,
	balance int,
	email text
);


create or replace function paybill(p_accountno int,p_pldtacct int, p_amount int) 
returns text as
$$
declare
  v_accountno int; 
  v_balance int;
  v_msg text;

begin
  	update account set balance = balance - p_amount where 
  		accountno = p_accountno;
  return 'OK';
  end;
$$
    language 'plpgsql';	


create or replace function accountinfo(in int, out int, out int, out text) 
returns setof record as
$$ 
     select  pldtacct,balance,email from account
     where accountno = $1;
     
$$
language 'sql'; 