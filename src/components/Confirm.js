import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

/**
 * 
 * @param {*} param0 
 */
const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, cardSectonStyle, textStyle } = styles;
    /**
     * On Android Systems we must pass the onRequestClose property on a modal component.
     */
    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectonStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection style={styles.cardSectonStyle}>
                    <Button
                        onPress={onAccept}
                        description="Yes"
                        buttonStyle={{ padding: 8, marginLeft: 15, backgroundColor: '#0275d8', borderColor: '#0275d8' }}
                        textStyle={{ color: '#fff' }}
                    />

                    <Button
                        onPress={onDecline}
                        description="No"
                        buttonStyle={{ padding: 8, marginLeft: 15, backgroundColor: '#d9534f', borderColor: '#d9534f' }}
                        textStyle={{ color: '#fff' }}
                    />
                </CardSection>
            </View>
        </Modal>
    )
};

const styles = {
    cardSectonStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        justifyContent: 'center',
        flex: 1
    }
};


export { Confirm };