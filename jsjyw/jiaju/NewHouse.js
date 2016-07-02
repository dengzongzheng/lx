import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native'

'use strict';
import Util from '../Home/Util'


const data = {
    "houseId": 604,
    "realImg": "T1lrW_BbYT1RXrhCrK.jpg",
    "title": "天恒世界集",
    "position": "大兴-西红门",
    "averagePrice": "32000",
    "area": "46-102",
    "tags": [
        {
            "tagName": "LOFT"
        },
        {
            "tagName": "不限购"
        }
    ],
    "privilege": "",
    "ecCoorperate": "5万抵20万",
    "housesLinkage": {
        "houseId": 0,
        "appShow": false,
        "pcShow": false,
        "title": "",
        "appLink": "",
        "pcLink": "",
        "appImage": "",
        "pcImage": ""
    },
    "downPayment": "73.6",
    "addressDetail": "北京市大兴区广平大街与春和路交叉口南150米",
    "longitude": null,
    "latitude": null,
    "introduction": " 天恒世界集项目是天恒集团2015年主力打造的新科住宅项目。总建筑面积186902㎡，其中地上建筑面积121252㎡，地下建筑面积65650㎡，容积率3.0.是西红门区域平层公寓和loft公寓共存的项目。\n *页面中所涉面积，如无特殊说明，均为建筑面积（重庆市项目为套内面积），所涉及装修状况、标准以最终合同为准。 ​",
    "rooms": "1居 2居 3居 "
};

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.navigator.pop();
    }

    renderRow (renderData){
        var tags = [];
        for(var i in renderData.tags){
            var tag = (
                <View key={i} style={[styles.tag]}>
                    <Text style={[styles.tag_text]}>{renderData.tags[i].tagName}</Text>
                </View>
            );
            tags.push(tag);
        }
        return(
            <TouchableOpacity>
                <View style={[styles.container,styles.flex_row]}>
                    <View style={[styles.flex_row,{flex:0.7}]}>
                        <Image source={{uri:Util.tfsGetServer+renderData.realImg}} style={[styles.realImg]}/>
                    </View>
                    <View style={[styles.flex_column]}>
                        <View style={[styles.flex_row]}>
                            <View style={[styles.flex_row]}>
                                <Text style={styles.title} numberOfLines={1}>{renderData.title}</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.price]}>{renderData.averagePrice}元/㎡</Text>
                            </View>
                        </View>
                        <View style={[styles.flex_row]}>
                            <View style={[styles.flex_row]}>
                                <Text style={styles.position} numberOfLines={1}>{renderData.position}</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.area]}>{renderData.area}㎡</Text>
                            </View>
                        </View>
                        <View style={[styles.flex_row]}>
                            {tags}
                        </View>
                        <View style={[styles.flex_row]}>
                            {renderData.ecCoorperate!=""?<View style={[styles.flex_row]}><Text style={[styles.tuan]}>团</Text><Text>{renderData.ecCoorperate}</Text></View>:null}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        var tags = [];
        for(var i in data.tags){
            var tag = (
              <View key={i} style={[styles.tag]}>
                  <Text style={[styles.tag_text]}>{data.tags[i].tagName}</Text>
              </View>
            );
            tags.push(tag);
        }
        return (
                <TouchableOpacity>
                    <View style={[styles.container,styles.flex_row]}>
                        <View style={[styles.flex_row,{flex:0.7}]}>
                            <Image source={{uri:Util.tfsGetServer+data.realImg}} style={[styles.realImg]}/>
                        </View>
                        <View style={[styles.flex_column]}>
                            <View style={[styles.flex_row]}>
                                <View style={[styles.flex_row]}>
                                    <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
                                </View>
                                <View style={[styles.flex_row]}>
                                    <Text style={[styles.price]}>{data.averagePrice}元/㎡</Text>
                                </View>
                            </View>
                            <View style={[styles.flex_row]}>
                                <View style={[styles.flex_row]}>
                                    <Text style={styles.position} numberOfLines={1}>{data.position}</Text>
                                </View>
                                <View style={[styles.flex_row]}>
                                    <Text style={[styles.area]}>{data.area}㎡</Text>
                                </View>
                            </View>
                            <View style={[styles.flex_row]}>
                                {tags}
                            </View>
                            <View style={[styles.flex_row]}>
                                {data.ecCoorperate!=""?<View style={[styles.flex_row]}><Text style={[styles.tuan]}>团</Text><Text>{data.ecCoorperate}</Text></View>:null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        height: (Util.size.height - 120) / 4,
        width: Util.size.width-20,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Util.pixel*2,
        borderBottomColor:'#eee',
        paddingBottom:5
    },
    flex_row: {
        flex: 1,
        flexDirection: 'row'
    },
    flex_column: {
        flex: 1,
        flexDirection: "column"
    },
    realImg: {
        height:(Util.size.height-60)/4-30,
        width:Util.size.width/2-50,
        resizeMode:'cover'
    },
    title:{
        fontSize:15,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    price:{
        fontSize:11,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'flex-start',
        color:'red'
    },
    position:{
        fontSize:15,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    area:{
        fontSize:11,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    tag:{
        height:20,
        padding:5,
        borderWidth:Util.pixel*2,
        borderColor:'black',
        marginLeft:2,
        justifyContent:'center',
        alignItems:'center'
    },
    tag_text:{
        fontSize:11,
        textAlign:'center'
    },
    tuan:{
        color:'white',
        backgroundColor:'red',
        padding:3,
        height:20,
        marginRight:3
    }

});