//  Email
import emailjs from '@emailjs/browser';

export function sendEmail(templateParams: any, isCalling: any) {
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE || "", 
        isCalling, 
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC
    )
    .then(() => console.log("Send Emails"))
    .catch((error: any) => console.error(error))
};
