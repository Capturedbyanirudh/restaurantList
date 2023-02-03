import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function RestaurantReview({ data }) {
    console.log(data);
    const [open, setOpen] = useState(false);
    return (
        <>
            <p>Client Review</p>
            {data.map(client => (
                <Card className='border m-2' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{client.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{client.date}</Card.Subtitle>
                        <Card.Text>
                            Rating : {client.rating}
                        </Card.Text>
                        <Card.Text>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Comments
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">{client.comments}</div>
                            </Collapse>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default RestaurantReview