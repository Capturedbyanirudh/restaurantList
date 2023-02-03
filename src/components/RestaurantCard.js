import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({ item }) {
    return (
       <Link to={`/restaurant/${item.id}`} style={{textDecoration:'none', color:'white'}}>
           { /*card design to display cards*/}
            <Card style={{ height :'550px'}} className='my-2 mx-2'>
                <Card.Img className='p-2' variant="top" src={item.photograph} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <p>
                            Cuisine : {item.cuisine_type}
    
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <p>{item.neighborhood}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
       </Link>
       )
}

export default RestaurantCard