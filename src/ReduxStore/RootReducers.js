import { combineReducers } from '@reduxjs/toolkit'
import changeTheNumber from '../Components/Inc_Dec/Redux/reducer'
import Multi_Reducer from '../Components/Multi/Redux/reducer'

const rootReducer = combineReducers({
    changeTheNumber,
    Multi_Reducer,
})

export default rootReducer;