   document.getElementById('password-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');
        fetch('https://api.ipify.org?format=json')
           .then(response => response.json())
           .then(data => {
            const currentIP = data.ip;
           })
	     
        try {
            const response = await fetch('Password.txt');
            if (!response.ok) throw new Error('Could not load passwords file.');
            const text = await response.text();
            const validPasswords = text.split('\n').map(pw => pw.trim());

            const response = await fetch('ip.txt');
            if (!response.ok) throw new Error('Could not load passwords file.');

            const text = await response.text();
            const validip = text.split('\n').map(pw => pw.trim());
           
            if (validPasswords.includes(password) && validip.includes(currentIP)) {
                localStorage.setItem('authenticated', 'true');
                window.location.href = 'index_1.html';
                localStorage.setItem('username', username);
                if (username === 'ADMIN') {
                    localStorage.setItem('role', 'admin');
                } else {
                    localStorage.setItem('role', username);
                }

            } else {
                message.textContent = 'Invalid password.';
                message.style.color = 'red';
            }
        } catch (error) {
            message.textContent = 'An error occurred: ' + error.message;
            message.style.color = 'red';
        }
    });
