from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json


def index(req, recieptNo):
    recieptNo = cgi.escape(recieptNo)
    x = doSql() 
    rets = x.execqry("select  get_('" + recieptNo + "');",False)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)
		
    return json.dumps(result)