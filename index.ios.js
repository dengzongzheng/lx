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

class lx extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  title:"",
                  component: Main,
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
        this.state = {};
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 'Activity':
                return <Activity navigator={nav}/>;
            case 'breadcrumbs':
                return <BreadcrumbNavSample navigator={nav}/>;
            case 'jumping':
                return <JumpingNavSample navigator={nav}/>;
            default:
                return (
                    <Main
                    />
                );
        }
    }

    render(){
        return (
            <Navigator
                style= {styles.container}
                initialRoute= {{
                  component: Main,
                  name: 'home'
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
    _setNavigatorRef(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;

            if (navigator) {
                var callback = (event) => {
                    console.log(
                        `TabBarExample: event ${event.type}`,
                        {
                            route: JSON.stringify(event.data.route),
                            target: event.target,
                            type: event.type,
                        }
                    );
                };
                // Observe focus change events from the owner.
                this._listeners = [
                    navigator.navigationContext.addListener('willfocus', callback),
                    navigator.navigationContext.addListener('didfocus', callback),
                ];
            }
        }
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
    }
});

AppRegistry.registerComponent('lx', () => lx2);
