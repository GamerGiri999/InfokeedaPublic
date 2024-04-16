function get_cookie(cookie_name) {
let c_name = cookie_name + "=";
let cookie_decoded = decodeURIComponent(document.cookie);
let cookie_parts = cookie_decoded.split(';');
for(let i = 0; i <cookie_parts.length; i++) {
  let c = cookie_parts[i];
  while (c.charAt(0) == ' ') {
      c = c.substring(1);
  }
  if (c.indexOf(c_name) == 0) {
      return c.substring(c_name.length, c.length);
  }
}
return "";
}
var cookieName = get_cookie("short")
$(document).ready(function(){

$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
} 
else{
return decodeURI(results[1]) || 0;
}
}		

 fetch('https://api.npoint.io/329bf95ac8d32eaf4e11')
  .then(response => response.json())
  .then(data => {
  const currentDomain = window.location.hostname;
  const matchedDomain = data.find(obj => currentDomain === obj.currentDomain || currentDomain.endsWith('.' + obj.currentDomain));
  if (!matchedDomain) {
  document.body.innerHTML = '<h1>Invalid License Contact Admin For License</h1>';
  setTimeout(function() {
  window.location.href = 'https://cutt.ly/licen';
  }, 3000); // Redirect after 3 seconds (adjust this value as needed)
  }
  });
})





var getlink = $("#getlink"),
    finalLinks = [
        "https://uniquepadhai.in/investment-fundamentals-a-comprehensive-beginners-guide/",
         "https://uniquepadhai.in/trade-credit-insurance-mitigating-commercial-risks-in-global-business/",
         "https://uniquepadhai.in/business-interruption-insurance-safeguarding-against-the-unexpected/",
        // Add more final links here if needed
    ],
    finalIndex = Math.floor(Math.random() * finalLinks.length),
    final = finalLinks[finalIndex],
    adlink = 'https://8iqnrdno8.com/Var6953044857720cb75180ed437cd50374495b0fca74?q={KEYWORD}',
    bwtimer = 6000, //search image timer
    scrl1 = 1,
    p2scrl2 = 2000,
    btn2txt = "Redirecting in 10 seconds",
    btn2text = ' Please Wait ', //button2 innerhtml countdown
    scrolltimer = 5, //button2 click scroll to timer 2
    iktimer =  5, //pietimer
    gtlinktimer = 4, //gotolink please wait timer
    gtlinktimer2 = 5, //gotoink scroll to timer2
    gtlinktimertxt = 'Opening Link ',
    plswait2 = ' Please Wait...',
    p2btn2txt = 'Double Click For Link',
    btn2timer = 5, //buutn2 timer
    piecolor = 'var(--linkC)',
    button1 = $("#button1"),
    timer2 = $(".timer2"),
    timer1 = $(".timer1"),
    button2 = $("#button2"),
    btn = $("#btn"),
    gotolink = $("#gotolink"),
    wr = $("#wr"),
    webzeni = $('#webzeni'),
    btn = $('#btn'),
    btnn = $('#getlink'),
    btnn2 = $('#gotolink'),
    adlinkfly = '';



