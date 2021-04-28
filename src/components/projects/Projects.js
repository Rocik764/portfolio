import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TopCards from './Card'
import android from '../../img/android_arduino_project.png'
import springboot from '../../img/spring_shop_online_project.JPG'
import laravel from '../../img/laravel_shop_online_project.JPG'
import springcloud from '../../img/spring_cloud_project.png'
import discordjs from '../../img/discordjs.jpg'
import springJWT from '../../img/spring_jwt_react_project.JPG'
import SPCommercial from '../../img/SP_commercial_project.JPG'
import Title from '../Title/Title'

const Projects = () => {

    return (
        <section id="projects">
            <div className="day-wrapper">
            <Container>
                <Row>
                    <Col>
                        <Title>Non-commercial Projects</Title>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Android Arduino Bluetooth"} img={android} link={"https://github.com/Rocik764/Android_bluetooth_arduino_project"} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Discord js bot"} img={discordjs} link={"https://github.com/Rocik764/Android_bluetooth_arduino_project"} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Laravel shop website"} img={laravel} link={"https://github.com/Rocik764/Laravel---MVC_shop_project"} />
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Spring Boot shop website"} img={springboot} link={"https://github.com/Rocik764/Spring-Boot---MVC_shop_project"} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Spring Cloud microservice"} img={springcloud} link={"https://github.com/Rocik764/spring-cloud-microservice"} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Spring Boot - JWT"} img={springJWT} link={"https://github.com/Rocik764/spring-security-jwt-with-react"} />
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Title>Commercial Projects</Title>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Examination Web App"} img={SPCommercial} link={"https://accesstpm.com/"} />
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default Projects
