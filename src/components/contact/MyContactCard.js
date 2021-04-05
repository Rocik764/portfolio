import React from 'react'
import { Col, Card } from 'react-bootstrap'

function MyContactCard ({ img, title, info, condition }) {
    return (
        <Col>
            <Card>
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex">
                        <div className="align-self-center">
                            <img width={50} height={50} src={img} alt="contact"/>
                        </div>
                        <div className="media-body text-right">
                            <h3>{title}</h3>
                            <span>
                                {condition ? (
                                    <p><a href={info}>{info}</a></p>
                                ) : (
                                    <p>{info}</p>
                                )}
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default MyContactCard
