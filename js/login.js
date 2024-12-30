


async function saveUserDataToGitHub(username) {
    const token = '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
'; // Replace with your GitHub token
    const owner = thoma-achan'; // Replace with your GitHub username
    const repo = 'Story'; // Replace with your repository name
    const path = 'logins.txt'; // File to store the data
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Fetch the current file (if it exists) to get SHA and content
    let sha = null;
    let existingContent = '';

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        sha = data.sha; // Get the SHA for updating
        existingContent = atob(data.content); // Decode base64 content
    }

    // Add new login data
    const timestamp = new Date().toLocaleString();
    const newContent = existingContent + `Username: ${username}, Timestamp: ${timestamp}\n`;

    // Encode the new content to base64
    const encodedContent = btoa(newContent);

    // Prepare the request body
    const body = {
        message: 'Update login data',
        content: encodedContent,
        sha: sha, // Required if updating an existing file
    };

    // Make the API request to save the data
    const updateResponse = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (updateResponse.ok) {
        console.log('User data saved successfully!');
    } else {
        console.error('Failed to save user data:', await updateResponse.text());
    }
}

// Example usage: Save the username on login
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('role'); // Assume the username is stored in localStorage
    if (username) {
        saveUserDataToGitHub(username); // Save the username and timestamp to GitHub
    }
});
