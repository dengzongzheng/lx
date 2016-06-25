'use strict';
import React, {Component} from 'react'
import {
    ActivityIndicatorIOS,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

'use strict';
import Util from './util/Util'
import HeaderUtil from './HeaderUtil'

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animating: true,
            control: '不显示'
        };
        this.back = this.back.bind(this);
    }

    back() {
        this.props.navigator.jumpBack();

    }

    control() {
        this.setState({
            animating: !this.state.animating,
            control: this.state.animating ? '显示' : '不显示'
        })
    }


    render() {

        return (
            <ScrollView>
                <HeaderUtil back={this.back} title="Image图片控件"/>
                <View style={[styles.boxContainer]}>
                   <Image source={{uri:'http://image1.jyall.com/v1/tfs/T1llL_ByAv1RCvBVdK'}} style={[styles.image]}/>
                </View>
                <View style={[styles.boxContainer]}>
                    <Image source={require('../view/images/back_button.imageset/back_button.png')}/>
                </View>
            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({

    boxContainer: {
        height: 100,
        width: Util.size.width,
        borderBottomWidth: Util.pixel,
        borderBottomColor: 'black'
    },
    control: {
        borderWidth: Util.pixel,
        borderColor: 'black',
        padding: 5,
        height: 30,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    image:{
        height:100,
        width:Util.size.width
    }
});