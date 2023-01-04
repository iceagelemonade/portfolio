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
        <>
            <h3>Contact Me</h3>
            Thank you for your interest in reaching out to me. Please fill out the email form below, or alternatively you can email me at: bryanjcarr88&#64;gmail.com
            <hr />

            <Form action="https://formspree.io/f/myyagkow" method="POST">
                <div className="row g-3" style={{ maxWidth: '700px' }}>
                    <div className="col">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            placeholder="Who dis?"
                            name="firstName"
                            id="firstName"
                            value={contactForm.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            placeholder="Who dis rly?"
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
                            placeholder="dis-me@dis.gov"
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
                <input name="subject" value="Portfolio Form Submission" style={{display: "none"}} />
            </Form>

            {/* <form action="https://formspree.io/f/myyagkow" method="POST">
                <div className="row g-3" style="max-width: 700px">
                    <div className="col">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder="First name" name="first-name" />
                    </div>
                    <div className="col">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" name="last-name" />
                    </div>
                </div>
                <div className="row g-3" style="max-width: 700px">
                    <div className="col">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input type="email" className="form-control" name="email-address" placeholder="you@email.com" required />
                    </div>
                    <div className="col">
                        <label htmlFor="company" className="form-label">Company Name</label>
                        <input type="text" className="form-control" name="company" placeholder="Company Name" required />
                    </div>
                </div>
                <div className="row g-3" style="max-width: 700px">
                    <div className="col">
                        <label htmlFor="body" className="form-label">Message:</label>
                        <textarea className="form-control" name="body" rows="3" required></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Submit</button>
                <input name="subject" value="Portfolio Form Submission" style="display: none" />
            </form> */}
        </>
    )
}

export default Contact