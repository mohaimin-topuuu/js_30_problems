/*You know, one email is made up of 2 parts, one is `username 'and the other is' Domain Name'. For example, abmtopu@gmail.com is abmtopu here user name, gmail.com is the domain name.  You have to create a function that will take an email as an input.  The function of the function will be to create a Notification Message, using the `username 'and` domain name' part in the email.
Input: farhan34@yahoo.com
Output: farhan34 sent you an email from yahoo.com
Input: nadim.naem5@outlook.com
Output: nadim.naem5 sent you an email from outlook.com
Input: fahim234.hotmail.com
Output: Invalid Email
Input: sadia8icloud.com
Output: Invalid Email


*/


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


const functionCall = sendNotification(email);

console.log(functionCall);