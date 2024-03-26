window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    // Define slots
    var slotDefinitions = [
        { name: '/23033789617/bottom', sizes: [[250,250],[300,250]], divId: 'div-5' },
        { name: '/23033789617/bottom2', sizes: [[250,250],[300,250]], divId: 'div-5' }
    ];

    // Choose a random slot definition
    var randomIndex = Math.floor(Math.random() * slotDefinitions.length);
    var selectedSlot = slotDefinitions[randomIndex];

    // Define the selected slot
    googletag.defineSlot(selectedSlot.name, selectedSlot.sizes, selectedSlot.divId)
               .addService(googletag.pubads());

    // Enable other pubads configurations
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);

    // Enable services
    googletag.enableServices();
});
