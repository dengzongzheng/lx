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
    }

    render(){
        let tabLists = this.props.tabList.map(function(elem,index){
            return (
                <TouchableOpacity key={index} style={styles.flex_row}>
                    <View style={[styles.flex_column]}>
                        <Image source={{uri:elem.imgPath}} style={[styles.tabBox]}/>
                        <Text style={[styles.tabText]}>{elem.name}</Text>
                    </View>
                </TouchableOpacity>
            );

        });

        return (
            <View style={[styles.container]}>
                <View style={[styles.tabContainer,styles.flex_row]}>
                    {tabLists}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        width:Util.size.width
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    tabBox:{
        margin:10,
        width:Util.size.width/5-10,
        height:40,
        resizeMode:'contain'
    },
    tabContainer:{
        height:80
    },
    tabText:{
        textAlign:'center'
    }

});