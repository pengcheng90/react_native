import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView,Dimensions, StyleSheet, Platform} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <TextInput style={styles.input} placeholder={'搜索商品'}></TextInput>
                    <Button style={styles.button} title={'搜索'}></Button>
                </View>
                <View style={styles.advertisement}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}>
                        <Text
                            style={{width: Dimensions.get('window').width, height: 180, backgroundColor: 'green'}}>广告1
                        </Text>
                        <Text
                            style={{width: Dimensions.get('window').width, height: 180, backgroundColor: 'orange'}}>广告2
                        </Text>
                        <Text
                            style={{width: Dimensions.get('window').width, height: 180, backgroundColor: 'yellow'}}>广告3
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.products}>
                    <Text>商品列表</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    searchbar: {                 //搜索栏样式
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios'
            ? 20
            : 0,   //ios显示20，android上0
        // backgroundColor: 'red',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    advertisement: {             //广告栏样式
        height: 180,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'green',
    },
    products: {                  //商品列表样式
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor:'gray',
        borderWidth:2,
    },
    button: {
        flex: 1,
    },

});