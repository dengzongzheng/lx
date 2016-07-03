import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    AsyncStorage
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
        this.state = {

        };
        this.render = this.render.bind(this);
    }

    componentWillMount() {

    }

    render(){

        var prices = this.props.prices.data.map((elem,index)=>{

            return(
                <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectPrice(elem.startAmounts,elem.endAmounts)} key={index}>
                    <View style={[price.row]}>
                        <Text style={[price.row_text,price.select_text]}>{elem.text}</Text>
                    </View>
                </TouchableHighlight>
            )
        });

        return (
            <View  style={[price.mainContainer]}>
                <ScrollView style={[price.contentContainer]}>
                    {prices}
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
            priceClick:false,
            newHouseCondition:[]
        };
        this.priceClick = this.priceClick.bind(this);
        this.selectPrice = this.selectPrice.bind(this);
        this.setNewHouseCondition = this.setNewHouseCondition.bind(this);
    }

    componentDidMount() {

    }

    setNewHouseCondition(newHouseCondition){
        this.setState({
            newHouseCondition:newHouseCondition
        })
    }

    priceClick(){
        this.setState({
            priceClick:!this.state.priceClick
        });
    }

    selectPrice(startAmounts,endAmounts){
       alert(endAmounts);
    }

    render(){
        return (
            <View style={[styles.container]}>
                 <Header />
                 <Condition priceClick={this.priceClick} setNewHouseCondition={this.setNewHouseCondition}/>
                {this.state.tab_selected=="NewHouse"?<View style={{flex:1}}><NewHouse /></View>:null}
                {this.state.priceClick?<Price priceClick={this.priceClick} selectPrice={this.selectPrice} prices={this.state.newHouseCondition.prices} />:null}
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