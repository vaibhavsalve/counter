import {START_TIMER,RESTART_TIMER,ADD_SECOND} from './types';

const startTimer = () => { 
    return{
        type : START_TIMER
    };
}

const restartTimer = () => {
    console.log('start button!')
    return {
        type:RESTART_TIMER
    };
}
const addsecond =() =>{
    return{
        type:ADD_SECOND
    };
}

const actionCreators ={
    startTimer,
    restartTimer,
    addsecond
    }

export { actionCreators }