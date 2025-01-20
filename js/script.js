document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill in both username and password.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('The username must be a valid email address.');
        return;
    }

    const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passRegex.test(password)) {
        alert('Password must be at least 8 characters long and include at least one number, one lowercase letter, and one uppercase letter.');
        return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
});
