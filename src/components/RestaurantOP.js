import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function RestaurantOP({ op }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="light text-dark" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <ListGroup>

                        <ListGroup.Item> Monday : {op.Monday}</ListGroup.Item>
                        <ListGroup.Item> Tuesday : {op.Tuesday}</ListGroup.Item>
                        <ListGroup.Item> Wednesday : {op.Wednesday}</ListGroup.Item>
                        <ListGroup.Item> Thursday : {op.Thursday}</ListGroup.Item>
                        <ListGroup.Item> Friday : {op.Friday}</ListGroup.Item>
                        <ListGroup.Item> Saturday : {op.Saturday}</ListGroup.Item>
                        <ListGroup.Item> Sunday : {op.Sunday}</ListGroup.Item>

                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light  text-dark" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default RestaurantOP