window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    // Define multiple slots
    var slots = [
        googletag.defineSlot('/23033789617/bottom', [[250,250],[300,250]], 'div-5'),
        googletag.defineSlot('/23033789617/bottom2', [[250,250],[300,250]], 'div-5')
    ];

    // Shuffle the array of slots
    shuffle(slots);

    // Use the first slot
    slots[0].addService(googletag.pubads());

    // Enable other pubads configurations
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);

    // Enable services
    googletag.enableServices();
});

// Function to shuffle an array
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
