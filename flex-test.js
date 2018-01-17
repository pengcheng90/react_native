/*justifyContent表明子组件横向排列在其父容器的哪个位置*/

/*import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MyJustifyContent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view1}/>
                <Text style={styles.view2}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',//表示子组件横向排列在其父容器的哪个位置center，flex-start,flex-end,
        // space-between,space-around
    },
    view1: {
        backgroundColor: 'red',
        width:150,
    },
    view2: {
        backgroundColor: 'yellow',
        width: 150
    },
});*/


/*alignItems设置纵向排列位置*/
/*
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class MyAlignItems extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.view1}/>
                <Text style={styles.view2}/>
            </View>
        );
    };
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',//center,flex-end,flex-start,baseline,stretch
    },
    view1:{
        backgroundColor:'red',
        width:150,
        height:150,
    },
    view2:{
        backgroundColor:'yellow',
        width:150,
        height:150,
    },
});
*/

/*水平垂直居中,盒子模型实现比弹性布局复杂点*/
/*
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class MyVH extends React.Component{
    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.view1}/>
        </View>
    );
    }
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',//子组件水平方向的排列方式,水平方向是相对于主轴的水平方向
        alignItems:'center',    //子组件垂直方向的排列方式
    },
    view1:{
        backgroundColor:'red',
        width:150,
        height:150,
    }
});

*/


/*alignSelf设置特定组件的排列*/
/*

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MyStyleSheet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view1}></Text>
                <Text style={styles.view2}></Text>
                <Text style={styles.view3}></Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    view1:{
        width:50,
        height:150,
        backgroundColor:'red',
    },
    view2:{
        width:50,
        height:150,
        backgroundColor:'yellow',
    },
    view3:{
        width:50,
        height:150,
        backgroundColor:'red',
        alignSelf:'center',//表明某个特定组件的排列情况，取值有auto、flex-start、flex-end、center、stretch
    },
});
*/


/*flex设置组件所占空间*/
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MyFlex extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view1}/>
                <Text style={styles.view2}/>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        flex: 1,
        backgroundColor: 'red',
    },
    view2: {
        flex: 1,
        backgroundColor: 'yellow',
    }
});


