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
    if (info[0][0] == "None"):
        rets = {'resp':'Something went wrong','receiptNo':'NONE'}
        return json.dumps(rets)
    else:
        balance = info[0][1]
        pldtacct_info  = info[0][1]


    if int(balance) < int(amount):
        rets = {'resp':'Insufficient Funds','receiptNo':'NONE'}
    else:
        rets = x.execqry("select paybill("+accountno+","+pldtacct+","+amount+");",True)
        receipt = x.execqry("select * from setReceipt(current_date,"+accountno+","+amount+");", True)
        rets = {'resp':'OK','receiptNo':receipt[0][0]}

    return json.dumps(rets)























