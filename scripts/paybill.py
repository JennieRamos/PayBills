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

    info = x.execqry("select * from accountinfo("+accountno+");",False)
    if (info != "None"):
        rets = {'resp':'Something went wrong','receiptNo':'NONE'}
        return json.dumps(rets)
    else:
        balance = info[0][1]
        pldtacct_info  = info[0][1]


    if int(balance) < int(amount):
        rets = {'resp':'Insufficient Funds','receiptNo':'NONE'}
    else:
        rets = x.execqry("select * from paybill("+accountno+","+pldtacct+","+amount+");",True)
        rets = {'resp':'OK','receiptNo':'1234'}

    return json.dumps(rets)























