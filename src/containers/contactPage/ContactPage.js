import React, { useState } from "react";
import { send } from 'emailjs-com';

import "./contactPage.css";

export const ContactPage = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Areks',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_69ra56e',
            'template_7s22nqm',
            toSend,
            'c10e_HCvmDJdex_7Y'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <section className="form">
                <div>
                    <h2>
                        Shoot me a message:
                    </h2>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Full Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    {/* <input
                        type='text'
                        name='to_name'
                        placeholder='to name'
                        value={toSend.to_name}
                        onChange={handleChange}
                    /> */}
                    <input
                        type='textarea'
                        name='message'
                        placeholder='Whats on your mind?'
                        value={toSend.message}
                        onChange={handleChange}
                        className="text-area"
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
<<<<<<< HEAD
                    <button type='submit'>Submit</button>
=======
                     <button type='submit'>Submit</button> 
>>>>>>> 6a28d8b9b32e2944b423bf2ec6f555466e14b160
                </form>
            </section >
        </div >
    );
};


// export default ContactPage; 
