 var  image = null,
    bwLinks = [
        'https://uniquepadhai.in/18-wheeler-accident-lawyer/',
       
    ],

      expire = 3;


// Select a random link from bwLinks
bwLink = bwLinks[Math.floor(Math.random() * bwLinks.length)];


const url = window.location.search;

 const data = new URLSearchParams(url)
  var alias = data.get('short')
  console.log(alias)
 if (alias == "" || alias == null) {
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
} else {
  document.cookie = "demo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "red=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "blue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  localStorage.removeItem('short', 'value');
  var date = new Date();
  date.setTime(date.getTime() + (60 * 3000));
  var now = new Date();
  var minutes = expire;
  now.setTime(now.getTime() + (minutes * 60 * 1000));

  document.cookie = "short=" + alias + ";" + "expires=" + now.toUTCString() + ";"

  if (image != null) {
    if (image !== "") {
     document.body.innerHTML = '<center><h1>Click On First Post Of Google Search</h1><img src="' + image + '"></center>';
    }
    setTimeout(function() {
     window.location.href = bwLink;
    }, bwtimer);
  } else {
    window.location.href = bwLink;
  }
}
