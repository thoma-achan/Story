       function checkAuthentication() {
            if (localStorage.getItem('authenticated') !== 'true') {
                window.location.href = 'index.html';
            }
        }

        function logoutOrRedirect() {
            if (localStorage.getItem('role') !== 'admin') {
		localStorage.removeItem('authenticated');
                window.location.href = 'index.html';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            checkAuthentication();

            // Automatically log out or redirect after 5 seconds (for demo purposes, adjust as needed)
            setTimeout(logoutOrRedirect, 60000);
        });


        // Fetch IP address from the API
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
         const currentIP = data.ip;
	
         // Display the current IP
         document.getElementById('ip-address').textContent = `Your IP Address is: ${currentIP}`;
         })
         .catch(error => {
             document.getElementById('ip-address').textContent = "Unable to fetch IP address.";
             console.error('Error fetching IP:', error);
          });
	var username = localStorage.getItem('role');
        document.getElementById('username').textContent = "Hello " + username + " ! ";
