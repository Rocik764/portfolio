import React from "react";
import styled from "styled-components";
import { Col } from 'react-bootstrap'

const AboutMeElement = ({ title, description }) => {
  return (
    <Col className="py-4">
        <Wrapper>
            <Title>{title}</Title>
            <Description>
                {description}
            </Description>
        </Wrapper>
    </Col>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: #191d2b;
  border: 5px solid #2e344e;
  border-top: 4px solid #2e344e;
  transition: 0.3s linear;
  &:hover {
    border: 4px solid #007dff;
  }
`

const Title = styled.h3`
  color: white;
  text-align: center;
  padding-top: 3vh;
  font-size: 2.5rem;
  font-weight: 400;
`

const Description = styled.p`
  color: #a4acc4;
  text-align: center;
  padding: 3vh 3vh 3vh 3vh;
  line-height: 1.4;
  overflow: hidden;
  font-size: 1.5rem;
`

export default AboutMeElement;