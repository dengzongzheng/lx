import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

'use strict';

import Util from './util/Util'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <View style={[styles.headerContainer]}>
                <View style={[styles.title_container]}>
                    <Text style={[styles.title_text]}>{this.props.title}</Text>
                </View>
                <TouchableOpacity style={[styles.backButton]} onPress={()=>this.props.back()}>
                    <Image source={require('../view/images/back_button.imageset/back_button.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    headerContainer:{
        marginTop:20,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:Util.pixel,
        borderBottomColor:'gainsboro'
    },
    title_container:{
        justifyContent:'center',
        alignItems:'center'
    },
    title_text:{
        fontSize:15,
        fontWeight:'bold'
    },
    backButton:{
        position:'absolute',
        top:8,
        left:10
    }

});