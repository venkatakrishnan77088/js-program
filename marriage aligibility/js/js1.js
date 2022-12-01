var name = prompt("Enter the Name");
var age = prompt("Enter the Age");
age = parseInt(age);
var gender = prompt("Enter the Gender");
if(age>=18&&gender=="female")
{
alert("Eligible For Marriage")
}
if(age>=21&&gender=="male")
{
alert("Eligible For Marriage")
}
else
{
alert("Not Eligible For Marriage")
}