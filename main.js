
var hours =  0;
var minute = 0;
var second = 0;

var startTimer=function()
{
    secondInt=setInterval(function()
    {
        second=(second>59)?1:(second+1)
        setTo(hours,minute,second);

    },1000);




    minuteInt=setInterval(function()
    {
        minute=(minute>59)?1:(minute+1)
    },1000*60);




    hourInt=setInterval(function()
    {
        hours=(hours>59)?1:(hours+1)
    },1000*60*60);
}

var stopTimer=function()
{
    clearInterval(secondInt);
    clearInterval(minuteInt);
    clearInterval(hourInt);
}
var resetTimer=function()
{
    startTimer();
    hours = 0;
    minute = 0;
    second = 0;
}

var setTo=function(hours,minute,second)
{
    document.getElementById("hour").innerHTML=(hours.length==1)?("0"+hours):hours;
    document.getElementById("minute").innerHTML=(minute.length==1)?("0"+minute):minute;
    document.getElementById("second").innerHTML=(second.length==1)?("0"+second):second;
}







