import React from 'react'
import { useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from './RestaurantCard';
import {allRestaurants} from '../actions/restaurantListAction';
import { useDispatch , useSelector } from 'react-redux';

function RestaurantList() {
// create state for holding restaurantList
    // const [restaurantList,setRestauranLIst] = useState([])

    // api call
// const fetchData = async ()=>{
//    await fetch('/restaurants.json')
//    .then((data)=>data.json())
//    .then(res=>setRestauranLIst(res.restaurants))
// }

// to use useDispatch hook
const dispatch = useDispatch()

// to fetch updated state from store
const {restaurantList} = useSelector((state)=>state.restListReducer)
console.log(restaurantList);


// to load items or values when a component is created
useEffect(()=>{
    // fetchData()
    // dispatch action
    dispatch(allRestaurants())
},[])


  return (
    <>
   <Row>
      {
      // ResraurantCArd
      restaurantList.map(restaurant=>(
        <Col md={6} lg={4} xl={3}>
        {/*child*/}
        <RestaurantCard item = {restaurant}/>
        </Col>
  
  
      ))
      }
   </Row>
    </>
  )
}

export default RestaurantList