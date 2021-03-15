var button = document.querySelector("#button");
var inputValue = document.querySelector("#input-value");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp"); 
var humidity = document.querySelector(".humidity");
var windSpeed = document.querySelector(".wind-speed");
var uvi = document.querySelector(".uvi");
var date = document.querySelector(".date");
var icon = document.querySelector(".icon");

//5day forecast day 1

var descOne = document.querySelector(".desc1");
var tempOne = document.querySelector(".temp1"); 
var humidityOne = document.querySelector(".humidity1");
var dateOne = document.querySelector(".date1");

//5day forecast day 2

var descTwo = document.querySelector(".desc2");
var tempTwo = document.querySelector(".temp2"); 
var humidityTwo = document.querySelector(".humidity2");
var dateTwo = document.querySelector(".date2");

//5day forecast day 3

var descThree = document.querySelector(".desc3");
var tempThree = document.querySelector(".temp3"); 
var humidityThree = document.querySelector(".humidity3");
var dateThree = document.querySelector(".date3");

//5day forecast day 4

var descFour = document.querySelector(".desc4");
var tempFour = document.querySelector(".temp4"); 
var humidityFour = document.querySelector(".humidity4");
var dateFour = document.querySelector(".date4");

//5day forecast day 5

var descFive = document.querySelector(".desc5");
var tempFive = document.querySelector(".temp5"); 
var humidityFive = document.querySelector(".humidity5");
var dateFive = document.querySelector(".date5");

// var location = document.querySelector("#location");
// var currentForecast = document.querySelector("#current-forecast");
// var fiveDay = document.querySelector("#five-day-forecast");

// var searchedLocation = location.value.trim();


 
//search from API pull information from api for current day
button.addEventListener("click", function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
+ inputValue.value + 
"&units=imperial&appid=6863cc489412bd0c32deb07c4a56fd5c")
.then(response => response.json())
.then(data => {

var latitude = data['coord']['lat'];
var longitude = data['coord']['lon'];

fetch("http://api.openweathermap.org/data/2.5/onecall?lat=" 
+ latitude + "&lon=" + longitude +
"&units=imperial&exclude=hourly,current,minutely&appid=6863cc489412bd0c32deb07c4a56fd5c")
.then(response => response.json())
.then(data => {

console.log(data)

//current day
var tempValue = data["daily"][0]["temp"]["day"];
var descValue = data["daily"][0]["weather"][0]["description"];
var humidityValue = data["daily"][0]["humidity"];
var dateText = data["daily"][0]['dt'];
var windSpeedValue = data["daily"][0]["wind_speed"];
var uviValue = data["daily"][0]["uvi"];
//var weatherIcon = data["daily"][0]["weather"][0]["icon"]

var correctDate = moment.unix(dateText).format("MM/DD/YYYY");

temp.innerHTML = "Temperature: " + tempValue;
desc.innerHTML = "Current Weather: " + descValue;
humidity.innerHTML = "Humidity: " + humidityValue;
windSpeed.innerHTML = "Wind Speed: " + windSpeedValue;
uvi.innerHTML = "UV Index: " + uviValue;
date.innerHTML = correctDate;
//icon.innerHTML = weatherIcon;

// five day forecast day 1
var tempValueOne = data["daily"][1]["temp"]["day"];
var descValueOne = data["daily"][1]["weather"][0]["description"];
var humidityValueOne = data["daily"][1]["humidity"];
var dateTextOne = data["daily"][1]['dt'];

var correctDateOne = moment.unix(dateTextOne).format("MM/DD/YYYY");

tempOne.innerHTML = "Temperature: " + tempValueOne;
descOne.innerHTML = "Current Weather: " + descValueOne;
humidityOne.innerHTML = "Humidity: " + humidityValueOne;
dateOne.innerHTML = correctDateOne;


// five day forecast day 2
var tempValueTwo = data["daily"][2]["temp"]["day"];
var descValueTwo = data["daily"][2]["weather"][0]["description"];
var humidityValueTwo = data["daily"][2]["humidity"];
var dateTextTwo = data["daily"][2]['dt'];

var correctDateTwo = moment.unix(dateTextTwo).format("MM/DD/YYYY");

tempTwo.innerHTML = "Temperature: " + tempValueTwo;
descTwo.innerHTML = "Current Weather: " + descValueTwo;
humidityTwo.innerHTML = "Humidity: " + humidityValueTwo;
dateTwo.innerHTML = correctDateTwo;


// five day forecast day 3
var tempValueThree = data["daily"][3]["temp"]["day"];
var descValueThree = data["daily"][3]["weather"][0]["description"];
var humidityValueThree = data["daily"][3]["humidity"];
var dateTextThree = data["daily"][3]['dt'];

var correctDateThree = moment.unix(dateTextThree).format("MM/DD/YYYY");

tempThree.innerHTML = "Temperature: " + tempValueThree;
descThree.innerHTML = "Current Weather: " + descValueThree;
humidityThree.innerHTML = "Humidity: " + humidityValueThree;
dateThree.innerHTML = correctDateThree;


// five day forecast day 4
var tempValueFour = data["daily"][4]["temp"]["day"];
var descValueFour = data["daily"][4]["weather"][0]["description"];
var humidityValueFour = data["daily"][4]["humidity"];
var dateTextFour = data["daily"][4]['dt'];

var correctDateFour = moment.unix(dateTextFour).format("MM/DD/YYYY");

tempFour.innerHTML = "Temperature: " + tempValueFour;
descFour.innerHTML = "Current Weather: " + descValueFour;
humidityFour.innerHTML = "Humidity: " + humidityValueFour;
dateFour.innerHTML = correctDateFour;

// five day forecast day 5
var tempValueFive = data["daily"][5]["temp"]["day"];
var descValueFive = data["daily"][5]["weather"][0]["description"];
var humidityValueFive = data["daily"][5]["humidity"];
var dateTextFive = data["daily"][5]['dt'];

var correctDateFive = moment.unix(dateTextFive).format("MM/DD/YYYY");

tempFive.innerHTML = "Temperature: " + tempValueFive;
descFive.innerHTML = "Current Weather: " + descValueFive;
humidityFive.innerHTML = "Humidity: " + humidityValueFive;
dateFive.innerHTML = correctDateFive;

});
});
});

