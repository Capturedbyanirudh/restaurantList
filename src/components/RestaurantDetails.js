import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestaurantOP from './RestaurantOP';
import RestaurantReview from './RestaurantReview'
import { useSelector } from 'react-redux';


function RestaurantDetails() {
  // 1. get Restaurant
  const urlParams = useParams()
  console.log(urlParams.id);


  //2. create state for holding restaurantList
  // const [restaurantList, setRestauranLIst] = useState([])

  //3. api call
  // const fetchData = async () => {
  //   await fetch('/restaurants.json')
  //     .then((data) => data.json())
  //     .then(res => setRestauranLIst(res.restaurants))
  // }

// to fetch updated state from store
  const {restaurantList} = useSelector((state)=>state.restListReducer)
console.log(restaurantList);

  //4. to load items or values when a component is created
  useEffect(() => {
    // fetchData()
  }, [])

  console.log(restaurantList);

  // 5. find restaurant whose id is given in urlParams
  const restaurant = restaurantList.find(item => (
    item.id == urlParams.id
  ))
  console.log(restaurant);


  return (
    <div>
      {restaurant ? (
        <Row className='m-3'>
          <Col md={3}>
            <Image className='border rounded' src={restaurant.photograph} fluid ></Image>
          </Col>
          <Col className='mx-5' md={7}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Cuisine type : {restaurant.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Address : {restaurant.address}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <RestaurantOP op={restaurant.operating_hours} />
              </ListGroup.Item>
              <Row>
                  <RestaurantReview data={restaurant.reviews} />
                </Row>
            </ListGroup>
          </Col>

        </Row>
      ) : 'null'
      }
    </div>
  )
}

export default RestaurantDetails