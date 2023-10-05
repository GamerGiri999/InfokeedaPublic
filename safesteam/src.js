const tokenCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('token='));

if (tokenCookie) {
  // If the "token" cookie is present, use its value as the real URL
  var realurl = cookieName;
  
  // Get the video element with id "keeda"
  const keedaVideo = document.getElementById('keeda');

  // Set the src attribute of the video with the real URL
  keedaVideo.setAttribute('src', realurl);
} else {
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

  // If the "token" cookie is not present, use a default URL
  var realurl = "https://vivdisk.pro/50/km_20230522_1080p_60f_20230522_233541.mp4?hash=AgADfA";

  
  // Get the video element with id "keeda"
  const keedaVideo = document.getElementById('keeda');

  // Set the src attribute of the video with the default URL
  keedaVideo.setAttribute('src', realurl);
  

}

