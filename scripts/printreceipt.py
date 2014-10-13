from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, receiptNo):	
    receiptNo = cgi.escape(receiptNo)
    rets = x.execqry("select * from getReceipt('" + receiptNo + "');", False)
    results = []
    for ret in rets:
        stringed = map(str, ret)
        results.append(stringed)
    if stringed != "None":
        result = {'resp':'OK','receiptNo': results[-1], 'Date' : results[0], 'Account No.': results[1]}
    else:
        result = {'resp':'KO','receiptNo':'NONE'}
    return json.dumps(result)