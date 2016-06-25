import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    NavigatorIOS,
    Navigator
} from 'react-native'

'use strict';

import Util from './util/Util'
import Header from './Header'
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Activity from './Activity'


export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            lxs:[
                {
                    key:0,
                    title:"活动指示器",
                    component: Activity,
                    isFA: false,
                    icon: "ios-stopwatch",
                    size: 48,
                    color: "#ff856c",
                    hideNav: false,
                },{
                    key:1,
                    title:"A weather app",
                    component: '',
                    isFA: false,
                    icon: "ios-partlysunny",
                    size:60,
                    color:"#90bdc1",
                    hideNav: true,
                },{
                    key:2,
                    title:"twitter",
                    component: '',
                    isFA: false,
                    icon: "social-twitter",
                    size:50,
                    color:"#2aa2ef",
                    hideNav: true,
                },{
                    key:3,
                    title:"cocoapods",
                    component: '',
                    isFA: true,
                    icon: "contao",
                    size:50,
                    color:"#FF9A05",
                    hideNav: false,
                },{
                    key:4,
                    title:"find my location",
                    component: '',
                    isFA: false,
                    icon: "ios-location",
                    size:50,
                    color:"#00D204",
                    hideNav: false,
                },{
                    key:5,
                    title:"Spotify",
                    component: '',
                    isFA: true,
                    icon: "spotify",
                    size:50,
                    color:"#777",
                    hideNav: true,
                },{
                    key:6,
                    title:"Moveable Circle",
                    component: '',
                    isFA: false,
                    icon: "ios-baseball",
                    size:50,
                    color:"#5e2a06",
                    hideNav: true,
                },{
                    key:7,
                    title:"Swipe Left Menu",
                    component: '',
                    isFA: true,
                    icon: "google",
                    size:50,
                    color:"#4285f4",
                    hideNav: true,
                },{
                    key:8,
                    title:"Twitter Parallax View",
                    component: '',
                    isFA: false,
                    icon: "social-twitter-outline",
                    size:50,
                    color:"#2aa2ef",
                    hideNav: true,
                },{
                    key:9,
                    title:"Tumblr Menu",
                    component: '',
                    isFA: false,
                    icon: "social-tumblr",
                    size:50,
                    color:"#37465c",
                    hideNav: true,
                },{
                    key:10,
                    title:"OpenGL",
                    component: '',
                    isFA: false,
                    icon: "contrast",
                    size:50,
                    color:"#2F3600",
                    hideNav: false,
                },{
                    key:11,
                    title:"charts",
                    component: '',
                    isFA: false,
                    icon: "stats-bars",
                    size:50,
                    color:"#fd8f9d",
                    hideNav: false,
                },{
                    key:12,
                    title:"tweet",
                    component: '',
                    isFA: false,
                    icon: "chatbox-working",
                    size:50,
                    color:"#83709d",
                    hideNav: true,
                },{
                    key:13,
                    title:"tinder",
                    component: '',
                    isFA: false,
                    icon: "fireball",
                    size:50,
                    color:"#ff6b6b",
                    hideNav: true,
                },{
                    key:14,
                    title:"Time picker",
                    component: '',
                    isFA: false,
                    icon: "ios-calendar-outline",
                    size:50,
                    color:"#ec240e",
                    hideNav: false,
                },{
                    key:15,
                    title:"Gesture unlock",
                    component: '',
                    isFA: false,
                    icon: "unlocked",
                    size:50,
                    color:"#32A69B",
                    hideNav: true,
                },{
                    key:16,
                    title:"Fuzzy search",
                    component: '',
                    isFA: false,
                    icon: "search",
                    size:50,
                    color:"#69B32A",
                    hideNav: false,
                },{
                    key:17,
                    title:"Sortable",
                    component: '',
                    isFA: false,
                    icon: "arrow-move",
                    size:50,
                    color:"#68231A",
                    hideNav: true,
                },{
                    key:18,
                    title:"TouchID to unlock",
                    component: '',
                    isFA: false,
                    icon: "log-in",
                    size:50,
                    color:"#fdbded",
                    hideNav: true,
                },{
                    key:19,
                    title:"Single page Reminder",
                    component: '',
                    isFA: false,
                    icon: "ios-list-outline",
                    size:50,
                    color:"#68d746",
                    hideNav: true,
                },{
                    key:20,
                    title:"Multi page Reminder",
                    component: '',
                    isFA: false,
                    icon: "ios-paper-outline",
                    size:50,
                    color:"#fe952b",
                    hideNav: true,
                },{
                    key:21,
                    title:"Google Now",
                    component: '',
                    isFA: false,
                    icon: "android-microphone",
                    size:50,
                    color:"#4285f4",
                    hideNav: true,
                },{
                    key:22,
                    title:"Local WebView",
                    component: '',
                    isFA: true,
                    icon: "safari",
                    size:50,
                    color:"#23bfe7",
                    hideNav: false,
                },{
                    key:23,
                    title:"Youtube scrollable tab",
                    component: '',
                    isFA: false,
                    icon: "social-youtube",
                    size:50,
                    color:"#e32524",
                    hideNav: true,
                },{
                    key:24,
                    title:"custome in-app browser",
                    component: '',
                    isFA: false,
                    icon: "ios-world",
                    size:50,
                    color:"#00ab6b",
                    hideNav: true,
                },{
                    key:25,
                    title:"swipe and switch",
                    component: '',
                    isFA: false,
                    icon: "shuffle",
                    size:50,
                    color:"#893D54",
                    hideNav: true,
                },{
                    key:26,
                    title:"iMessage Gradient",
                    component: '',
                    isFA: false,
                    icon: "ios-chatbubble",
                    size:50,
                    color:"#248ef5",
                    hideNav: false,
                },{
                    key:27,
                    title:"iMessage image picker",
                    component: '',
                    isFA: false,
                    icon: "images",
                    size:50,
                    color:"#f5248e",
                    hideNav: true,
                },{
                    key:28,
                    title:"iMessage image picker",
                    component: '',
                    isFA: false,
                    icon: "navicon-round",
                    size:50,
                    color:"#48f52e",
                    hideNav: false,
                },{
                    key:29,
                    title:"Push Notifications",
                    component: '',
                    isFA: false,
                    icon: "android-notifications",
                    size:50,
                    color:"#f27405",
                    hideNav: false,
                }
            ]
        };
        this._jumpTo = this._jumpTo.bind(this);
    }

    _jumpTo(index){
        this.props.navigator.push({
            name:'activity',
            component:this.state.lxs[index].component
        });
    }


    render(){

        let that = this;
        var boxs = this.state.lxs.map(function (elem,index) {
            return (
                <TouchableOpacity key={elem.key} onPress={()=>that._jumpTo(index)} style={[styles.touch_Container,styles.flex_row,index%2==2?styles.touchBox2:styles.touchBox1]}>
                    <View style={[styles.boxContainer]}>
                        <Text style={[styles.boxTitle]} numberOfLines={1}>{elem.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        });

        return (
            <ScrollView>
                <Header/>
                <Swiper height={80} showsButtons={false} autoplay={true}>
                    <TouchableOpacity>
                      <View style={[styles.flex_row]}>
                          <Image source={{uri:'http://image1.jyall.com/v1/tfs/T1llL_ByAv1RCvBVdK'}} style={[styles.image]}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.flex_row]}>
                            <Image source={{uri:'http://dimg04.c-ctrip.com/images/700p050000000ssyg9F07_750_150_25.jpg'}} style={[styles.image]}/>
                        </View>
                    </TouchableOpacity>
                </Swiper>
                <View style={[styles.flex_row,styles.boxsContainer]}>
                    {boxs}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    flex_row:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    touch_Container:{
        width:Util.size.width/3-Util.pixel,
        height:Util.size.width/3-Util.pixel,
        backgroundColor:"#fff"
    },
    touchBox1:{
        borderBottomWidth:Util.pixel,
        borderBottomColor:'rosybrown',
        borderRightColor:'rosybrown',
        borderRightWidth:Util.pixel
    },
    touchBox2:{
        borderLeftWidth:Util.pixel,
        borderLeftColor:'#fff',
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#fff',
        borderRightWidth:Util.pixel,
        borderRightColor:'#fff'
    },
    boxContainer:{
        alignItems:"center",
        justifyContent:"center",
        width: Util.size.width/3,
        height:Util.size.width/3,
        flexWrap:'wrap'
    },
    boxTitle:{
        textAlign:'center'
    },
    boxIcon:{

    },
    image:{
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:Util.size.width
    },
    boxsContainer:{
        borderTopWidth:Util.pixel,
        borderTopColor:'black'
    }



});