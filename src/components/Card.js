import React from 'react';
import { View } from 'react-native';

// This is just to look nice and wrap other components around
// with the sole purpose of adding styling to the application
const Card = (props) => 
    //Anytime we passs a component that rewrites another component
    //that component will showup on the props object as props.children
     (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5

    }

};

export { Card };
