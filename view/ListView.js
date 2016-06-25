'use strict';
import React, {Component} from 'react'
import {
    ActivityIndicatorIOS,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    ListView
} from 'react-native'

'use strict';
import Util from './util/Util'
import HeaderUtil from './HeaderUtil'

export default class extends Component{

    // 构造
    constructor(props) {

        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        super(props);
        // 初始状态
        this.state = {
            dataSource:ds.cloneWithRows(['dzz','qm'])
        };
        this.back = this.back.bind(this);
    }

    back(){
        this.props.navigator.jumpBack();

    }

    control(){
        this.setState({
            animating:!this.state.animating,
            control:this.state.animating?'显示':'不显示'
        })
    }

    renderRow(rowData){
        return(
            <View>
                <Text>{rowData}</Text>
            </View>
        )
    }

    render(){

        return(
            <View>
                <HeaderUtil back={this.back} title="列表控件"/>

                <View style={[styles.boxContainer]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />

                </View>

            </View>
        )

    }

}

const styles = StyleSheet.create({

    boxContainer:{
        height:Util.size.height,
        width:Util.size.width,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black'
    },
    control:{
        borderWidth:Util.pixel,
        borderColor:'black',
        padding:5,
        height:30,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    }
});