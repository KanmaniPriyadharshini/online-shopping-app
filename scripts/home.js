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
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(function(position) {
            navigator.geolocation.getCurrentPosition(getLocation,showError);
          },
          function(error) {
            if (error.code == error.PERMISSION_DENIED)
            displayLocality.innerText = "Please allow access to your location to get exciting offers on latest products based on your locality!!!";
          });
        //navigator.geolocation.getCurrentPosition(getLocation,showError);
    }else{
        displayLocality.innerText = "Geolocation is not supported by this browser."
    }
}

function getLocation(data){
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{
        let city = data.city.name;
        let temp = data.list[0].temp.day + " °C";
        let weather = data.list[0].weather[0].description;
        displayLocality.innerText = `The temperature at ${city} is ${temp} and the weather forecast for today is : ${weather}. Wishing you a great day ahead. Make the most out of your life & light it up with nice moments. `;
    });

}

function showError(err){
    switch(err.code) {
        case err.PERMISSION_DENIED:
            displayLocality.innerText = "Please allow access to your location to get exciting offers on latest products based on your locality!!!"
          break;
        case err.POSITION_UNAVAILABLE:
            displayLocality.innerText = "Location information is unavailable."
          break;
        case err.TIMEOUT:
            displayLocality.innerText = "The request to get user location timed out."
          break;
        case err.UNKNOWN_ERROR:
            displayLocality.innerText = "An unknown error occurred."
          break;
      }
}

const changeMode = () => {    
    let myBody = document.body;
    myBody.classList.toggle('darkMode');
    // myBody.classList.toggle('heading');
    if(!dark){
        document.getElementById('darkModeButton').classList.remove('fa-moon');
        document.getElementById('darkModeButton').classList.add('fa-sun');
        document.getElementById('darkModeButton').innerText = ' Light Mode';
        document.getElementById("displayLocality").style.color = 'white';
        document.getElementById("coupon").style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(https://i.ibb.co/JR9w6GH/meesho-Coupon.jpg)';
        document.getElementById("downloadFrame").style.opacity = '0.7';
        document.getElementById("topCategoriesSection").style.opacity = '0.7';
        document.getElementById("partner").style.opacity = '0.7';
        for(i of document.getElementsByClassName("form-floating"))
        {
            i.getElementsByTagName("select")[0].style.backgroundColor = "slategrey";
            i.getElementsByTagName("select")[0].style.color = "white";
            for(j of i.getElementsByTagName("select")[0].getElementsByTagName("option")){
                j.style.backgroundColor = "lightsteelblue";
            }
        }
        for(i of document.getElementsByClassName("accordion-header"))
        {
            for(j of i.getElementsByTagName("button")){
                j.style.backgroundColor = 'slategrey';                
            }
        }
        for(i of document.getElementsByClassName("accordBody"))
        {
            i.style.backgroundColor = 'lightsteelblue';
            for(j of i.getElementsByTagName("div")){
                for(k of j.getElementsByTagName("label")){
                    k.style.color = 'white';
                }
            }
        }
        for(i of document.getElementsByClassName("plainButton"))
        {
            i.style.color = 'white';
        }
        document.getElementById("leftFilterFrame").style.backgroundColor = '#4c4c4c';
        document.getElementById("leftFilterFrameOffcanvas").style.backgroundColor = '#4c4c4c';
        dark=true;
    }
    else{
        document.getElementById('darkModeButton').classList.remove('fa-sun');
        document.getElementById('darkModeButton').classList.add('fa-moon');
        document.getElementById('darkModeButton').innerText = ' Dark Mode';
        document.getElementById("displayLocality").style.color = 'black';
        document.getElementById("coupon").style.backgroundImage = 'url(https://i.ibb.co/JR9w6GH/meesho-Coupon.jpg)';
        document.getElementById("downloadFrame").style.opacity = '1';
        document.getElementById("topCategoriesSection").style.opacity = '1';
        document.getElementById("partner").style.opacity = '1';
        for(i of document.getElementsByClassName("form-floating"))
        {
            i.getElementsByTagName("select")[0].style.backgroundColor = "white";
            i.getElementsByTagName("select")[0].style.color = "grey";
            for(j of i.getElementsByTagName("select")[0].getElementsByTagName("option")){
                j.style.backgroundColor = "white";
            }
        }
        for(i of document.getElementsByClassName("accordion-header"))
        {
            for(j of i.getElementsByTagName("button")){
                j.style.backgroundColor = 'white';                
            }
        }
        for(i of document.getElementsByClassName("accordBody"))
        {
            i.style.backgroundColor = 'white';
            for(j of i.getElementsByTagName("div")){
                for(k of j.getElementsByTagName("label")){
                    k.style.color = 'grey';
                }
            }
        }
        for(i of document.getElementsByClassName("plainButton"))
        {
            i.style.color = 'grey';
        }
        document.getElementById("leftFilterFrame").style.backgroundColor = 'white';
        document.getElementById("leftFilterFrameOffcanvas").style.backgroundColor = 'white';
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
