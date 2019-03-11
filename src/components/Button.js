import React from 'react';
import TouchableOpacity from 'react-native';
import PropTypes from 'prop-types';

const Button =({onPress}) =>(
    <TouchableOpacity onPressOut={onPress}>
    
    </TouchableOpacity>
);

Button.propsTypes ={
    onPressOut:PropTypes.func.isRequired,
};

export default Button
