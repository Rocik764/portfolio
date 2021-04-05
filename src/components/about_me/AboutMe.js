import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { aboutMeData } from "../../data/AboutMeData";
import Title from '../Title/Title';
import AboutMeElement from "./AboutMeElement";
import Technologies from '../../components/technologies/Technologies'
const AboutMe = () => {

    const aboutMe = aboutMeData.map((item) => (
        <AboutMeElement key={item.title} {...item} />
    ));
    
    return (
        <section id="about-me">
            <div className="non-bg-wrapper">
                <Container>
                    <Row>
                        <Col>
                        <Title>About</Title>
                        </Col>
                    </Row>
                    <Row>{aboutMe}</Row>
                    <Technologies/>
                </Container>
            </div>
        </section>
    )
}

export default AboutMe
