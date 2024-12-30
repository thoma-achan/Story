document.getElementById('password-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    try {
        // Fetch passwords from Password.txt
        const response = await fetch('Password.txt');
        if (!response.ok) throw new Error('Could not load passwords file.');

        const text = await response.text();
        const validPasswords = text.split('\n').map(pw => pw.trim());

        if (validPasswords.includes(password)) {
            localStorage.setItem('authenticated', 'true');
            window.location.href = 'index_1.html';
            localStorage.setItem('username', username);
            if (username === 'ADMIN') {
                localStorage.setItem('role', 'admin');
            } else {
                localStorage.setItem('role', username);
            }

            // Log the username and timestamp to GitHub
            const timestamp = new Date().toISOString();
            const logEntry = `Username: ${username}, Timestamp: ${timestamp}\n`;
            await logToGitHub(logEntry);

        } else {
            message.textContent = 'Invalid password.';
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = 'An error occurred: ' + error.message;
        message.style.color = 'red';
    }
});

// Function to log data to GitHub
async function logToGitHub(logEntry) {
    const GITHUB_REPO = 'Story';
    const GITHUB_OWNER = 'thom-achan';
    const GITHUB_FILE = 'logins.txt';
    const GITHUB_TOKEN = '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'; // Securely handle the token

    const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

    try {
        const getResponse = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        });

        let fileSha = '';
        let fileContent = '';

        if (getResponse.ok) {
            const fileData = await getResponse.json();
            fileSha = fileData.sha;
            fileContent = atob(fileData.content);
        } else if (getResponse.status === 404) {
            fileContent = '';
        } else {
            throw new Error('Failed to fetch file from GitHub.');
        }

        const updatedContent = fileContent + logEntry;

        const updateResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Update login log',
                content: btoa(updatedContent),
                sha: fileSha,
            }),
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update file on GitHub.');
        }

        console.log('Log entry saved to GitHub successfully.');
    } catch (error) {
        console.error('Error logging to GitHub:', error);
    }
}
