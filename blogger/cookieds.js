
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
      <script async='async' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
      <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          googletag.defineSlot('/23033789617/Inarticle', [[970, 90], [250, 250], [300, 250], [336, 280], [750, 100], [980, 120], [250, 360], [320, 480], [960, 90], [980, 90], [320, 50], [930, 180], [200, 200], [750, 300], [750, 200], [970, 66], [950, 90], [320, 100], [480, 320]], 'div-gpt-ad-1711212645310-0').addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        });
      </script>
      <!-- /23033789617/Inarticle -->
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

