timer1 = 20,
  timerColor = '#03a9f4',
  btn2txt = 'Go to Link',
  plswait = 'Please Wait',
  getlink = $("#getlink"),
  gotolink = $("#gotolink"),
  infokeeda = $('#infokeeda');
  

  
  if (document.cookie.includes('twoken')) {
  console.log("Hello")
  infokeeda.pietimer({
  timerSeconds: timer1,
  color: timerColor,
  fill: false,
  showPercentage: true,
  callback: function() {
  getlink.prop('disabled',false);						
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
  gotolink.html('<span class="glyphicon glyphicon-time"></span>' + plswait);
  
  if (distance < 0) {
  clearInterval(x);
  gotolink.prop('disabled',false);
  gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span>' + btn2txt);
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
 scrollTop: eval(gotolink.offset().top - 10)
 }, 100);  
 });	
 
 gotolink.on("click",function(){
 var realurl = cookieName;
 window.location.href= realurl;
 });					
 