//
var imgadtimer = 5,
timer1div = 5,
timer2last = "Open link";








  
if( cookieName != "" ) {


if (localStorage.getItem('short')) {
webzeni.removeClass('hidden');
webzeni.pietimer({
    timerSeconds: iktimer,
    color: piecolor,
    fill: false,
    showPercentage: true,
    callback: function() {
      getlink.prop('disabled', false);
      getlink.removeClass('hidden');
      webzeni.addClass('hidden');
    }
  });

setInterval(function() {
  if (getCookie('red')) {
    getlink.prop('disabled', false);
    getlink.removeClass('hidden');
    webzeni.addClass('hidden');
document.cookie = "red=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  }
}, 1000);

}






    

    
  
function gotolinkcountdown(){
var countDown = gtlinktimer;
gotolink.removeClass('hidden');
var x = setInterval(function() {

var distance = countDown -= 1;
gotolink.html('<span class="glyphicon glyphicon-time"></span>' + plswait2);

if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span>' + p2btn2txt);
}
}, 1000);
}				

var request = false;
getlink.click(function() {
 
  
  setTimeout(function() {
    $('html, body').animate({
      scrollTop: eval(btnn2.offset().top - 220)
    }, 100);
  }, scrl1);
btnn2.removeClass('hidden');
});

btnn.click(function() {
   if (request === false) {
    gotolinkcountdown();
    request = true;
  }
  setTimeout(function() {
    $('html, body').animate({
      scrollTop: eval(btnn2.offset().top - 220)
    }, 100);
  }, scrl1);
btnn2.removeClass('hidden');
});	

document.getElementById('btn').addEventListener('click', function() {
 
  window.open(adlink, "_blank");
});

gotolink.on("click", function() {
  var realurl = adlinkfly + cookieName;
timer2.removeClass('hidden');
document.cookie = "red=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  var countdown = gtlinktimer2; // Initial countdown value
  // Scroll down to element with class "timer2"
  setTimeout(function() {
    $('html, body').animate({
      scrollTop: eval(timer2.offset().top - 220)
    }, 100);
  }, p2scrl2);

  // Function to update the countdown text
  function updateCountdown() {
    $(".timer2").text(gtlinktimertxt + countdown + " Seconds");
    countdown--;

    if (countdown >= 0) {
      // Call the updateCountdown function after 1 second
      setTimeout(updateCountdown, 1000);
    } else {
      // Countdown reached 0, open the real URL
      var shortCookie = getCookie("short");
      if (shortCookie) {
        var startIndex = shortCookie.indexOf("ravav");
        if (startIndex !== -1) {
          var decodedValue = atob(shortCookie.substring(startIndex + 5));
          window.location.href = decodedValue;
document.querySelector(".timer2").innerHTML = timer2last; // Change the text
      document.querySelector(".timer2").classList.add("button");
document.querySelector(".timer2").setAttribute("href", decodedValue);

        } else {
          window.location.href = realurl;
document.querySelector(".timer2").innerHTML = timer2last; // Change the text
      document.querySelector(".timer2").classList.add("button");
document.querySelector(".timer2").setAttribute("href", realurl);
        }
      } else {
        window.location.href = realurl;
document.querySelector(".timer2").innerHTML = timer2last; // Change the text
      document.querySelector(".timer2").classList.add("button");
document.querySelector(".timer2").setAttribute("href", realurl);
      }
    }
  }

  // Start the countdown
  updateCountdown();
  gotolink.prop('disabled', true);
});

   



// Check the "short" cookie presence
  

if (!localStorage.getItem('short')) {
  timer1.removeClass('hidden');
  // Add your code here to execute when 'short' is not present



// Check if timer1 is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Start the timer from 30 to 0
var countdownTimer;
var countdownSeconds = timer1div;
function startTimer() {
  timer1.removeClass('hidden');
  timer1.text('Please Wait ' + countdownSeconds + ' Seconds');
  countdownTimer = setInterval(function() {
    countdownSeconds--;
    if (countdownSeconds === 0) {
      timer1.addClass('hidden');
      button1.removeClass('hidden');
      clearInterval(countdownTimer);
    }
    timer1.text('Please Wait ' + countdownSeconds + ' Seconds');
  }, 1000);
}

// Start the timer immediately when timer1 is in viewport on mobile devices
if (window.matchMedia('(max-width: 767px)').matches) {
  var timerStarted = false;
  window.addEventListener('scroll', function() {
    if (!timerStarted && isInViewport(timer1[0])) {
      timerStarted = true;
      startTimer();
    }
  });
} else { // Desktop devices
  if (isInViewport(timer1[0])) {
    startTimer();
  }
}

// Start the timer from 5 to 0 if the image with class imgad is clicked
  var timerStarted1 = false;
setInterval(function() {
  if (!timerStarted1 && getCookie('blue')) {
    clearInterval(countdownTimer);
countdownSeconds = imgadtimer;
timerStarted1 = true;
  startTimer();

  }
}, 1000);
}

// Function to retrieve the value of a cookie
function getCookie(name) {
  var cookieName = name + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}









function updateButton() {
  var button = document.getElementById("button2");
  var timerDiv = document.querySelector(".timer2");
  var count = btn2timer;
  timer2.removeClass('hidden');

  // Redirect after 6 seconds
  button.innerHTML = btn2txt;
  button.removeAttribute("href");

  // Function to update both button and timerDiv innerHTML
  function updateInnerText() {
    button.innerHTML = btn2text + count + " seconds";
    timerDiv.innerHTML = btn2text + count + " seconds";
  }

  var countdown = setInterval(function() {
    count--;

if (count === scrolltimer) {
      
      $('html, body').animate({
      scrollTop: eval(timer2.offset().top - 220)
    }, 100);
    
    }
    
    if (count >= 0) {
      // Update the innerHTML of both button and timerDiv
      updateInnerText();
    } else {
      clearInterval(countdown);
      document.cookie = "demo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.setItem('short', 'value');

      window.location.href = final;

      // Update timerDiv content after the redirect (if needed)
      timerDiv.innerHTML = timer2last; // Change the text
      timerDiv.classList.add("button"); // Add the class
      timerDiv.setAttribute("href", final);
    }
  }, 1000);

  // Initial update of both button and timerDiv innerHTML
  updateInnerText();
}


 





// Get cookie by name
function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

// Attach event listener to the button click event
var button = document.getElementById("button2");
button.addEventListener("click", updateButton);


// Function to scroll to the element with id "button2"
function scrollToButton2() {
  var gotolink = $('#button2');
button2.removeClass('hidden');

 setTimeout(function() {
    $('html, body').animate({
      scrollTop: eval(gotolink.offset().top - 220)
    }, 100);
  }, scrl1);
}

// Attach event listener to the button1 click event
var button1 = $('#button1');
button1.on('click', scrollToButton2);


  
  


}

function checkDiv5Style() {
  var div5 = document.getElementById('div-5');
  var gAd = document.getElementById('gad');
  
  // Check if div-5 exists and its style is "display: none"
  if (div5 && getComputedStyle(div5).display === 'none') {
    // Apply styles to .gAd
    gAd.style.display = 'none';
    gAd.style.setProperty('display', 'none', 'important');
    
  }
}

// Call the function every second
setInterval(checkDiv5Style, 1000);
