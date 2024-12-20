
function orderProduct(productName) {
    let userEmail = prompt('Please enter your email to receive your order details:', '');
    if (userEmail) {
        alert('Thank you for your order of ' + productName + '! Confirmation will be sent to ' + userEmail);
    } else {
        alert('Order cancelled. Please provide your email next time!');
    }
}