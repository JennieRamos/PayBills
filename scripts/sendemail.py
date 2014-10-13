from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json


def index(req, recieptNo):
    recieptNo = cgi.escape(recieptNo)
    x = doSql() 
    rets = x.execqry("select getReceiptNo('" + recieptNo + "');",False)
  
    for ret in rets:
        stringed = map(str, ret)
    if stringed != "None":
        result = {“resp”: “OK” }
    else:
        result = {“resp”: “KO” }
 
		
    return json.dumps(result)