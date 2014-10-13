from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req,accountno,pldtacct,amount):
    accountno = cgi.escape(accountno)
    pldtacct = cgi.escape(pldtacct)
    amount = cgi.escape(amount)
    x = doSql()
    rets = x.execqry("select * from paybill("+accountno+","+pldtacct+","+amount+");",True)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    return json.dumps(result)

























