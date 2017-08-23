import React from 'react';
import { View } from 'react-native';


export const CardSection = (props) => {
    return (
        <View style={[style.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        //justify content rule applies to align items either vertically or horizontally
        justifyContent: 'flex-start',
        //flex-start defaults the layout of item to the top left of the component
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

