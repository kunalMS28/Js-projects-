const apikey="e099a732c50d1dd9f7982dc8ba1bfd62";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weIcon = document.querySelector(".weather-icon");





async function showWheather(city){
const response =await fetch(apiUrl + city + `&appid=${apikey}`);
if(response.status== 404){
    document.querySelector(".error").style.display="block";

    document.querySelector(".city").innerHTML= " City";
    document.querySelector(".temp").innerHTML= "__°C";
    document.querySelector(".humidity").innerHTML= "__%";
    document.querySelector(".wind").innerHTML= "__km/hr";
}

let data = await response.json();
console.log("data :",data);



 document.querySelector(".city").innerHTML= data.name;
 document.querySelector(".temp").innerHTML= data.main.temp+"°C";
 document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
 document.querySelector(".wind").innerHTML= data.wind.speed+" km/hr";
 

 
//  if(data.weather[0].main == "Snow"){
//     weIcon.src = "images\time_thermometer_snowflake_snow_sun_sunreturns_1456.png" ;
//  }
//  else if(data.weather[0].main == "Thunderstorm"){
//     weIcon.src = "images\weather_thunderstorm_icon_158055.png" ;
//  }
//  else if(data.weather[0].main == "Clear"){
//     weIcon.src = "images\sunny_sun_cloud_weather_cloudy_icon_194267.png" ;
//  }
//  else if(data.weather[0].main == " Atmosphere"){
//     weIcon.src = "images\cloud_haze_icon_185131.png" ;
//  }
//  else{
//     weIcon.src = "images\—Pngtree—a white rain cloud_5624359.png" ;
//  }


}




searchBtn.addEventListener("click",()=>{
    showWheather(searchBox.value);
    document.querySelector(".weather").style.display="block";
    
});



// https://api.openweathermap.org/data/2.5/weather?units=metric&q=Mumbai&appid=e099a732c50d1dd9f7982dc8ba1bfd62