//});

// // //search from API pull information from api for 5 day (day 1)
// button.addEventListener("click", function(){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" 
// + inputValue.value + 
// "&units=imperial&exclude=hourly&appid=6863cc489412bd0c32deb07c4a56fd5c")
// .then(response => response.json())
// .then(data => {
   
    
// })

// .catch(err => alert("Wrong city name"))

// });

// // //search from API pull information from api for 5 day (day 2)

// button.addEventListener("click", function(){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" 
// + inputValue.value + 
// "&units=imperial&appid=6863cc489412bd0c32deb07c4a56fd5c")
// .then(response => response.json())
// .then(data => {
//    console.log(data)
//     var tempValue = data['list'][7]["main"]["temp"];
//     var descValue = data['list'][7]["weather"][0]["description"];
//     var humidityValue = data['list'][7]["main"]["humidity"];
//     var dateText = data['list'][7]['dt_txt'];
    
    
//     tempTwo.innerHTML = "Temperature: " + tempValue;
//     descTwo.innerHTML = "Current Weather: " + descValue;
//     humidityTwo.innerHTML = "Humidity: " + humidityValue;
//     dateTwo.innerHTML = dateText;
// })

// .catch(err => alert("Wrong city name"))

// });

// // //search from API pull information from api for 5 day (day 3)

// button.addEventListener("click", function(){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" 
// + inputValue.value + 
// "&units=imperial&appid=6863cc489412bd0c32deb07c4a56fd5c")
// .then(response => response.json())
// .then(data => {
   
//     var tempValue = data['list'][2]["main"]["temp"];
//     var descValue = data['list'][2]["weather"][0]["description"];
//     var humidityValue = data['list'][2]["main"]["humidity"];
//     var dateText = data['list'][2]['dt_txt'];
    
    
//     tempThree.innerHTML = "Temperature: " + tempValue;
//     descThree.innerHTML = "Current Weather: " + descValue;
//     humidityThree.innerHTML = "Humidity: " + humidityValue;
//     dateThree.innerHTML = dateText;
// })

// .catch(err => alert("Wrong city name"))

// });

// // //search from API pull information from api for 5 day (day 4)

// button.addEventListener("click", function(){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" 
// + inputValue.value + 
// "&units=imperial&appid=6863cc489412bd0c32deb07c4a56fd5c")
// .then(response => response.json())
// .then(data => {
   
//     var tempValue = data['list'][3]["main"]["temp"];
//     var descValue = data['list'][3]["weather"][0]["description"];
//     var humidityValue = data['list'][3]["main"]["humidity"];
//     var dateText = data['list'][3]['dt_txt'];
    
    
//     tempFour.innerHTML = "Temperature: " + tempValue;
//     descFour.innerHTML = "Current Weather: " + descValue;
//     humidityFour.innerHTML = "Humidity: " + humidityValue;
//     dateFour.innerHTML = dateText;
// })

// .catch(err => alert("Wrong city name"))

// });

// // //search from API pull information from api for 5 day (day 5)

// button.addEventListener("click", function(){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" 
// + inputValue.value + 
// "&units=imperial&appid=6863cc489412bd0c32deb07c4a56fd5c")
// .then(response => response.json())
// .then(data => {
   
//     var tempValue = data['list'][4]["main"]["temp"];
//     var descValue = data['list'][4]["weather"][0]["description"];
//     var humidityValue = data['list'][4]["main"]["humidity"];
//     var dateText = data['list'][4]['dt_txt'];
    
    
//     tempFive.innerHTML = "Temperature: " + tempValue;
//     descFive.innerHTML = "Current Weather: " + descValue;
//     humidityFive.innerHTML = "Humidity: " + humidityValue;
//     dateFive.innerHTML = dateText;
// })

// .catch(err => alert("Wrong city name"))

// })