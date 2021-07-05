import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTime, setWPM } from '../../ReduxStorage/Action/Action';
import { Timer } from '../Timer/Timer';

export const InputBox = () => {

    // get timer, WPM and disable from store
    const { timer, WPM, disable } = useSelector(state=>state.TimeReducer);
    
    const dispatch = useDispatch()

    
    const textInput  = useRef();

    // handel function for changing text in the input
    const handelOnChange = ()=>{
        dispatch(setWPM(textInput.current.value))
        
    };

    // handel function for focusing on the timer
    const handelOnFocus = ()=>{

        const myTimer = setInterval(()=>{
           
            dispatch(setTime(myTimer))
        
        }, 1000);
        
       
        
        
    }

  

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between">
            <div className="mb-3 col-3">
                <Timer timer={timer}/>
            </div>
            <div className="mb-3 col-3">
                WPM: { WPM.toFixed(2) }
            </div>
            </div>
           <div className="mb-3">
               <textarea disabled={disable}  onFocus={handelOnFocus} onChange={handelOnChange} className="form-control" rows="5" ref={textInput} ></textarea>
           </div> 
        </div>
    )
}

