import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TopCards from './Card'
import android from '../../img/android_project.jpg'
import springboot from '../../img/springboot.png'
import laravel from '../../img/laravel.png'
import springcloud from '../../img/springcloud.jpg'
import discordjs from '../../img/discordjs.jpg'
import Title from '../Title/Title'
import { androidProjectDetailsData } from "../../data/ProjectDetailsData";
import { springbootProjectDetailsData } from "../../data/ProjectDetailsData";
import { laravelProjectDetailsData } from "../../data/ProjectDetailsData";
import { springcloudProjectDetailsData } from "../../data/ProjectDetailsData";
import { discordjsProjectDetailsData } from "../../data/ProjectDetailsData";
import { projectDetailsData } from "../../data/ProjectDetailsData";

const Projects = props => {

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
                        <TopCards title={"Android"} img={android} modal={{title: "Android", projectDetailsData: androidProjectDetailsData}} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Spring Boot"} img={springboot} modal={{title: "Spring Boot", projectDetailsData: springbootProjectDetailsData}} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Laravel"} img={laravel} modal={{title: "Laravel", projectDetailsData: laravelProjectDetailsData}} />
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Spring Cloud"} img={springcloud} modal={{title: "Spring Cloud", projectDetailsData: springcloudProjectDetailsData}} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Discord js bot"} img={discordjs} modal={{title: "Discord js bot", projectDetailsData: discordjsProjectDetailsData}} />
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Discord js bot"} img={discordjs} modal={{title: "Discord js bot", projectDetailsData: projectDetailsData}} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Title>Commercial Projects</Title>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12" md={6} lg={4}>
                        <TopCards title={"Examination Web App"} img={android} modal={{title: "Examination Web App", projectDetailsData: androidProjectDetailsData}} />
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default Projects
