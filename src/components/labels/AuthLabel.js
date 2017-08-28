import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../Card.js';
import { connect } from 'react-redux';
import styles from '../../../styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Confirm } from '../Confirm.js'
import { userSignOut } from '../../actions';

class AuthLabel extends Component {

    /**
     * 
     */
    constructor() {
        super();
        this.state = {
            loggedin: false,
            currentUser: null,
            showModal: false
        }
    }

    /**
     * 
     */
    componentWillReceiveProps(nextProps) {
        if (this.state.loggedin !== nextProps.user.loggedin) {
            this.setState({
                loggedin: !this.state.loggedin
            });
        }
    }

    /**
     * 
     */
    signOutPressed() {
        this.setState({ showModal: true });
    }

    /**
     * 
     */
    onDecline() {
        this.setState({ showModal: false });
    }

    /**
     * 
     */
    onAccept() {
        this.props.userSignOut();
        this.setState({ showModal: false });        
    }

    /**
     * 
     */
    render() {
        if (this.state.loggedin) {
            return (
                <View style={{ marginRight: 15 }}>
                    <TouchableOpacity
                        onPress={this.signOutPressed.bind(this)}
                    >
                        <Icon name='sign-out' color="#d9534f" size={20} />
                    </TouchableOpacity>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        <Text style={styles.loginTextStyle}>
                            Are you sure you want to sign out?
                    </Text>
                    </Confirm>
                </View>
            );
        }

        return null;
    }

}

/**
 * 
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        user: state.users.currentUser
    }
}

/**
 * 
 */
export default connect(mapStateToProps, { userSignOut })(AuthLabel);