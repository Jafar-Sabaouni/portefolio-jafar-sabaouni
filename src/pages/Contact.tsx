import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import EmailSender from "./components/EmailSender"
import styles from "./Contact.module.css";

const Contact = ()=>{
    return (
<main className={styles.ConatctContainer}>
    <div  className={styles.IntroTextContainer}>
    <h1>Contact</h1>
    <p>Thank you for visiting my portfolio website! If you have any questions or would like to get in touch, the only way to contact me is through the email contact form provided on the contact page. This is to prevent any potential scams or spam emails. Please note that you can send a maximum of 2 emails. I look forward to hearing from you and discussing any opportunities or projects you may have in mind. Please do not hesitate to send me a message and I will get back to you as soon as possible. Thank you again for visiting, and I hope to hear from you soon!</p>
    </div>
    <div>
        <EmailSender/>
    </div>

</main>)
}
export default Contact;