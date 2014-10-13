from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json


def index(req, accountNo):
    accountNo = cgi.escape(accountNo)
    x = doSql() 
    rets = x.execqry("select receiptNo from receipt INNER JOIN account\
    on receipt.accountno_FK = account.accountno where accountno = '" + accountNo + "';", False)
    for ret in rets:
        stringed = ''.join(map(str, ret))

    if stringed != 'None':
        rets = x.execqry("select getReceiptNo('" + receiptNo + "');",False)
  
        for ret in rets:
            stringed = map(str, ret)
        if stringed != "None":
            result = {'resp':'OK' }
        else:
            result = {'resp':'KO' }
    else:
        result = {'resp':'KO' }	
		
    return json.dumps(result)