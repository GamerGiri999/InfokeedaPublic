if (document.cookie.indexOf("filenames=") !== -1) {
  // Get the value of the "filenames" cookie
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith("filenames="))
    .split('=')[1];

  // Find the <h4> tag with class "fname"
  const h4Element = document.querySelector("h4.fname");

  // Insert the cookie value into the <h4> tag's content
  if (h4Element) {
    h4Element.textContent = cookieValue;
  }

const newContent = document.createElement("div");
newContent.innerHTML = `
  <br/>  
    <div class="alert">
                    <p>
                      <strong>Solution:</strong> If Video Not Playing or Have Multiple Audio Use To Stream In 
                        <b>MX PLAYER</b>
                      </a> or <a href="#" style="color: #f78400">
                        <b> VLC PLAYER</b> or </a>
                      <a href="#" style="color: #7e0dff">
                        <b> Playit PLAYER</b>
                      </a> for better experience.
                    </p> </div>
        <div id="link-content" class="link_content">
          <!-- Your additional HTML content here -->
<div class="button-area-line">
<a id="demo2" onclick="showLinkModal('intent:' + realurl + '#Intent;package=com.mxtech.videoplayer.ad;S.title=' + document.cookie.match('(?<=filenames=)[^;]+') + ';end')" class="block">

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<circle cx="32" cy="32" r="28" fill="#ffeb9b"></circle><circle cx="32" cy="32" r="21" fill="#f9dd8f"></circle><path fill="#8d6c9f" d="M32,6c14.336,0,26,11.664,26,26S46.336,58,32,58S6,46.336,6,32S17.664,6,32,6 M32,4	C16.536,4,4,16.536,4,32s12.536,28,28,28s28-12.536,28-28S47.464,4,32,4L32,4z"></path><path fill="#fff8ee" d="M42.5,31.134l-17-9.815c-0.667-0.385-1.5,0.096-1.5,0.866v19.63c0,0.77,0.833,1.251,1.5,0.866 l17-9.815C43.167,32.481,43.167,31.519,42.5,31.134z"></path><path fill="#8d6c9f" d="M25,43.818c-0.344,0-0.688-0.09-1-0.271c-0.626-0.361-1-1.009-1-1.732v-19.63 c0-0.723,0.374-1.371,1-1.732c0.623-0.362,1.371-0.363,2,0l17,9.815v0c0.626,0.361,1,1.009,1,1.732s-0.374,1.371-1,1.732l-17,9.815 C25.687,43.728,25.343,43.818,25,43.818z M25,22.185v19.63L42,32l0.5-0.866L42,32L25,22.185z"></path><g><path fill="#8d6c9f" d="M53.596,37.162c-0.063,0-0.126-0.006-0.189-0.018l-1.964-0.376 c-0.542-0.104-0.897-0.628-0.794-1.17c0.104-0.542,0.627-0.898,1.171-0.793l1.964,0.376c0.542,0.104,0.897,0.628,0.794,1.17 C54.485,36.829,54.066,37.162,53.596,37.162z"></path><path fill="#8d6c9f" d="M51.997,42.133c-0.139,0-0.28-0.029-0.415-0.091l-1.819-0.832 c-0.502-0.229-0.723-0.823-0.493-1.325c0.229-0.501,0.82-0.726,1.325-0.493l1.819,0.832c0.502,0.229,0.723,0.823,0.493,1.325 C52.739,41.916,52.377,42.133,51.997,42.133z"></path><path fill="#8d6c9f" d="M49.278,46.59c-0.216,0-0.435-0.07-0.618-0.214l-1.571-1.237c-0.434-0.342-0.508-0.97-0.167-1.404 c0.343-0.433,0.97-0.51,1.405-0.167l1.571,1.237c0.434,0.342,0.508,0.97,0.167,1.404C49.867,46.459,49.574,46.59,49.278,46.59z"></path><path fill="#8d6c9f" d="M45.591,50.28c-0.296,0-0.589-0.131-0.787-0.381l-1.237-1.571 c-0.341-0.434-0.267-1.063,0.167-1.404c0.436-0.343,1.063-0.266,1.405,0.167l1.237,1.571c0.341,0.434,0.267,1.063-0.167,1.404 C46.025,50.21,45.807,50.28,45.591,50.28z"></path><path fill="#8d6c9f" d="M41.134,52.998c-0.38,0-0.742-0.217-0.91-0.584l-0.832-1.819c-0.229-0.502-0.009-1.096,0.493-1.325 c0.504-0.233,1.096-0.008,1.325,0.493l0.832,1.819c0.229,0.502,0.009,1.096-0.493,1.325 C41.414,52.969,41.272,52.998,41.134,52.998z"></path><path fill="#8d6c9f" d="M36.161,54.595c-0.47,0-0.89-0.333-0.981-0.812l-0.377-1.964c-0.104-0.542,0.252-1.066,0.794-1.17 c0.54-0.105,1.066,0.251,1.171,0.793l0.377,1.964c0.104,0.542-0.252,1.066-0.794,1.17C36.287,54.589,36.224,54.595,36.161,54.595z"></path></g>
</svg> <br/>Stream MX </a>
 <a id="demo1" onclick="showLinkModal('vlc://' + realurl)" class="block">
<svg style="color: white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VLC media player</title><path d="M12.0319 0c-.8823 0-1.0545.136-1.0545.136-.1738.056-.3556.255-.4105.43L9.683 3.3808c.4729.1729 1.3222.4266 2.2337.4266 1.0987 0 2.017-.3494 2.3763-.5075L13.4352.566c-.055-.1755-.237-.3707-.4067-.4374 0 0-.1142-.1286-.9966-.1286zm3.5645 7.455c-.3601.34-1.3276.9373-3.6797.9373-2.2929 0-3.189-.5678-3.5213-.9113l-1.3887 4.4227c.2272.3614 1.2539 1.5594 4.8847 1.5594 3.7569 0 4.8539-1.3467 5.0649-1.6737zm-8.5897 4.4487l-1.0025 3.1922H4.3428c-.2486 0-.5097.1932-.5826.4315l-2.334 7.6317a.3962.3962 0 0 0-.0169.1537c-.0008.0053-.002.0099-.002.016 0 .0839.0233.226.0233.226.0322.2456.2612.4452.5098.4452h20.1192c.2487 0 .4768-.1994.5098-.4453 0 0 .0234-.142.0234-.226a.0245.0245 0 0 0-.0025-.01.3201.3201 0 0 0 .0024-.0313.4096.4096 0 0 0-.019-.1282l-2.3339-7.6318c-.0729-.2383-.334-.4314-.5826-.4314h-1.6636l.2005.6391c-.2407.4854-1.4886 2.38-6.3027 2.38-4.6003 0-5.8288-1.73-6.1107-2.3072z" fill="white"></path></svg><br> Stream VLC </a>
   <a id="demo2" onclick="showLinkModal('playit://playerv2/video?url=' + realurl + '&title=' + document.cookie.match('(?<=filenames=)[^;]+'))" class="block">


             
                   <svg class="wow animate__animated animate__shakeX animate__delay-1s " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48" id="b"><defs><style>.c{fill:white;stroke:#22abbd;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="c" d="m17,32.5v5c0,2.7614-2.2386,5-5,5h0c-2.7614,0-5-2.2386-5-5"/><path class="c" d="m7,37.5c0-2.7614,2.2386-5,5-5h25c2.2,0,4-1.8,4-4V9.5c0-2.2-1.8-4-4-4H11c-2.2,0-4,1.8-4,4v28"/><path class="c" d="m29.1876,18.467l-9.1448-5.2652c-.822-.4733-1.8482.12-1.8482,1.0685v10.5304c0,.9485,1.0262,1.5418,1.8482,1.0685l9.1448-5.2652c.8237-.4742.8237-1.6628,0-2.137Z"/></svg><br/> Stream Playit </a>
                </div>
           <a id="demo3" onclick="showLinkModal(document.cookie.match('(?<=dest=)[^;]+'))" class="block">
     
                  <i class="fa fa-download"></i> Get Telegram File </a>
<a id="demo3" onclick="showLinkModal(realurl)" class="block">
<i class="fa fa-download"></i> Download File (open in New Tab) </a>
                    
              </div>
        </div>
     `;

// Find the div with class "dlfl"
const dlflDiv = document.querySelector(".dlfl");

// Append the new content to the "dlfl" div
if (dlflDiv) {
  dlflDiv.appendChild(newContent);
}

fetch('https://api.npoint.io/04ae75d90e7322ad5726')
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
  
}
