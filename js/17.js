var n = parseInt(prompt("Enter the Number"));
var x = 0;
while(n>0)
{
 rem=n%10;
 x+=rem;
 n=(n-rem)/10;
 if(n%10==0)
 {
    document.write(rem);
 }
 else
 {
document.write(rem+"+");
 }

}
document.write("="+x);
