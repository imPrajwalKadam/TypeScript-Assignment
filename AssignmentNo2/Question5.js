/*
  Write a typescript program which contains one function named as ChkString. That function accept
  one string and check whether that string contains “Marvellous” word or not.
  Input : “Pune Kothrud Marvellous Infosystems”
  Output : String contains Marvellous in it.
 */
function ChkString(str) {
    var search = "Marvellous";
    if (str.search(search) == -1)
        return true;
    else {
        return false;
    }
}
var BoolRet = null;
var stri = "Pune Kothrud Marvellous Infosystems";
BoolRet = ChkString(stri);
if (BoolRet == true) {
    console.log("String not contain 'Marvellous' Word");
}
else {
    console.log("String contains 'Marvellous' Word");
}
