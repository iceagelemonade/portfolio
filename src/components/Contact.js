import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const Contact = () => {

    const defaultForm = {
        firstName: '',
        LastName: '',
        email: '',
        company: '',
        body: '',
        subject: 'Portfolio Form Submission'
    }

    const [contactForm, setContactForm] = useState(defaultForm)

    const handleChange = (evt) => {
        setContactForm(prevForm => {
            const updatedName = evt.target.name
            let updatedValue = evt.target.value
            const updatedForm = { [updatedName]: updatedValue }

            return { ...prevForm, ...updatedForm }
        })
    }


    return (
        <div className='content-window'>
            <h3>Contact Me</h3>
            Thank you for your interest in reaching out to me. Please fill out the email form below, or alternatively you can email me at: bryanjcarr88&#64;gmail.com
            <hr />

            <Form action="https://formspree.io/f/myyagkow" method="POST">
                <div className="row g-3" style={{ maxWidth: '700px' }}>
                    <div className="col">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            placeholder="First Name"
                            name="firstName"
                            id="firstName"
                            value={contactForm.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            value={contactForm.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row g-3" style={{ maxWidth: '700px' }}>
                    <div className="col">
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control
                            placeholder="email@company.com"
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={contactForm.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <Form.Label>Your Company:</Form.Label>
                        <Form.Control
                            placeholder="Company Name"
                            name="company"
                            id="company"
                            required
                            value={contactForm.company}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row g-3" style={{ maxWidth: '700px' }}>
                    <div className="col">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            name="body"
                            id="body"
                            required
                            value={contactForm.body}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
                <input name="subject" defaultValue="Portfolio Form Submission" style={{display: "none"}} />
            </Form>
        </div>
    )
}

export default Contact