var num1=prompt("enter the value of num1");
num1=parseInt(num1);
var num2=prompt("enter the value of num2");
num2=parseInt(num2);
var num3=prompt("enter the value of num3");
num3=parseInt(num3);
var x=prompt("enter the value of x");
x=parseInt(x);
var y=prompt("enter the value of y");
y=parseInt(y);
var z=prompt("enter the value of z");
z=parseInt(z);




if(num1<num2 && num1<num3)
{   
	if(num2<num3)
	{
		console.log(num1,num2,num3);	
	}
    else
	{
		console.log(num1,num3,num2);	
    }
}
else if(num2<num1 && num2<num3)
{
	if(num1<num3)
	{
		console.log(num2,num1,num3);
	}
	else
	{
		console.log(num2,num3,num1);
	}
}	
else if(num3<num1 && num3<num2)
{
	if(num1<num2)
	{
		console.log(num3,num1,num2);
	}
	else
	{
		console.log(num3,num2,num1);
	}
}




if(x>y && x>z)
{   
	if(y>z)
	{
		console.log(x,y,z);	
	}
    else
	{
		console.log(x,z,y);	
    }
}
else if(y>x && y>z)
{
	if(x>z)
	{
		console.log(y,x,z);
	}
	else
	{
		console.log(y,z,x);
	}
}	
else if(z>num1 && z>y)
{
	if(x>y)
	{
		console.log(z,x,y);
	}
	else
	{
		console.log(z,y,x);
	}
}