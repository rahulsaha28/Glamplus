import { SET_TIMER, SET_WPM } from "../ActionType/ActionType";

// this is the set time function
export const setTime = (clearTimer)=>({
    type:SET_TIMER,
    payload:{
        clearTimer
    }
});

// this is the set wpm function
export const setWPM = (typeText)=>({
    type:SET_WPM,
    payload:{
        typeText
    }
})

