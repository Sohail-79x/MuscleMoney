document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            messageDiv.textContent = data;
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'Registration failed. Please try again.';
        });
    });
});
