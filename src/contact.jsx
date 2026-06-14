function ContactPage() {
    return (
        <>
            <div id="contact">
                <div className="contact-form">
                <h2>Contact</h2>
                <p>Feel free to get in touch with me using the form below</p>
                <div >
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                         <p class="hidden">
                            <label>
                            Don’t fill this out if you’re human: <input name="bot-field" type="text" />
                            </label>
                        </p>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit" className="primary-btn btn">Send</button>
                    </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactPage