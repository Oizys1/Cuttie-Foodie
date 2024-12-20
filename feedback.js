function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const formData = new FormData(document.getElementById('feedbackForm'));
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Display the form data in the console (you can replace this with sending the data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Optional: Show a thank you message or redirect
    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset(); // Reset the form fields
}