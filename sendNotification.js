function sendNotification(email) {
    const must = '@';
    if (email.includes(must)) {
        email = email.split('@');
        const emailName = email[0] +" sent you and email from " + email[1];
        return emailName;
    }
    else {
        return "Invalid Email.";
    }
}