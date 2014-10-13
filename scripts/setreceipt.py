from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req,accountno,amount):	
    accountno = cgi.escape(accountno)
    amount = cgi.escape(amount)

    x = doSql()
    rets = x.execqry("select * from setReceipt(current_date,"+accountno+","+amount+");", True)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    return json.dumps(result)
	