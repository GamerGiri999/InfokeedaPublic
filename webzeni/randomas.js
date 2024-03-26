window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    // Define multiple slots
    var slots = [
        googletag.defineSlot('/23033789617/bottom', [[250,250],[300,250]], 'div-5'),
        googletag.defineSlot('/23033789617/bottom2', [[250,250],[300,250]], 'div-5'),
        googletag.defineSlot('/23033789617/Inarticle', [[250,250],[300,250]], 'div-5')
    ];

    // Get a random index
    var randomIndex = Math.floor(Math.random() * slots.length);

    // Use the randomly selected slot
    var selectedSlot = slots[randomIndex];

    // Add service and other settings
    selectedSlot.addService(googletag.pubads());

    // Append cloned containers to the DOM
    for (var i = 0; i < slots.length; i++) {
        var container = document.getElementById('div-5');
        var clonedContainer = container.cloneNode(true);
        clonedContainer.id = 'div-5-' + (i + 1); // Assigning a unique ID to each cloned container
        container.parentNode.appendChild(clonedContainer);
        googletag.display(clonedContainer.id);
    }

    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);
    googletag.enableServices();
});
