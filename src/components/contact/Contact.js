import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { contactData } from "../../data/ContactData";
import Title from '../Title/Title';
import ContactElement from "./ContactElement";

function Contact() {

    const contact = contactData.map((item) => (
        <ContactElement key={item.title} {...item} />
      ));

    return (
        <section className="animated-part-wrapper" id="contact">
            <div className="non-bg-wrapper">
                <Container>
                    <Title>Contact</Title>
                    <Row className="pb-5">{contact}</Row>
                </Container>
            </div>
        </section>
    )
}

export default Contact
