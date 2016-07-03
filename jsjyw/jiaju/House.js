import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    AsyncStorage,
    Slider
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
                        <Text style={[price.row_text]}>{elem.text}</Text>
                    </View>
                </TouchableHighlight>
            )
        });

        return (
            <View  style={[price.mainContainer]}>
                <ScrollView style={[price.contentContainer]}>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectPrice(0,0)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>不限</Text>
                        </View>
                    </TouchableHighlight>
                    {prices}
                </ScrollView>
                <TouchableHighlight onPress={()=>this.props.priceClick()} style={[price.container]}>
                    <View></View>
                </TouchableHighlight>
            </View>
        );
    }
}

class Room extends Component{

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
        return (
            <View  style={[price.mainContainer]}>
                <ScrollView style={[price.contentContainer]}>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(0)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>不限</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(1)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>一室</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(2)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>二室</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(3)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>三室</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(4)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>四室</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(5)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>五室</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#eee" onPress={()=>this.props.selectRoom(6)}>
                        <View style={[price.row]}>
                            <Text style={[price.row_text]}>五室以上</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
                <TouchableHighlight onPress={()=>this.props.roomClick()} style={[price.container]}>
                    <View></View>
                </TouchableHighlight>
            </View>
        );
    }
}

class More extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
        this.render = this.render.bind(this);
    }
    render(){
        console.log(this.props.tags);
       var tags = this.props.tags.data.map((elem,index)=>{
           return(
               <TouchableOpacity  key={index} style={[more.tag]}>
                   <View>
                       <Text style={[more.tag_text]}>{elem.name}</Text>
                   </View>
               </TouchableOpacity>
           );

       });


        return (
            <View  style={[more.mainContainer]}>
                <ScrollView style={[price.contentContainer]}>
                    <View style={[more.title]}>
                        <Text style={[more.title_text]}>面积(平米):</Text>
                    </View>
                    <View>
                        <Slider
                            minimumValue={1}
                            maximumValue={100}
                            step={10}
                            value={1}
                        />
                    </View>
                    <View style={[more.title]}>
                        <Text style={[more.title_text]}>特色</Text>
                    </View>
                    <View style={[more.flex_row]}>
                        {tags}
                    </View>
                    <View style={[more.title]}>
                        <Text style={[more.title_text]}>排序</Text>
                    </View>
                    <View>
                        <TouchableOpacity underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text,price.select_text]}>默认排序</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text]}>均价由低到高</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text]}>均价由高到低</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text]}>面积由大到小</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text]}>面积由小到大</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{backgroundColor:'white'}}>
                    <TouchableOpacity>
                        <View style={[more.button]}>
                            <Text style={[more.button_text]}>确认筛选</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={()=>this.props.roomClick()} style={[price.container]}>
                    <View></View>
                </TouchableHighlight>
            </View>
        );
    }
}

class Area extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
           countrySelect:false,
           countryData:[],
           bizData:[]
        };
        this.render = this.render.bind(this);
    }

    getCountries(){
        let url = "http://m.jyall.com/jyhouse-api/v1/common/getCountys?cityId=10002";
        fetch(url).then((response)=>{
            if(response.status==200){
                response.json().then((responseData)=>{
                    console.log(responseData);
                    this.setState({
                        countryData:responseData.data,
                        countrySelect:false
                    })
                });
            }
        });
    }

    getBiz(countryId){
        console.log(countryId);
        if(0!==countryId){
            let url = "http://m.jyall.com/jyhouse-api/v1/common/getBizs?countyId="+countryId;
            fetch(url).then((response)=>{
                if(response.status==200){
                    response.json().then((responseData)=>{
                        console.log(responseData);
                        this.setState({
                            bizData:responseData.data,
                            countrySelect:true
                        })
                    });
                }
            });
        }
    }

    componentDidMount() {
        this.getCountries();
    }

    render(){

        var countries = this.state.countryData.map((elem,index)=>{

            return(
                <TouchableOpacity underlayColor="#eee" key={index} onPress={()=>this.getBiz(elem.countryId)}>
                    <View style={[price.row]}>
                        <Text style={[price.row_text]}>{elem.countryName}</Text>
                    </View>
                </TouchableOpacity>
            )
        });

        return (
            <View  style={[area.mainContainer,{flexDirection:'column'}]}>
                <View style={[{flex:1,flexDirection:'row'}]}>
                    <ScrollView style={[price.contentContainer]}>
                        <TouchableHighlight underlayColor="#eee">
                            <View style={[price.row]}>
                                <Text style={[price.row_text,price.select_text]}>全部</Text>
                            </View>
                        </TouchableHighlight>
                        {countries}
                    </ScrollView>
                    {this.state.countrySelect ? <Biz bizData={this.state.bizData}/> : null}
                </View>
                <TouchableHighlight onPress={()=>this.props.areaClick()} style={[price.container]}>
                    <View></View>
                </TouchableHighlight>
            </View>
        );

    }
}

