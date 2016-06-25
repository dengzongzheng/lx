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
import Header from './Header'
import Banner from './Banner'


const banner ={
    "groupAttrList": [
        {
            "id": 88460,
            "name": "家居banner1",
            "title": "新房0佣金",
            "redirectPath": "",
            "desc": "新房0佣金",
            "type": 1,
            "redirectType": 28,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1gib_B4xv1RCvBVdK"
        },
        {
            "id": 88475,
            "name": "二手房banner",
            "title": "服务承诺0佣金0风险0加价",
            "redirectPath": "",
            "desc": "0佣金0风险0加价",
            "type": 1,
            "redirectType": 29,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1H1W_BbhT1RCvBVdK"
        },
        {
            "id": 88466,
            "name": "家装banner",
            "title": "家魔方",
            "redirectPath": "",
            "desc": "",
            "type": 1,
            "redirectType": 7,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1J3h_BCCv1RCvBVdK"
        },
        {
            "id": 88463,
            "name": "家政banner1",
            "title": "服务承诺",
            "redirectPath": "",
            "desc": "",
            "type": 1,
            "redirectType": 6,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1VrW_BsdT1RCvBVdK"
        },
        {
            "id": 88469,
            "name": "家电banner",
            "title": "服务承诺",
            "redirectPath": "",
            "desc": "",
            "type": 1,
            "redirectType": 3,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1llL_ByAv1RCvBVdK"
        },
        {
            "id": 88472,
            "name": "家具banner",
            "title": "服务承诺",
            "redirectPath": "",
            "desc": "",
            "type": 1,
            "redirectType": 4,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1TQb_BChv1RCvBVdK"
        }
    ],
    "groupBlock": "banner",
    "groupName": "APP首页轮播",
    "columNum": 0
};


export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View>
                <Header />
                <Banner banners={banner.groupAttrList}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({



});