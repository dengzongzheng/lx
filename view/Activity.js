'use strict';
import React, {Component} from 'react'
import {
    ActivityIndicatorIOS,
    StyleSheet,
    View,
    ScrollView
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
            <ScrollView>
                <ActivityIndicatorIOS
                    animating={this.state.animating}
                    size="large"
                />
            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({

});