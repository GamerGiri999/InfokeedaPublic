if (document.cookie.includes('short')) {
  const divElement = document.createElement('div');
  divElement.className = 'gAd';
  divElement.id = 'gad';

  divElement.innerHTML = `
    <div class="gCl">
      <svg class="line" viewbox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      <div class="clDt">Click on the A/d  - Wait 6 Seconds</div>
    </div>

    <div class="gCn">
      <center>
        
  <div id="div-5" class='adx'>
  <script>
    googletag.cmd.push(function() {googletag.display('div-5');});
  </script>
</div>

      </center>
    </div>
  `;

  document.body.appendChild(divElement);
}
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
const twokenCookieValue = getCookie('short');
if (twokenCookieValue !== '') {
const gAd = document.getElementsByClassName('gAd')[0];
const gCl = document.getElementsByClassName('gCl')[0];
const gCn = document.getElementsByClassName('gCn')[0];
const clDt = document.getElementsByClassName('clDt')[0];

gAd.style.position = 'fixed';
gAd.style.zIndex = '99';
gAd.style.top = '0';
gAd.style.right = '0';
gAd.style.bottom = '0';
gAd.style.left = '0';
gAd.style.display = 'flex';
gAd.style.alignItems = 'center';
gAd.style.justifyContent = 'center';
gAd.style.background = 'rgba(0,0,0,.5)';
gAd.style.padding = '15px';

gCl.style.position = 'absolute';
gCl.style.top = '100px';
gCl.style.right = '30px';
gCl.style.width = '30px';
gCl.style.height = '30px';
gCl.style.display = 'flex';
gCl.style.alignItems = 'center';
gCl.style.justifyContent = 'center';
gCl.style.borderRadius = '50%';
gCl.style.background = '#E5E2E8';

gCn.style.width = '100%';
gCn.style.maxWidth = '768px';
gCn.style.minHeight = '180px';
gCn.style.background = '#fff';
gCn.style.padding = '4px';
gCn.style.borderRadius = '8px';
gCn.style.position = 'relative';

clDt.style.position = 'absolute';
clDt.style.top = '30px';
clDt.style.right = '-15px';
clDt.style.background = '#fff';
clDt.style.maxWidth = '300px';
clDt.style.width = '180px';
clDt.style.borderRadius = '10px';
clDt.style.padding = '10px';
clDt.style.fontSize = '13px';
clDt.style.lineHeight = '1.1rem';
clDt.style.boxShadow = '0 0 20px rgba(0,0,0,.07)';
clDt.style.opacity = '0';

clDt.style.transition = 'all .2s ease';

gCl.addEventListener('mouseover', function() {
  clDt.style.opacity = '1';
  clDt.style.visibility = 'visible';
  clDt.style.top = 'calc(30px + 10px)';
});
gCl.addEventListener('mouseout', function() {
  clDt.style.opacity = '0';
  clDt.style.visibility = 'hidden';
});

const svgLine = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgLine.classList.add("line");
svgLine.setAttribute("stroke", "rgba(0,0,0,.8)");
svgLine.setAttribute("stroke-width", "1.5");
svgLine.setAttribute("cursor", "pointer");
gCl.appendChild(svgLine);

const clDtBefore = document.createElement('div');
clDtBefore.style.content = "''";
clDtBefore.style.position = 'absolute';
clDtBefore.style.width = '10px';
clDtBefore.style.height = '10px';
clDtBefore.style.background = '#fff';
clDtBefore.style.top = '-4px';
clDtBefore.style.right = '25px';
clDtBefore.style.transform = 'rotate(45deg)';
clDtBefore.style.borderRadius = '2px';
clDt.appendChild(clDtBefore);



// Function to set a cookie with expiration time
function setCookie(name, value, secondsToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (secondsToExpire * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

// Function to handle visibility change
function handleVisibilityChange() {
  if (document.visibilityState === 'hidden') {
    // User switched tab or minimized the browser
    console.log('User switched tab or minimized the browser');
    // Set the 'demo' cookie here with expiration time of 10 seconds
    setCookie('demo', 'hide', 10);
  } else if (document.visibilityState === 'visible') {
    // User came back to the tab
    console.log('User came back to the tab');
    // Check if 'demo' cookie is not empty
    const demoCookieValue = getCookie('demo');
    if (demoCookieValue !== '') {
      // Execute the JavaScript code to hide the element with ID 'gad'
      document.getElementById('gad').style.display = 'none';
      // Reset the 'demo' cookie
      setCookie('demo', '', -1);
    }
  }
}

// Add event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange, false);

// Check if 'demo' cookie is not empty when the page loads
const demoCookieValue = getCookie('demo');
if (demoCookieValue !== '') {
  // Execute the JavaScript code to hide the element with ID 'gad'
  document.getElementById('gad').style.display = 'none';
  // Reset the 'demo' cookie
  setCookie('demo', '', -1);
}

}


fetch('https://api.npoint.io/0ebf972007249e303d80')
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

