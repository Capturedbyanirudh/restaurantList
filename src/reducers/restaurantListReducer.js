import { R_SUCCESS, R_FAIL } from "../constants/restaurantConstant";

export const restaurantListReducer = (state={restaurantList:[]},action) => {
    // console.log(action);
    switch (action.type) {
        case R_SUCCESS:
            return {restaurantList:action.payload}
        case R_FAIL:
            return {restaurantList:action.error}
        default:
            return state
    }
}