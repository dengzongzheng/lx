import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'

'use strict';
import Util from './Util'
import Header from './Header'
import Banner from './Banner'
import TabList from './TabList'
import Floor from './Floor'
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

const tabList= {
    "groupAttrList": [
        {
            "id": 88478,
            "name": "家居",
            "title": "家居",
            "redirectPath": "",
            "desc": "新房二手房租房",
            "type": 1,
            "redirectType": 16,
            "imgPath": "http://image1.jyall.com/v1/tfs/T183J_B4xT1RCvBVdK"
        },
        {
            "id": 88481,
            "name": "家装",
            "title": "家装",
            "redirectPath": "",
            "desc": "家装",
            "type": 1,
            "redirectType": 7,
            "imgPath": "http://image1.jyall.com/v1/tfs/T19sE_BCLT1RCvBVdK"
        },
        {
            "id": 88484,
            "name": "家电",
            "title": "家电",
            "redirectPath": "",
            "desc": "家电大放送",
            "type": 1,
            "redirectType": 3,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1cib_BKxT1RCvBVdK"
        },
        {
            "id": 88487,
            "name": "家具",
            "title": "家具",
            "redirectPath": "",
            "desc": "家具特色活动",
            "type": 1,
            "redirectType": 4,
            "imgPath": "http://image1.jyall.com/v1/tfs/T1kfb_BKbT1RCvBVdK"
        },
        {
            "id": 88490,
            "name": "家政",
            "title": "家政",
            "redirectPath": "",
            "desc": "家政服务",
            "type": 1,
            "redirectType": 6,
            "imgPath": "http://image1.jyall.com/v1/tfs/T17fV_BvCT1RCvBVdK"
        }
    ],
        "groupBlock": "tabList",
        "groupName": "首页tab",
        "columNum": 1
};

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
    }

    render(){
        return (
            <View style={[styles.flex_column]}>
                <Header />
                <ScrollView style={[styles.flex_column]}>
                    <View style={[styles.flex_column]}>
                        <Banner banners={banner.groupAttrList}/>
                        <TabList tabList={tabList.groupAttrList}/>
                    </View>
                    <View style={[styles.flex_column]}>
                        <Floor />
                    </View>
                </ScrollView>
                
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
    }
});