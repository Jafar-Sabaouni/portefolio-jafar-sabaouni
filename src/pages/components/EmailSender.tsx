import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../Contact.module.css";

const EmailSender: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  // keeps count of the mails send
  const [mailCount, setMailCount] = useState(0);

  // check if the user has sent two mails
  const hasSentTwoMails = localStorage.getItem("mailCount") === "2";

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current && !hasSentTwoMails) {
      emailjs.sendForm('service_bbk23t4', 'template_2u7jkwt', form.current, '9xrRiYK0-eVF-5Anq')
        .then((result) => {
          console.log(result.text);
          setMailCount(mailCount + 1);
          localStorage.setItem("mailCount", `${mailCount + 1}`);
        }, (error) => {
          console.log(error.text);
        });
    }else{

    }
  };

  return (
    <>
      {hasSentTwoMails || <form ref={form} onSubmit={sendEmail} className={styles.emailSender}>
        <label>subject</label>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>}
      {hasSentTwoMails &&
        <div className={styles.WarningTextContainer}>
          <p > allert!!!: As a precaution against spamming, you are only allowed to send a maximum of two emails. You have already reached this limit, so it is not possible to send more emails.</p>
        </div>
      }

    </>
  );
};

export default EmailSender;