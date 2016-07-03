import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from 'react-native'

'use strict';
import Util from '../Home/Util'
import Header from './Header'
import Condition from './Condition'
import NewHouse from './NewHouse'


class Price extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View  style={[price.mainContainer]}>
                <ScrollView style={[price.contentContainer]}>
                    <TouchableHighlight underlayColor="#eee">
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
                <TouchableHighlight onPress={()=>this.props.priceClick()} style={[price.container]}>
                    <View></View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tab_selected:"NewHouse",
            priceClick:true
        };
        this.priceClick = this.priceClick.bind(this);
    }

    priceClick(){
        this.setState({
            priceClick:!this.state.priceClick
        });
    }
    
    render(){
        return (
            <View style={[styles.container]}>
                 <Header />
                 <Condition priceClick={this.priceClick}/>
                {this.state.tab_selected=="NewHouse"?<View style={{flex:1}}><NewHouse /></View>:null}
                {this.state.priceClick?<Price priceClick={this.priceClick}/>:null}
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
    }


});

const price  = StyleSheet.create({

    contentContainer:{
        width:Util.size.width,
        backgroundColor:'white',
        flex:1,
    },
    mainContainer:{
        flex:1,
        height:Util.size.height-40,
        width:Util.size.width,
        position:'absolute',
        top:80,
        left:0
    },
    container:{
        flex:1,
        height:Util.size.height/3,
        width:Util.size.width,
        backgroundColor:100
    },
    row:{
        height:40,
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10,
        paddingBottom:10,
        borderBottomWidth:Util.pixel*2,
        borderBottomColor:'#eee',
        backgroundColor:'white'
    },
    row_text:{
       marginLeft:10
    },
    select_text:{
        color:'red'
    }

});