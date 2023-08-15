fetch('https://api.npoint.io/9cb32504c6a002f95d21')
        .then(response => response.json())
        .then(data => {
         
            const currentDomain = window.location.hostname;
        
            const matchedDomain = data.find(obj => currentDomain === obj.currentDomain || currentDomain.endsWith('.' + obj.currentDomain));
            
            if (!matchedDomain) {
                document.getElementById('centered-content').innerHTML = '<h1>Invalid License Contact Admin For License</h1>';
                setTimeout(function() {
                    window.location.href = 'https://cutt.ly/licen';
                }, 1000); // Redirect after 3 seconds (adjust this value as needed)
            }
            else {
                setTimeout(function() {
                    window.location.href = '/member/dashboard';
                }, 3000);
                }
        });
        
