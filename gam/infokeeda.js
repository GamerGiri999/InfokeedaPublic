googletag.cmd.push(function() {
  googletag.defineSlot('/22665103812/alright', [[250,250],[300,250]], 'div-1').
    addService(googletag.pubads());
    
  googletag.defineSlot('/22665103812/alright/Rad2', [[250,250],[300,250]], 'div-2').
    addService(googletag.pubads());
    
  googletag.defineSlot('/22665103812/alright/Rad3', [[250,250],[300,250]], 'div-3').
    addService(googletag.pubads());

googletag.cmd.push(function() {
  googletag.defineSlot('/22665103812/alright/Rad4', [[250,250],[300,250]], 'div-4').
    addService(googletag.pubads());
    
  googletag.defineSlot('/22665103812/alright/Rad5', [[250,250],[300,250]], 'div-5').
    addService(googletag.pubads());
    
  googletag.defineSlot('/22665103812/alright/Rad6', [[250,250],[300,250]], 'div-6').
    addService(googletag.pubads());

googletag.cmd.push(function() {
  googletag.defineSlot('/22665103812/alright/250Real', [[250,250],[300,250]], 'div-7').
    addService(googletag.pubads());
    
  

googletag.pubads().enableLazyLoad({fetchMarginPercent: -1});
          
                 // Register event handlers to observe lazy loading behavior.
                       googletag.pubads().addEventListener(&#39;slotRequested&#39;, function(event) {
                         updateSlotStatus(event.slot.getSlotElementId(), &#39;fetched&#39;);
                       });
               
                       googletag.pubads().addEventListener(&#39;slotOnload&#39;, function(event) {
                         updateSlotStatus(event.slot.getSlotElementId(), &#39;rendered&#39;);
                       });
               
                      googletag.pubads (). setCentering (true);
  googletag.pubads().setTargeting('Test', ['refresh']);
  googletag.enableServices();
});
