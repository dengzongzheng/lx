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
import Swiper from 'react-native-swiper';


export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.render = this.render.bind(this);
    }

    render(){

        return (
            <View style={[styles.container]}>
                <View style={[styles.container,styles.flex_row]}>
                    <View style={[styles.flex_row]}>
                        <View style={[styles.floorsContainer]}>
                            <Text style={[styles.titleText]}>{this.props.floos.groupName}</Text>
                            <Text style={[styles.moreText]}>更多</Text>
                        </View>
                    </View>
                    <View></View>
                    <View>
                        <View></View>
                        <View></View>
                    </View>
                    <View></View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        marginTop:10,
        marginBottom:10,

    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    titleText:{
        fontSize:15,
        marginLeft:10
    },
    floorsContainer:{
        borderLeftWidth:5,
        borderLeftColor:'red',
        marginLeft:10,
        height:15
    },
    moreText:{
        
    }
    

});