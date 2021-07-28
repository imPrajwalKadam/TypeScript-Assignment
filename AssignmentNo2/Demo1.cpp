#include<iostream>
using namespace std;

bool ChkArmstrong(int iNum)
{
     int iDigit = 0, iSum = 0, iCube = 1;
     int temp = iNum;
     int iCnt = 0;

  

     while (temp != 0)
     {

          iDigit = temp % 10;
          
          iCube = iDigit * iDigit * iDigit;
          iSum = iSum + iCube;
          temp = temp / 10;
          cout << iSum << "\n";
     }
     if (iSum == iNum)
     {
          return true;
     }
     else
     {
          return false;
     }
}

int main()
{

     int iNo = 0;
     bool bRet;

     cout << "Enter Number:\n";
     cin >> iNo;

     bRet = ChkArmstrong(iNo);
     if (bRet == true)
     {
          cout << "Armstrong  number";
     }
     else
     {
          cout << "It is not armstrong number";
     }
}