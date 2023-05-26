if (localStorage.getItem("bloggerweeb")) {
    // Start the countdown timer
    var countdown = pg2timer1; // seconds
    var countdownText = document.getElementById("countdownText");
    var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

    var countdownInterval = setInterval(function() {
      countdown--;
      countdownText.textContent = "Please Wait " + countdown + " seconds";

      if (countdown <= 0) {
        // Show the "Go To Link" button
        countdownText.style.display = "none";
        button3.classList.remove("hidden");
	      button4.classList.remove("hidden");
        clearInterval(countdownInterval);
      }
    }, 1000);
	button3.addEventListener("click", function() {
    button4.scrollIntoView({ behavior: "smooth" });
  });
	
	button4.addEventListener("click", function() {
var realurl = cookieName;


    button4.innerHTML = btn4txt + btn4timer + " seconds";
    button4.disabled = true;

    var countdown = btn4timer;
    var countdownInterval = setInterval(function() {
      countdown--;
      button4.innerHTML = btn4txt + countdown + " seconds";

      if (countdown === 0) {
        clearInterval(countdownInterval);
        window.location.href = cookieName;
      }
    }, 1000);
  });
  }	
 
