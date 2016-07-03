import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

'use strict';
import Util from '../Home/Util'

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View>
                <View style={[styles.container,styles.flex_row]}>
                    <View style={[styles.flex_row]}>
                        <TouchableOpacity style={[styles.back,styles.flex_row]} onPress={()=>this.props.goBack()}>
                            <Image source={require("../Home/images/back/back_button.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.house_tab,styles.flex_row,{flex:3}]}>
                        <TouchableOpacity style={[styles.flex_row]}>
                            <Text
                                style={[styles.tab_leftBorder,styles.tab_content,styles.tab_selected,styles.flex_row]}>新房</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.flex_row]}>
                            <Text style={[styles.tab_content,styles.flex_row]}>二手房</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.flex_row]}>
                            <Text style={[styles.tab_content,styles.flex_row]}>租房</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flex_row,styles.search]}>
                        <TouchableOpacity style={[styles.flex_row,styles.search]}>
                            <Image source={require("../Home/images/search/home_search.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex_row}>
                        <TouchableOpacity style={styles.flex_row}>
                            <Image source={require("../Home/images/map/map.png")} style={[styles.map]}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        height: 40,
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    house_tab: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    tab_content:{
        textAlign:'center',
        padding:5,
        borderWidth:Util.pixel,
        borderColor:'#d3d3d3'
    },
    tab_selected:{
        color:"#fff",
        backgroundColor:"#f60"
    },
    tab_leftBorder:{
        borderBottomLeftRadius:10
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    }


});