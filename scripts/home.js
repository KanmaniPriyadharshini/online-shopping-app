let dark=false;
let audio = document.getElementById("myaudio");
let playPauseBtn = document.getElementById("playPauseBtn");
let music = false;
let displayLocality = document.getElementById("displayLocality");
audio.volume = 0.2;
window.onload = onLoadPage();

function pausePlay(){
    if(music === true){
        audio.pause();
        music = false;
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
    }
    else{
        audio.play();
        music=true;
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');
    }
}

// const couponTimeOut = setTimeout(closeCoupon, 10000);
function onLoadPage(){
    document.getElementById("coupon").style.visibility = 'visible';
    document.getElementById("downloadFrame").style.opacity = '0.5';
    document.getElementById("topCategoriesSection").style.opacity = '0.5';
    hasLocation();
}

function closeCoupon(){
    document.getElementById("coupon").style.visibility = 'hidden';
    document.getElementById("downloadFrame").style.opacity = '1';
    document.getElementById("topCategoriesSection").style.opacity = '1';
}

function hasLocation(){
    console.log("Hiiiiii")
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getLocation);
    }else{
        displayLocality.innerText = "Please turn on your location to get exciting offers on latest products based on your locality!!!"
    }
}

function getLocation(data){
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{
        console.log(data);
        let city = data.city.name;
        let temp = data.list[0].temp.day + " °C";
        let weather = data.list[0].weather[0].description;
        displayLocality.innerText = `The temperature at ${city} is ${temp} and the weather forecast for today is : ${weather}. Wishing you a great day ahead. Make the most out of your life & light it up with nice moments. `;
    });

}

const changeMode = () => {    
    let myBody = document.body;
    myBody.classList.toggle('darkMode');
    // myBody.classList.toggle('heading');
    console.log(document.getElementById('darkModeButton'));
    if(!dark){
        document.getElementById('darkModeButton').classList.remove('fa-moon');
        document.getElementById('darkModeButton').classList.add('fa-sun');
        document.getElementById('darkModeButton').innerText = ' Light Mode';
        document.getElementById("displayLocality").style.color = 'white';
        document.getElementById("coupon").style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(https://i.ibb.co/JR9w6GH/meesho-Coupon.jpg)';        
        dark=true;
    }
    else{
        document.getElementById('darkModeButton').classList.remove('fa-sun');
        document.getElementById('darkModeButton').classList.add('fa-moon');
        document.getElementById('darkModeButton').innerText = ' Dark Mode';
        document.getElementById("displayLocality").style.color = 'black';
        document.getElementById("coupon").style.backgroundImage = 'url(https://i.ibb.co/JR9w6GH/meesho-Coupon.jpg)';
        dark=false;
    }    
}

function showMore() {
    let activeElement = document.activeElement;
    //console.log(activeElement.previousElementSibling);    

    if(activeElement.innerText === "Show more"){
        activeElement.previousElementSibling.style.display = "block";
        activeElement.innerText = "Show less";
    }
    else{
        activeElement.previousElementSibling.style.display = "none";
        activeElement.innerText = "Show more";
    }
    
  }
