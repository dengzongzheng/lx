import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator
} from 'react-native';

'use strict';

import Util from './view/util/Util'
import Main from './view/Main'
import Activity from './view/Activity'
import Home from './jsjyw/Home/Home'
class lx extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  title:"",
                  component: Home,
                  navigationBarHidden:true
                }}
                itemWrapperStyle={styles.itemWrapper}
                style={[styles.flex_column]}
                tintColor="#777"
                ref='nav'
            />
        );
    }
}

class lx2 extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            datas:[],
            loading:true
        };
    }

    componentDidMount() {
        let url = "http://m.jyall.com/jyshop-deco/v1/shop/decorate/index/INDEX/10002";
        fetch(url).then((response)=>{
            if(response.status==200){
                response.json().then((responseData)=>{
                   this.setState({
                       datas:responseData,
                       loading:false
                   })
                })
            }

        });

    }


    render(){


        if(this.state.loading){
            return (
                <View style={[styles.loading]}>
                    <Text>loading............</Text>
                </View>
            )
        }
        return (
            <Navigator
                style= {styles.container}
                initialRoute= {{
                  component: Home,
                  name: 'home',
                  params:{
                     datas:this.state.datas
                  }
                }}
                configureScene={() => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  if(route.component) {
                    return <Component {...route.params} navigator={navigator} />
                  }
                }} >
            </Navigator>
        )
    }
    

}

const styles = StyleSheet.create({

    flex_column:{
        flex:1
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    itemWrapper:{
        backgroundColor: '#f3f3f3'
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

AppRegistry.registerComponent('lx', () => lx2);
