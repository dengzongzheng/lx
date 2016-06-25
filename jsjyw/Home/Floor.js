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

let houseIntr={
    "groupAttrList": [
        {
            "id": 88448,
            "name": "铂铭郡",
            "title": "铂铭郡",
            "redirectPath": "100",
            "desc": "南北通透",
            "type": 1,
            "redirectType": 22,
            "imgPath": "http://image1.jyall.com/v1/tfs/T18yhTBXVT1RCvBVdK"
        },
        {
            "id": 88451,
            "name": "摩尔公馆",
            "title": "摩尔公馆",
            "redirectPath": "267",
            "desc": "交通便利",
            "type": 1,
            "redirectType": 22,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1pQV_B5Lv1RCvBVdK"
        },
        {
            "id": 88454,
            "name": "北京壹号院",
            "title": "北京壹号院",
            "redirectPath": "545",
            "desc": "交通便利",
            "type": 1,
            "redirectType": 22,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1mQb_BsxT1RCvBVdK"
        },
        {
            "id": 88457,
            "name": "新房0佣金",
            "title": "新房0佣金",
            "redirectPath": "",
            "desc": "新房0佣金",
            "type": 1,
            "redirectType": 28,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1rrW_B4Zv1RCvBVdK"
        }
    ],
    "groupBlock": "houseIntr",
    "groupName": "新房广场",
    "columNum": 2
};
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
                            <Text style={[styles.floorHeader]}>{houseIntr.groupName}</Text>
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
                            <Image source={{uri:houseIntr.groupAttrList[0].imgPath}} style={[styles.leftImage]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flex_column]}>
                        <View style={[styles.flex_column]}>
                            <TouchableOpacity>
                                <Image source={{uri:houseIntr.groupAttrList[1].imgPath}} style={[styles.rightImage1]}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.flex_column]}>
                            <TouchableOpacity>
                                <Image source={{uri:houseIntr.groupAttrList[2].imgPath}} style={[styles.rightImage2]}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.flex_column]}>
                    <TouchableOpacity>
                        <Image source={{uri:houseIntr.groupAttrList[3].imgPath}} style={[styles.bottomImage]}/>
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
        height:80
    },
    rightImage1:{
        width:Util.size.width/2,
        height:(Util.size.height/2)/4+5,
        resizeMode:'cover',
        marginLeft:3
    },
    rightImage2:{
        width:Util.size.width/2,
        height:(Util.size.height/2)/4,
        resizeMode:'cover',
        marginLeft:3
    }



});