import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { icon } = props;
    return (
        <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.buttonStyle]}>
            {icon}<Text style={[textStyle, props.textStyle]}> {props.description} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        //this rule just applies to this component to behave using flex property
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'grey',
        fontSize: 12,
        fontWeight: '900',
        paddingLeft: 7,
        paddingRight: 7,
        fontFamily: 'Chewy-Regular'
    }
};

export { Button };
