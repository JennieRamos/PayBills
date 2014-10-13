from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, receiptNo):	
    receiptNo = cgi.escape(receiptNo)
    rets = x.execqry("select * from getReceiptNo('" + receiptNo + "');", False)
    result = []
    for ret in rets:
        stringed = map(str, ret)
    if stringed != "None":
        result = {'resp':'OK','receiptNo':'1234', 'Date' : '10/13/14', 'Account No.': '001-002'}
    else:
        result = {'resp':'KO','receiptNo':'NONE'}
    return json.dumps(result)