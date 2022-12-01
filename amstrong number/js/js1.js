var number=prompt("please enter a number");
var temp=number;
var sum=0;
while(temp>0)
{
var digit=temp%10;

sum+=digit**3;

temp=parseInt(temp/10);
}
if(sum==number)
{
	document.write(' armstrong number');	
}
else
{
	document.write(' not armstrong number');	
}