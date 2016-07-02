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
                <View style={[styles.flex_column,styles.floorTitle]}>
                    <View style={[styles.flex_row,styles.floorHeaderContainer]}>
                        <View style={[styles.flex_row]}>
                            <Text style={[styles.floorHeader]}>{this.props.houseMagic.groupName}</Text>
                            <View style={[styles.more]}>
                                <TouchableOpacity >
                                    <Text style={{fontSize:12}}>更多</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.flex_column]}></View>
                        </View>
                    </View>
                </View>

                <View style={[styles.flex_row,{flex:2}]}>
                    <View style={[styles.flex_row]}>
                        <TouchableOpacity>
                            <Image source={{uri:this.props.houseMagic.groupAttrList[0].imgPath}} style={[styles.image]}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.flex_column]}>
                    <TouchableOpacity>
                        <Image source={{uri:this.props.houseMagic.groupAttrList[1].imgPath}} style={[styles.bottomImage]}/>
                    </TouchableOpacity>
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
    floorTitle:{
        marginBottom:10
    },
    floorHeaderContainer:{
       justifyContent:'center',
        alignItems:'center',
        paddingRight:10,
        paddingLeft:10
    },
    floorHeader:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        fontSize:15
    },
    more:{
        position: 'absolute',
        top: 0,
        right: 10,
    },
    leftImage:{
        width:Util.size.width/2,
        height:Util.size.height/2-(2*(Util.size.height/2)/4)+8,
        resizeMode:'cover',
        marginRight:3,
        marginBottom:10
    },
    bottomImage:{
        width:Util.size.width,
        resizeMode:'cover',
        height:60
    },
    rightImage1:{
        width:Util.size.width/2,
        height:(Util.size.height/2)/4+5,
        resizeMode:'stretch',
        marginLeft:3
    },
    rightImage2:{
        width:Util.size.width/2,
        height:(Util.size.height/2)/4-1,
        resizeMode:'cover',
        marginLeft:3
    },
    image:{
        width:Util.size.width,
        height:Util.size.height/2-(2*(Util.size.height/2)/4)+8,
        resizeMode:'cover',
        marginRight:3,
        marginBottom:10
    }



});