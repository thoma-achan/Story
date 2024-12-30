document.getElementById('password-form').addEventListener('submit', async (e) => {
     e.preventDefault();
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const message = document.getElementById('message');

     try {
         const response = await fetch('Password.txt');
         if (!response.ok) throw new Error('Could not load passwords file.');

         const text = await response.text();
         const validPasswords = text.split('\n').map(pw => pw.trim());

         if (validPasswords.includes(password)) {
             localStorage.setItem('authenticated', 'true');
             localStorage.setItem('username', username);
             if (username === 'ADMIN') {
                 localStorage.setItem('role', 'admin');
             } else {
                 localStorage.setItem('role', username);
             }
            window.location.href = 'index_1.html';
         } else {
             message.textContent = 'Invalid password.';
             message.style.color = 'red';
         }
     } catch (error) {
         message.textContent = 'An error occurred: ' + error.message;
         message.style.color = 'red';
     }
 });
