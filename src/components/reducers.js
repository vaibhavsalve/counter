import {START_TIMER, RESTART_TIMER, ADD_SECOND} from './types';

const TIMER_DURATION = 6;

//initial state
const initial_state = {
    isPlaying:false,
    elapsedTime:0,
    timerDuration:TIMER_DURATION,
}

const applystarttimer= (state)=>{
    
    return{
             ...state,
            isPlaying:true,
    }
}
const  applyrestarttimer=(state)=>{
    return{
             ...state,
            isPlaying:false,
            elapsedTime:0,
            timerDuration:TIMER_DURATION,

    };
}

const applyaddsecond =(state)=>{
    if(state.elapsedTime<TIMER_DURATION)
        return{
                 ...state,
                elapsedTime : state.elapsedTime + 1,
        };
}
//function reduser

const reducer =(state=initial_state, action) => {
    switch (action.type){
        case START_TIMER :
        // handle  the action here using helper function
        return applystarttimer(state);
        case RESTART_TIMER :
        // handle the action here using helper function
        return applyrestarttimer(state);
        case ADD_SECOND : 
        return applyaddsecond(state);
        default:
        return state
    }

}

export default reducer