class Biz extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){

        let bizs = this.props.bizData.map((elem,index)=>{
            return (
                <TouchableHighlight underlayColor="#eee" key={index}>
                    <View style={[price.row]}>
                        <Text style={[price.row_text]}>{elem.businessDistrictName}</Text>
                    </View>
                </TouchableHighlight>
            )
        });

        return (
            <View style={[biz.contentContainer,{flex:1,flexDirection:'row'}]}>
                <ScrollView style={[price.contentContainer]}>
                    <TouchableHighlight underlayColor="#eee">
                        <View style={[price.row]}>
                            <Text style={[price.row_text,price.select_text]}>全部</Text>
                        </View>
                    </TouchableHighlight>
                    {bizs}
                </ScrollView>
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
            newHouseCondition:[],
            roomClick:false,
            moreClick:false,
            areaClick:false
        };
        this.priceClick = this.priceClick.bind(this);
        this.selectPrice = this.selectPrice.bind(this);
        this.setNewHouseCondition = this.setNewHouseCondition.bind(this);
        this.roomClick = this.roomClick.bind(this);
        this.selectRoom = this.selectRoom.bind(this);
        this.moreClick = this.moreClick.bind(this);
        this.areaClick =  this.areaClick.bind(this);
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
       this.priceClick()
    }

    roomClick(){
        this.setState({
            roomClick:!this.state.roomClick
        });
    }

    selectRoom(room){
        alert(room);
    }

    moreClick(){
        this.setState({
            moreClick:!this.state.moreClick
        });
    }

    areaClick(){
        this.setState({
            areaClick:!this.state.areaClick
        });
    }

    render(){
        return (
            <View style={[styles.container]}>
                 <Header />
                 <Condition areaClick={this.areaClick} priceClick={this.priceClick} setNewHouseCondition={this.setNewHouseCondition} roomClick={this.roomClick} moreClick={this.moreClick}/>
                {this.state.tab_selected=="NewHouse"?<View style={{flex:1}}><NewHouse /></View>:null}
                {this.state.areaClick?<Area areaClick={this.areaClick} />:null}
                {this.state.priceClick?<Price priceClick={this.priceClick} selectPrice={this.selectPrice} prices={this.state.newHouseCondition.prices} />:null}
                {this.state.roomClick?<Room roomClick={this.roomClick} selectRoom={this.selectRoom} />:null}
                {this.state.moreClick?<More tags={this.state.newHouseCondition.tags} />:null}
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
       marginLeft:10,
       fontSize:13
    },
    select_text:{
        color:'red'
    }

});

const more = StyleSheet.create({
    mainContainer:{
        flex:1,
        height:Util.size.height-40,
        width:Util.size.width,
        position:'absolute',
        top:80,
        left:0
    },
    title:{
        paddingLeft:10,
        borderBottomColor:"#eee",
        borderBottomWidth:Util.pixel*2,
        height:40,
        justifyContent:'center'
    },
    title_text:{
        fontSize:12,
    },
    tag:{
        height:20,
        padding:5,
        borderWidth:Util.pixel*2,
        borderColor:'#eee',
        marginLeft:2,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    },
    tag_text:{
        fontSize:11,
        textAlign:'center'
    },
    flex_row:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    button:{
        height:30,
        backgroundColor:"#FF6501",
        justifyContent:'center',
        alignItems:'center',
        borderWidth:Util.pixel,
        borderColor:"#FF6501",
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10
    },
    button_text:{
        color:'white'
    }
});

const area = StyleSheet.create({
    mainContainer:{
        flex:1,
        height:Util.size.height-40,
        width:Util.size.width,
        position:'absolute',
        top:80,
        left:0,
        flexDirection:'column'
    },

});
const biz = StyleSheet.create({
    mainContainer:{
        flex:1,
        height:Util.size.height-40,
        width:Util.size.width,
        position:'absolute',
        top:80,
        left:0,
        flexDirection:'column',

    },
    contentContainer:{
        width:Util.size.width,
        backgroundColor:'#eee',
        flex:1,
        borderLeftColor:'#eee',
        borderLeftWidth:Util.pixel*2
    },

});