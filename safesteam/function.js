function get_cookie(cookie_name) {
let c_name = cookie_name + "=";
let cookie_decoded = decodeURIComponent(document.cookie);
let cookie_parts = cookie_decoded.split(';');
for(let i = 0; i <cookie_parts.length; i++) {
  let c = cookie_parts[i];
  while (c.charAt(0) == ' ') {
      c = c.substring(1);
  }
  if (c.indexOf(c_name) == 0) {
      return c.substring(c_name.length, c.length);
  }
}
return "";
}
var cookieName = get_cookie("token")
$(document).ready(function(){

$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
} 
else{
return decodeURI(results[1]) || 0;
}
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

})
