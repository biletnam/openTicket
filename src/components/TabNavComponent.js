import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { Tabs } from '../navigation/TabNav.js';

class TabNavComponent extends Component {
    render() {
        return (
            <Tabs
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav 
    };
};

export default connect(mapStateToProps)(TabNavComponent);