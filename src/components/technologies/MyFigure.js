import React from 'react'
import { Col, Figure } from 'react-bootstrap'

const MyFigure = ({img, caption}) => {
    return (
        <Col>
            <Figure>
            <Figure.Image
                width={100}
                height={100}
                alt="technology"
                src={img}
            />
            <Figure.Caption>
                {caption}
            </Figure.Caption>
            </Figure>
        </Col>
    )
}

export default MyFigure
