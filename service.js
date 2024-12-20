document.querySelectorAll('a.button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = event.target.href;
        alert('You are now viewing: ' + event.target.innerText);
        // To redirect to the product page after the alert
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000); // Redirect after 1 second
    });
});