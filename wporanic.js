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
var cookieName = get_cookie("twoken")
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
})
