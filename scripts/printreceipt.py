from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, receipt_id):	
    receipt_id = cgi.escape(receipt_id)
    x = doSql()
    
    rets = x.execqry("select * from getReceiptNo("+receipt_id+")",False)
    result = [];
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    if (rets[0][0] != "None"):
        results = {'resp':'OK','receiptNo': result[0][0], 'Date' : result[0][2], 'Account No.': result[0][1],'Amount':result[0][3]}
    else:
        results = {'resp':'KO','receiptNo':'NONE'}

    return json.dumps(results)