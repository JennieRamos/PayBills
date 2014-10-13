from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, receiptNo):	
    receiptNo = cgi.escape(receiptNo)
    x = doSql()
    rets = x.execqry("select * from getReceipt('" + receiptNo + "');", False)
    results = []
    items = x.execqry("select accountno from account INNER JOIN receipt on receipt.accountno_FK = \
    account.accountno where receiptNo = '" + receiptNo + "';", False)
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
    return json.dumps(result)