from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, receiptNo, date):	
    receiptNo = cgi.escape(receiptNo)
    date = cgi.escape(date)	
    rets = x.execqry("select * from setReceipt('" + receiptNo + "','" + date + "');", True)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    return json.dumps(result)
	