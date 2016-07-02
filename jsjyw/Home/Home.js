import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TabBarIOS
} from 'react-native'

'use strict';
import Util from './Util'
import Header from './Header'
import Banner from './Banner'
import TabList from './TabList'
import Floor from './Floor'
import Floor_JZhuang from './Floor_JZhuang'
import Floor_JDian from './Floor_JDian'
import Floor_JZheng from './Floor_JZheng'

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
                <TabBarIOS style={[styles.tabBar]}>
                    <TabBarIOS.Item
                        title="首页"
                        selected={true}
                        icon={require('./images/TabBar/tabbar_one.imageset/tabbar_one.png')}
                        selectedIcon={require('./images/TabBar/tabbar_one_selected.imageset/tabbar_one_selected.png')}
                        tintColor="red"
                        renderAsOriginal
                    >
                        <ScrollView style={[styles.flex_column]}>
                            <View style={[styles.flex_column]}>
                                <Banner banners={this.props.datas.banner.groupAttrList}/>
                                <TabList tabList={this.props.datas.tabList.groupAttrList}/>
                            </View>
                            <View style={[styles.flex_column]}>
                                <Floor houseIntr={this.props.datas.houseIntr}/>
                                <Floor houseIntr={this.props.datas.secondHouse}/>
                                <Floor houseIntr={this.props.datas.CZHouse}/>
                                <Floor_JZhuang houseMagic={this.props.datas.houseMagic}/>
                                <Floor_JDian houseElectrical={this.props.datas.houseElectrical} />
                                <Floor_JDian houseElectrical={this.props.datas.houseFurniture} />
                                <Floor_JZheng houseHeeping={this.props.datas.houseHeeping}/>
                            </View>
                        </ScrollView>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="预约单"
                        icon={require('./images/TabBar/tabbar_two.imageset/tabbar_two.png')}
                    />
                    <TabBarIOS.Item
                        title="订单"
                        icon={require('./images/TabBar/tabbar_three.imageset/tabbar_three.png')}
                    />
                    <TabBarIOS.Item
                        title="我"
                        icon={require('./images/TabBar/tabbar_four.imageset/tabbar_four.png')}
                    />

                </TabBarIOS>
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
    },
    tabBar:{
        height:80
    }
});