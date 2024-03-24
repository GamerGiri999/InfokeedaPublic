
  // Function to check if a cookie exists
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Check if the cookie named "short" is present
  const shortCookie = getCookie('short');

  // If the cookie is present, insert the code after the button with id "getlink"
  if (shortCookie) {
    const scriptCode = `
      
      <div id='div-gpt-ad-1711212645310-0' style='min-width: 200px; min-height: 50px;'>
        <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1711212645310-0'); });
        </script>
      </div>
    `;

    // Find the button with id "getlink"
    const button = document.getElementById('getlink');

    // Create a temporary element to hold the code
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = scriptCode;

    // Insert the code after the button
    button.parentNode.insertBefore(tempDiv, button.nextSibling);
  }

//

// Check if the cookie named "short" is present
if (document.cookie.indexOf("short") !== -1) {
    // Create the div element with the provided code
    var adDiv = document.createElement('div');
    adDiv.setAttribute('id', 'div-gpt-ad-1711300124662-0');
    adDiv.setAttribute('style', 'min-width: 250px; min-height: 50px;');
    adDiv.innerHTML = `
      <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1711300124662-0'); });
      </script>
    `;
    
    var divBottom = document.getElementById('bottom');
    
    // Insert the created element below the div with id "bottom"
    divBottom.parentNode.insertBefore(adDiv, divBottom.nextSibling);
}
