import React from 'react'
import { Modal, Carousel } from 'react-bootstrap';

const ModalDetails = (props) => { 

   const details = props.modal.projectDetailsData.map((item) => (
      <Carousel.Item>
         <img src={item.img} alt="cos"></img>
         <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
         </Carousel.Caption>
      </Carousel.Item>
   ));

  return (
      <>
        <Modal show={props.showModal} onHide={props.hideModal} size="xl" centered>
            <Modal.Header closeButton>
               <Modal.Title>{props.modal.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Carousel>
               {details}
            </Carousel>
            </Modal.Body>
        </Modal>
      </>
   );
}

export default ModalDetails