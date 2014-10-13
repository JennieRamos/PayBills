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
        rets = x.execqry("select * from getReceipt('" + stringed + "');", False)
        results = []
        items = x.execqry("select accountno from account INNER JOIN receipt on receipt.accountno_FK = \
        account.accountno where receiptNo = '" + stringed + "';", False)
        for ret in rets:
            stringed = map(str, ret)
            results.append(stringed)
        for item in items:
            stringed = map(str, item)
            results.append(stringed)

        if stringed[-1] != "None":
            result = {'resp':'OK','receiptNo': results[0][0], 'Date' : results[0][1], 'Account No.': results[1]}
        else:
            result = {'resp':'KO','receiptNo':'NONE'}
    else:
	    result = {'resp':'KO','receiptNo':'NONE'}
    return json.dumps(result)