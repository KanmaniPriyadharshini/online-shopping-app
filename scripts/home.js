let dark=false;
window.onload = onLoadPage();

// const couponTimeOut = setTimeout(closeCoupon, 10000);
function onLoadPage(){
    document.getElementById("coupon").style.visibility = 'visible';
    document.getElementById("downloadFrame").style.opacity = '0.5';
    document.getElementById("topCategoriesSection").style.opacity = '0.5';
}

function closeCoupon(){
    document.getElementById("coupon").style.visibility = 'hidden';
    document.getElementById("downloadFrame").style.opacity = '1';
    document.getElementById("topCategoriesSection").style.opacity = '1';
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
        dark=true;
    }
    else{
        document.getElementById('darkModeButton').classList.remove('fa-sun');
        document.getElementById('darkModeButton').classList.add('fa-moon');
        document.getElementById('darkModeButton').innerText = ' Dark Mode';
        dark=false;
    }    
}

function showMore() {
    // var dots = document.getElementById("dots");
    
    /*var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    console.log();
  
    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more"; 
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less"; 
    //   moreText.style.display = "inline";
    // }

    if(moreText.style.display === "none"){
        moreText.style.display = "block";
        btnText.innerHTML = "Show less";
    }
    else{
        moreText.style.display = "none";
        btnText.innerHTML = "Show more";
    }*/
    
  }
