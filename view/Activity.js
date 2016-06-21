'use strict';
import React, {Component} from 'react'
import {
    ActivityIndicatorIOS,
    StyleSheet,
    View
} from 'react-native'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animating:true
        };
    }

    render(){

        return(
            <ActivityIndicatorIOS
               animating={this.state.animating}
               size="large"
            />
        )

    }

}

const styles = StyleSheet.create({

});