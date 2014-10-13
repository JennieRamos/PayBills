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
        result.append(stringed)

    return json.dumps(result)
	