// Code by Nailya Mukhametova
var requests = 1231;

var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentDate);

var addNumberRequests;
var oneHourMS = 3600000;
var timeMS;
var interval;
var numberRequestsToday
var i;

var todayDate = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var todayMonth = months[todayDate.getMonth()];
var todayDay = todayDate.getDate();
var todayYear = todayDate.getFullYear();
var todayFullDate = todayMonth + ' ' + todayDay + ', ' + todayYear + " 00:00:00";

timeMS = oneHourMS * 24;
interval = Math.floor(timeMS / requests);

var startTime = new Date(todayFullDate); // put in the starting date here
var increment = 1; // increase per tick
var startNumber = 0; // initial value when it's the start date

var count;

window.onload = function () {
    var msInterval = interval;
    var now = new Date();
    var output = [];

    count = parseInt((now - startTime)/msInterval) * increment + startNumber;

    var sNumber = count.toString();

    for (var i= 0, len = sNumber.length; i < len; i += 1){
    	output.push(+sNumber.charAt(i));
    }
    for (var j=0; j<=output.length-1; j++) {
    	$('.counter-container').append('<div class="number-box">' + output[j] +'</div>');
    }

    var displayCounter = function (){
    	count += increment;
    	$('.number-box').remove();

    	var output = [];
    	var sNumber = count.toString();
    	for (var i= 0, len = sNumber.length; i < len; i += 1){
    		output.push(+sNumber.charAt(i));
    	}
    	for (var j=0; j<=output.length-1; j++) {
    		$('.counter-container').append('<div class=\"number-box\">' + output[j] +'</div>');
    	}
    }
    setInterval(displayCounter, msInterval);
}
