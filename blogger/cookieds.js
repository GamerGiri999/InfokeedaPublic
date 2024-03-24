
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
