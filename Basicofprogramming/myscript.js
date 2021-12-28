// 1.You are provided an array A of N size  that contains non-negative integers. Your task is to determine whether the number that is formed by selecting the last digit of all the N numbers is divisible by 10.
function isDivisible(arr, n)
{
    let lastDigit = arr[n - 1] % 10;
    if (lastDigit == 0)
        return true;
    return false;
}
    let arr = [ 10,20,35,45,50 ];
    let n = arr.length;
    if (isDivisible(arr, n))
       console.log("yes");
    else
        console.log("no");
// ---------------------------------------------------------------------------------------------
// 2.You have been given a String S consisting of uppercase and lowercase English alphabets. You need to change the case of each alphabet in this String. That is, all the uppercase letters should be converted to lowercase and all the lowercase letters should be converted to uppercase. You need to then print the resultant String to output.
function convertOpposite(str)
{
    var ln = str.length;
 // Conversion according to ASCII values
    for (var i = 0; i < ln; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            // Convert lowercase to uppercase
            console.log(
            String.fromCharCode(str.charCodeAt(i) - 32)
            );
        else if (str[i] >= 'A' && str[i] <= 'Z')
            // Convert uppercase to lowercase
            console.log(
            String.fromCharCode(str.charCodeAt(i) + 32)
            );
    }
}
var str = "SmIt ThaKKAR";
 
    // Calling the Function
    convertOpposite(str);

// ----------------------------------------------------------------------------------------------
// 3.Alice has the following two types of taxis:

// Online taxi: It can be booked by using an online application from phones 
// Classic taxi: It can be booked anywhere on the road

// The online taxis cost
// for the first  km and for every km afterward. The classic taxis travel at a speed of km per minute. The cost of classic taxis are , , and 

// that represents the base fare, cost for every minute that is spent in the taxi, and cost for each kilometer that you ride.

// You are going to the office from your home. Your task is to minimize the cost that you are required to pay. The distance from your home to the office is D. You are required to select whether you want to use online or classic taxis to go to your office. If both the taxis cost the same, then you must use an online taxi.
var d,oc,of,od,cs,cb,cm,cd,cost1,cost2;
d=13;
oc=6;
of=7;
od=4;
cs=4;
cb= 2;
cm= 1;
cd= 2;
cost1=oc+((d-of)*od);
if(cost1<cost2||cost1==cost2)
      console.log("Online Taxi");
else
     console.log("Classic Taxi");
// -----------------------------------------------------------------------------------------------
