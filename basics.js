var num=5.1;
var res = num*20;

console.log(res);

var num = cal(7,8);
console.log(num);

for(var i=0;i<=6;i++)
{
   

    if(i==4)
    {
     
        continue;
    }

    console.log(typeof i);

}
var k=0;
while(k<5)
{
    console.log("test");
    k++;

}

function  cal(a, b)
{
var res = a+b;
return res;

}