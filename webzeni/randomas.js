  var slots = [
        googletag.defineSlot('/23033789617/bottom', [[250,250],[300,250]], 'div-5'),
        googletag.defineSlot('/23033789617/bottom2', [[250,250],[300,250]], 'div-5')
    ];

    // Choose a random slot index
    var randomIndex = Math.floor(Math.random() * slots.length);

window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    // Define multiple slots
  

    // Use the randomly selected slot
    slots[randomIndex].addService(googletag.pubads());

    // Enable other pubads configurations
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);

    // Enable services
    googletag.enableServices();
});
