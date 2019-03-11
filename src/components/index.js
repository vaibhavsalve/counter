import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import{actionCreators } from './action';

const formateTime = (time) => {
    
        let minutes = Math.floor(time/60);
        
             time -=  minutes * 60;
         let second = parseInt(time % 60 , 10);
        
         return `${minutes<10 ? `0${minutes}` : minutes} : ${
                 second<10 ? `0${second}`:second 
         }`;
}



class Timer  extends  React.Component{
        componentWillReceiveProps(nextprops){
                const currentprops=this.props;
                 if (!currentprops.isPlaying && nextprops.isPlaying) {
                     //start interwal
                    const timerInterval = setInterval(() => {
                             currentprops.addsecond();
                     },1000);
                    this.setState({timerInterval });
                } else if (currentprops.isPlaying && !nextprops.isPlaying){
                             //stop interwal
                        clearInterval(this.state.timerInterval);

                }
        }
    render (){
      
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer } =this.props;
        return (
            <View style= {styles.container}>
                <View style={styles.upper}>
                        <Text style={styles.time}>
                                {formateTime(timerDuration - elapsedTime)}
                        </Text>
                </View>
                <View style={styles.lower}>
                        { !isPlaying && (<Button title= 'start' onPress={startTimer}/>)}
                        { isPlaying && (<Button title='stope' onPress={restartTimer}/>)
                        }
                </View>
                
             </View>
        );
    }
}


const styles =StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#000000',
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    lower:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    time:{
        color:'white',
        fontSize:120,
        fontWeight:'100',
    }
})

const mapStateToProps =(state) =>{
    const { isPlaying, elapsedTime, timerDuration} = state;
    return {
             isPlaying,
             elapsedTime,
             timerDuration
            }
 }

const mapDispatchToProps =(dispatch) => {
    console.log('mapstatetoprops!')
    return{
            startTimer:bindActionCreators(actionCreators.startTimer, dispatch),
            restartTimer:bindActionCreators(actionCreators.restartTimer, dispatch),
            addsecond:bindActionCreators(actionCreators.addsecond, dispatch),
        };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(Timer);