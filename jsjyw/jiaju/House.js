import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

'use strict';
import Util from '../Home/Util'
import Header from './Header'
import Condition from './Condition'

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View style={[styles.container]}>
                 <Header />
                 <Condition />
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{

    }


});