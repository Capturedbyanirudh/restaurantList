import axios from "axios";
import { R_SUCCESS } from "../constants/restaurantConstant";
import {R_FAIL} from "../constants/restaurantConstant";

// define the logic for updating state for a particular component
export const allRestaurants = () => async (dispatch) => {

    try {
        const { data } = await axios.get('/restaurants.json')
        // console.log(data);
        dispatch({
            type: R_SUCCESS,
            payload: data.restaurants

        })
    }
    catch (error) {
        dispatch({
            type: R_FAIL,
            error:error

        })
    }
}