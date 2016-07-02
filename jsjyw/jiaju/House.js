import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

'use strict';
import Util from './Util'

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
                <View>
                    <Text style={[styles.header_title]}>金色家园网</Text>
                </View>
                <TouchableOpacity style={[styles.cityContainer]}>
                    <View>
                        <Text>北京市</Text>
                        <View style={[styles.down]}></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.searchContainer]}>
                    <Image source={require('./images/search/home_search.png')} style={[styles.searchImage]}/>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        height:30,
        marginTop:20,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    header_title:{
        fontSize:15
    },
    searchImage:{

    },
    searchContainer:{
        position:'absolute',
        top:8,
        right:10
    },
    cityContainer:{
        position:'absolute',
        top:8,
        left:10
    },
    down:{
        borderLeftColor:'transparent',
        borderRightWidth:4,
        borderRightColor:'transparent',
        borderTopWidth:5,
        borderLeftWidth:4,
        position:'absolute',
        top:5,
        left:50
    }


});