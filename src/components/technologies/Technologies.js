import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import MyFigure from './MyFigure'
import '../../App.css';
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import react from '../../img/react.png'
import bootstrap from '../../img/bootstrap.png'
import java from '../../img/java.png'
import php from '../../img/php.png'
import mysql from '../../img/mysql.png'
import postgresql from '../../img/postgresql.png'
import springboot from '../../img/springboot.png'
import laravel from '../../img/laravel.png'
import git from '../../img/git.png'
import docker from '../../img/docker.png'
import vscode from '../../img/vscode.png'
import intellij from '../../img/intellij.png'
import Title from '../Title/Title';

function Technologies() {

    return (
        <section id="technologies">
                <Row className="pt-5">
                    <Col>
                        <Title>Technologies</Title>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col>
                    <Accordion>
                        <Card className="technologies-card">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Frontend
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <MyFigure img={html} caption={"HTML"}/>
                                        <MyFigure img={css} caption={"CSS"}/>
                                        <MyFigure img={js} caption={"Javascript"}/>
                                        <MyFigure img={react} caption={"React"}/>
                                        <MyFigure img={bootstrap} caption={"Bootstrap"}/>
                                    </Row>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="technologies-card">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Backend
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <MyFigure img={java} caption={"Java"}/>
                                        <MyFigure img={php} caption={"PHP"}/>
                                        <MyFigure img={mysql} caption={"MySQL"}/>
                                        <MyFigure img={postgresql} caption={"Postgresql"}/>
                                    </Row>
                                    <Row>
                                        <MyFigure img={springboot} caption={"Spring Boot"}/>
                                        <MyFigure img={laravel} caption={"Laravel"}/>
                                    </Row>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="technologies-card">
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            Utilities
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <MyFigure img={git} caption={"Git"}/>
                                        <MyFigure img={docker} caption={"Docker"}/>
                                        <MyFigure img={vscode} caption={"Visual Studio Code"}/>
                                        <MyFigure img={intellij} caption={"Intellij"}/>
                                    </Row>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Col>
                </Row>
        </section>
    )
}

export default Technologies
