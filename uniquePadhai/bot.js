if (document.cookie.indexOf("short") !== -1) {
    // Create the elements to be inserted
    var divTextCenter = document.createElement('div');
    divTextCenter.setAttribute('class', 'text-center');
    
    var button1 = document.createElement('button');
    button1.setAttribute('class', 'buttondownload hidden');
    button1.setAttribute('id', 'button2');
    button1.innerHTML = 'Double Click To Get Link';
    
    var button2 = document.createElement('button');
    button2.setAttribute('class', 'buttondownload hidden');
    button2.setAttribute('href', '');
    button2.setAttribute('id', 'btn');
    button2.setAttribute('target', '_blank');
    button2.innerHTML = 'Click This Button Ad To Unlock Link';
    
    var button3 = document.createElement('button');
    button3.setAttribute('class', 'buttondownload hidden');
    button3.setAttribute('disabled', '');
    button3.setAttribute('id', 'gotolink');
    button3.setAttribute('onclick', 'vibRate(30)');
    button3.innerHTML = '👇Double Click For Link👇';
    
    var divAd = document.createElement('div');
    divAd.setAttribute('style', 'display: inline-block; margin: auto;');
    
    var adSlot = document.createElement('div');
    adSlot.setAttribute('class', 'ad-slot');
    
    divAd.appendChild(adSlot);
    
    divTextCenter.appendChild(button1);
    divTextCenter.appendChild(button2);
    divTextCenter.appendChild(button3);
    divTextCenter.appendChild(divAd);
    
    var divBottom = document.getElementById('bottom');
    
    // Insert the created elements below the div with id "bottom"
    divBottom.parentNode.insertBefore(divTextCenter, divBottom.nextSibling);
}
