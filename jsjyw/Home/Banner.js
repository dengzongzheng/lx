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
        let swiper = this.props.banners.map(function(elem,index){
            return (
                <TouchableOpacity key={index}>
                    <View>
                        <Image
                            source={{uri:elem.imgPath}}
                            style={[styles.swiper_iamge]}/>
                    </View>
                </TouchableOpacity>
            );

        });

        return (
            <View style={[styles.container]}>
                <Swiper height={120} showsButtons={false} autoplay={true}>
                    {swiper}
                </Swiper>

            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
    },
    swiper_iamge:{
        height:120,
        width:Util.size.width,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    }

});