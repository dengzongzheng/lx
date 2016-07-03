import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native'

'use strict';
import Util from '../Home/Util'


export default class extends Component {

    // 构造
    constructor(props) {
        const dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        super(props);
        // 初始状态
        this.state = {
            dataSource:dataSource,
            newHouses:[],
            loading:true,
            pageNo:1
        };
        this.goBack = this.goBack.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    goBack(){
        this.props.navigator.pop();
    }

    getDatas(){
        const url = "http://m.jyall.com/jyhouse-api/v1/newHouse/getHouses?cityId=10002&pageSize=10&pageNo="+this.state.pageNo;
        console.log(url);
        fetch(url).then((response)=>{
            if(response.status==200){
                response.json().then((responseData)=>{
                    let data = this.state.newHouses.concat(responseData.data);
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(data),
                        loading:false,
                        newHouses:data,
                        pageNo:this.state.pageNo+1
                    });
                });
            }
        });
    }

    componentDidMount() {
        this.getDatas();
    }

    renderRow (renderData){
        var tags = [];
        for(var i in renderData.tags){
            var tag = (
                <View key={i} style={[styles.tag]}>
                    <Text style={[styles.tag_text]}>{renderData.tags[i].tagName}</Text>
                </View>
            );
            tags.push(tag);
        }
        return(
            <TouchableOpacity>
                <View style={[styles.container,styles.flex_row]}>
                    <View style={[styles.flex_row,{flex:0.7}]}>
                        <Image source={{uri:Util.tfsGetServer+renderData.realImg}} style={[styles.realImg]}/>
                    </View>
                    <View style={[styles.flex_column]}>
                        <View style={[styles.flex_row]}>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.title,styles.flex_row]} numberOfLines={1}>{renderData.title}</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.price]}>{renderData.averagePrice}元/㎡</Text>
                            </View>
                        </View>
                        <View style={[styles.flex_row]}>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.position,styles.flex_row]} numberOfLines={1}>{renderData.position}</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <Text style={[styles.area,styles.flex_row]}>{renderData.area}㎡</Text>
                            </View>
                        </View>
                        <View style={[styles.flex_row]}>
                            {tags}
                        </View>
                        <View style={[styles.flex_row]}>
                            {renderData.ecCoorperate!=""?<View style={[styles.flex_row]}><Text style={[styles.tuan]}>团</Text><Text>{renderData.ecCoorperate}</Text></View>:null}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        if(this.state.loading){
            return(
                <View style={[styles.loading]}>
                    <Text>loading......</Text>
                </View>
            )
        }
        return(
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={styles.listView}
                    initialListSize={10}
                    pageSize={10}
                    
                />
        )
    }

}

const styles = StyleSheet.create({

    container: {
        height: (Util.size.height - 120) / 4,
        width: Util.size.width-20,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Util.pixel*2,
        borderBottomColor:'#eee',
        paddingBottom:5
    },
    flex_row: {
        flex: 1,
        flexDirection: 'row'
    },
    flex_column: {
        flex: 1,
        flexDirection: "column"
    },
    realImg: {
        height:(Util.size.height-60)/4-30,
        width:Util.size.width/2-50,
        resizeMode:'cover'
    },
    title:{
        fontSize:15,
    },
    price:{
        fontSize:11,
        justifyContent:'center',
        alignItems:'flex-start',
        color:'red'
    },
    position:{
        fontSize:13,
    },
    area:{
        fontSize:11,
    },
    tag:{
        height:20,
        padding:5,
        borderWidth:Util.pixel*2,
        borderColor:'black',
        marginLeft:2,
        justifyContent:'center',
        alignItems:'center'
    },
    tag_text:{
        fontSize:11,
        textAlign:'center'
    },
    tuan:{
        color:'white',
        backgroundColor:'red',
        padding:3,
        height:20,
        marginRight:3
    },
    loading:{
        justifyContent:'center',
        alignItems:'center'
    },
    listView:{
        height:Util.size.height,
        flex:1,
        flexDirection:'column'
    }

});