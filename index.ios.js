import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

'use strict';

import Util from './view/util/Util'
import Main from './view/Main'

class lx extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  title:"",
                  component: Main,
                  navigationBarHidden:true
                }}
            />
        );
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('lx', () => lx);
