import { SET_TIMER, SET_WPM } from "../ActionType/ActionType";

// this is the initial state of the storage
const initialState = {
    timer:0,
    WPM:0,
    disable:false
}

export const TimeReducer = (state=initialState, action)=>{
    switch(action.type){

        case SET_WPM:
            const newWPM = (action.payload.typeText.length/5)/(state.timer/60);
            return {...state, WPM:newWPM}

        case SET_TIMER:
            if(state.timer === 59){
                clearInterval(action.payload.clearTimer);
                return {...state, timer:0, disable:true}
            }
            else{
                
                return {...state, timer:state.timer+1}
            }

        default:
            return state;

    }
}