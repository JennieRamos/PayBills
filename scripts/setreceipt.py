from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, date):	
    date = cgi.escape(date)	
    rets = x.execqry("select * from setReceipt('" + date + "');", True)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    return json.dumps(result)
	