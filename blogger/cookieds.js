
  // Function to check if a cookie exists
// Function to check if a cookie exists
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return true;
        }
    }
    return false;
}

// Function to insert the provided code after the div with id "2"
function insertCodeAfterDiv2() {
    // Create elements for the provided code
    const divWebzeni = document.createElement('div');
    divWebzeni.id = 'webzeni';

    const divTextCenter = document.createElement('div');
    divTextCenter.className = 'text-center';

    const button = document.createElement('button');
    button.className = 'buttondownload hidden';
    button.disabled = true;
    button.id = 'getlink';
    button.innerHTML = 'Double Click Rapidly &#9757;';
    button.onclick = function() {
        vibRate(30);
    };

    // Append elements to the div with id "2"
    const div2 = document.getElementById('2');
    if (div2) {
        div2.insertAdjacentElement('afterend', divWebzeni);
        divWebzeni.appendChild(divTextCenter);
        divTextCenter.appendChild(button);
    }
}

// Check if the "short" cookie is present
if (getCookie('short')) {
    // If the cookie is present, insert the code after the div with id "2"
    insertCodeAfterDiv2();
}



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


