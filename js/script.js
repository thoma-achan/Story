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
        fetch('https://ipinfo.io/json?token=YOUR_TOKEN_HERE')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ip-address').innerText = `Your IP Address is: ${data.ip}`;
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
                document.getElementById('ip-address').innerText = 'Unable to fetch IP address.';
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
