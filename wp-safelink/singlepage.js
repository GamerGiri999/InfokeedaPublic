var timer1 = 25,
gotolink = $("#gotolink"),
timer2 = 8;
	
if (document.cookie.includes('twoken')) {
    var dgtimer = document.getElementById('dgtimer');
    var tpTime = document.getElementById('tp-time');

    dgtimer.style.display = 'block';
    tpTime.style.display = 'block';
  }	
	
if (document.cookie.includes('twoken')) {
 var count = timer1;
  var counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count <= 0) {
     document.getElementById('tp-time').style.display = 'none';
            document.getElementById('getlink').style.display = 'block';
         document.getElementById('gotolink').style.display = 'block';

            clearInterval(counter);
            return;
        }
        document.getElementById("tp-time").innerHTML = count+"</br>Seconds";
    }

}

var getlinkButton = document.getElementById('getlink');
var gotolinkElement = document.getElementById('gotolink');
var timerStarted = false; // Flag to track if timer has already started
var countdown; // Variable to hold the countdown interval

// Function to start the countdown timer
function startTimer() {
gotolinkElement.disabled = true;
 var timer = timer2; // 5 seconds
  gotolinkElement.innerHTML = 'Please Wait';

  countdown = setInterval(function() {
    timer--;
    if (timer <= 0) {
      clearInterval(countdown);
      gotolinkElement.innerHTML = 'Go To Link';
      gotolinkElement.disabled = false;
    }
  }, 1500); // 1000ms = 1 second
}


function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

var timerStarted = false;
var element = document.getElementById("gotolink");
var rect = element.getBoundingClientRect();

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust this threshold as needed
};

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      if (!timerStarted) {
        startTimer();
        timerStarted = true;
      }
    }
  });
}, options);

observer.observe(element);


       
    
    



// Event listener for button click
getlinkButton.addEventListener('click', function() {
  gotolinkElement.scrollIntoView({ behavior: 'smooth' });
  
});


	
	
gotolink.on("click",function(){
 var realurl = cookieName;
 window.location.href= realurl;
 });
 
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
