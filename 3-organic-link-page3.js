var getlink = $("#getlink"),
gotolink = $("#gotolink"),

wr = $("#wr"),
infokeeda = $('#infokeeda');

if (localStorage.getItem('three') !== null) {

wr.removeClass('hidden');
infokeeda.pietimer({
  infokeedaSeconds: 10,
  color: 'var(--linkC)',
  fill: false,
  showPercentage: true,
  callback: function() {
    getlink.prop('disabled', false);
    getlink.removeClass('hidden');
    infokeeda.addClass('hidden');
  }
});
}
function gotolinkcountdown(){
var countDown = 10;
gotolink.removeClass('hidden');
var x = setInterval(function() {
var distance = countDown -= 1;
gotolink.html('<span class="glyphicon glyphicon-time"></span> Please Wait...');
if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
}
}, 1000);
}				

var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 250)
}, 100); 
 
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});	

gotolink.on("click", function() {
  var realurl = localStorage.getItem('three');
  window.location.href = atob(realurl);
  localStorage.removeItem('three');
  
});
	
const allowedDomains = ['www.infokeeda.xyz', 'example.com', 'infokeeda.xyz',]
const currentDomain = window.location.hostname;

if (!allowedDomains.includes(currentDomain)) {
  window.location.href = 'https://cutt.ly/licen';
}
