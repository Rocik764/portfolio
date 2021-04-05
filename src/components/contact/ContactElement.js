import React from "react";
import styled from "styled-components";
import { Col } from 'react-bootstrap'

const AboutElement = ({ title, description, icon, condition }) => {
  return (
    <Col className="py-4">
        <Wrapper>
            <Title>
              {/* <img width="50" height="50" src={icon} alt="title"></img> */}
              {icon}
            </Title>
            <Description>
                <span>
                    {condition ? (
                        <p><a href={description}>{description}</a></p>
                    ) : (
                        <p>{description}</p>
                    )}
                </span>
            </Description>
        </Wrapper>
    </Col>
  );
};

const Wrapper = styled.div`
  height: 200px;
  background-color: #191d2b;
  border: 1px solid #2e344e;
  border-top: 4px solid #2e344e;
  transition: 0.4s ease-in-out;
  &:hover {
    border-top: 4px solid #037fff;

    svg {
      transition: 0.4s ease-in-out;
      fill: #037fff;
    }
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
  padding-top: 3vh;
  line-height: 1.4;
  overflow: hidden;
`

export default AboutElement;