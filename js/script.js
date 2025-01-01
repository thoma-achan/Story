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
        fetch('curl "ipinfo.io/152.59.223.67?token=b8ef37ae6d96aa"')
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





 // Check if the role in localStorage is "Admin"
    if (localStorage.getItem('role') === 'admin') {
      // Create a logout button
      const logoutButton = document.createElement('button');
      logoutButton.textContent = 'Logout';
      logoutButton.id = 'logout-btn';

      // Append the button to the container
      document.getElementById('lgout').appendChild(logoutButton);

      // Add event listener for logout functionality
      logoutButton.addEventListener('click', () => {
        // Clear user-related data from localStorage
        localStorage.removeItem('role');
	localStorage.removeItem('authenticated');
        alert('You have been logged out!');
        // Redirect to a login or home page (optional)
        window.location.href = 'index.html';      
      });
    }
