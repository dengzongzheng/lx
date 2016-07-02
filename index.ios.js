import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

'use strict';

import Util from './view/util/Util'
import Main from './view/Main'
import Activity from './view/Activity'
import Home from './jsjyw/Home/Home'
import CodePush from "react-native-code-push"



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
        this.state = {};
    }

    componentDidMount() {
        console.log('下载更新包');
    }

    render(){
        return (
            <Navigator
                style= {styles.container}
                initialRoute= {{
                  component: Home,
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
}

class lx3 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            restartAllowed: true,
            syncMessage:''
        };
        this.sync = this.sync.bind(this);
        this.toggleAllowRestart = this.toggleAllowRestart.bind(this);
    }

    async sync() {
        let self = this;
        try {
            return await CodePush.sync(
                {
                    installMode: CodePush.InstallMode.IMMEDIATE,
                },
                (syncStatus) => {
                    switch (syncStatus) {
                        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                            self.setState({
                                syncMessage: "Checking for update."
                            });
                            break;
                        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                            self.setState({
                                syncMessage: "Downloading package."
                            });
                            break;
                        case CodePush.SyncStatus.AWAITING_USER_ACTION:
                            self.setState({
                                syncMessage: "Awaiting user action."
                            });
                            break;
                        case CodePush.SyncStatus.INSTALLING_UPDATE:
                            self.setState({
                                syncMessage: "Installing update."
                            });
                            break;
                        case CodePush.SyncStatus.UP_TO_DATE:
                            self.setState({
                                syncMessage: "App up to date.",
                                progress: false
                            });
                            break;
                        case CodePush.SyncStatus.UPDATE_IGNORED:
                            self.setState({
                                syncMessage: "Update cancelled by user.",
                                progress: false
                            });
                            break;
                        case CodePush.SyncStatus.UPDATE_INSTALLED:
                            self.setState({
                                syncMessage: "Update installed.",
                                progress: false
                            });
                            break;
                        case CodePush.SyncStatus.UNKNOWN_ERROR:
                            self.setState({
                                syncMessage: "An unknown error occurred.",
                                progress: false
                            });
                            break;
                    }
                },
                (progress) => {
                    self.setState({
                        progress: progress
                    });
                }
            );
        } catch (error) {
            CodePush.log(error);
        }
    }

    componentDidMount() {
        CodePush.notifyApplicationReady();
    }

    toggleAllowRestart() {
        if (this.state.restartAllowed) {
            CodePush.disallowRestart();
        } else {
            CodePush.allowRestart();
        }
        this.setState({restartAllowed: !this.state.restartAllowed});
    }

    render(){

        let syncView, syncButton, progressView;

        if (this.state.syncMessage) {
            syncView = (
                <Text style={styles.messages}>{this.state.syncMessage}</Text>
            );
        } else {
            syncButton = (
                <TouchableOpacity onPress={this.sync}>
                    <Text style={{color: 'green', fontSize: 17}}>Start Sync!</Text>
                </TouchableOpacity>
            );
        }

        if (this.state.progress) {
            progressView = (
                <Text style={styles.messages}>{this.state.progress.receivedBytes} of {this.state.progress.totalBytes}
                    bytes received</Text>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to CodePush!
                </Text>
                {syncButton}
                {syncView}
                {progressView}
                <Image style={styles.image} resizeMode={Image.resizeMode.contain}
                       source={require('./view/images/laptop_phone_howitworks.png')}/>
                <TouchableOpacity onPress={this.toggleAllowRestart}>
                    <Text
                        style={{color: 'blue', fontSize: 17}}>Restart { this.state.restartAllowed ? "allowed" : "forbidden"}</Text>
                </TouchableOpacity>
            </View>
        );
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
    image: {
        marginTop: 50,
        width: Dimensions.get('window').width - 100,
        height: 365 * (Dimensions.get('window').width - 100) / 651,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    messages: {
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('lx', () => lx);
