<script>
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

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Check if button4 is in the viewport
    window.addEventListener("scroll", function() {
      if (isElementInViewport(button4)) {
        button4.disabled = true;
        button4.innerHTML = "Please Wait for 8 seconds";

        setTimeout(function() {
          button4.disabled = false;
          button4.innerHTML = "Your Default Button Text"; // Replace "Your Default Button Text" with the desired default text
        }, 8000);
      }
    });

    // Add click event listener to button4
    button4.addEventListener("click", function() {
      var realurl = cookieName;

      
      button4.disabled = false;
window.location.href = cookieName;
  
        
    });
  }
</script>
