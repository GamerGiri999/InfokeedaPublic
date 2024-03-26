window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    // Define slots
    var slot1 = googletag.defineSlot('/23033789617/bottom', [[250,250],[300,250]], 'div-5').addService(googletag.pubads());
    var slot2 = googletag.defineSlot('/23033789617/bottom2', [[250,250],[300,250]], 'div-5').addService(googletag.pubads());

    // Choose a random index
    var randomIndex = Math.floor(Math.random() * 2); // 2 is the number of slots

    // Enable the selected slot
    if (randomIndex === 0) {
        slot1.setCollapseEmptyDiv(true);
        slot1.setForceSafeFrame(true);
        slot1.setCentering(true);
    } else {
        slot2.setCollapseEmptyDiv(true);
        slot2.setForceSafeFrame(true);
        slot2.setCentering(true);
    }

    // Enable other pubads configurations
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);

    // Enable services
    googletag.enableServices();
});
