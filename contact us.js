function showInfo(type) {
    let message = '';
    switch(type) {
        case 'address':
            message = 'Our address is Grand Lafayette Heights, Sta Anastacia, Sto. Tomas, Batangas';
            break;
        case 'phone':
            message = 'You can reach us at 09366824315';
            break;
        case 'email':
            message = 'Contact us via email at maebujatin3@gmail.com';
            break;
        case 'locations':
            message = 'We have two branches: Cuttie Foodie - Cabuyao Branch and Cuttie Foodie - Sto. Tomas Branch';
            break;
        default:
            message = 'More info available!';
    }
    alert(message);
}