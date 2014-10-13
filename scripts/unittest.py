from sendemail import index
from printreceipt import index
from getaccountinfo import index
from paybill import index
from setreceipt import index
from sendemail import index
from login import index
import unittest

class ArithTest(unittest.TestCase):
    def runTest(self):
        self.failIf(index(1) == {"resp": "KO"}, "Error")
        self.failUnless(index('December 5, 2014') == {"receiptNo": "NONE", "resp": "KO"}, "Another Error")
        self.failIfEqual(index(1) == [["None"]], "None")
        self.failUnlessEqual(index('pea','12345') == [["1"]], "Error again")  
        self.failIf(index(2,3,60) == {"receiptNo": "NONE", "resp": "Something went wrong"}, "Invalid")
        self.failIf(index(1) == "ok", "Uncorrect")  

def suite():
    suite_=unittest.TestSuite()
    suite_.addTest(ArithTest())
    return suite_

runner=unittest.TextTestRunner()
test_suite=suite()
runner.run(test_suite)