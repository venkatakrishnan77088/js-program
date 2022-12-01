var num=prompt(" please enter number");
var reverse=0;
document.write("original number:"+num+"<br>");
while(num!=0)
{
reverse=(reverse*10)+(num%10);
num=parseInt(num/10);
}
document.write("reverse number:"+reverse);