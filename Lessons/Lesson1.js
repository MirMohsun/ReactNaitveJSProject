import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


//Типы данных , typeof, isNaN
export default class Lesson1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            string: 'simple string',
            bool: true,
            null: null,
            undf: undefined,
            text: '',
        }
    }

    someFunc = (variable) => {
        switch (variable) {
            case null: {
                this.setState({ text: 'We get ' + typeof (this.state.null) })
                return this.state.text
            }
            case undefined: {
                this.setState({ text: 'We get ' + typeof (this.state.undf) })
                return this.state.text
            }
            case true: {
                this.setState({ text: 'We get ' + typeof (this.state.bool) })
                return this.state.text
            }
            case 1: {
                this.setState({ text: 'We get ' + typeof (this.state.number) })
                return this.state.text
            }
            case 'simple string': {
                this.setState({ text: 'We get ' + typeof (this.state.string) })
                return this.state.text
            }
            default:
                {
                    this.setState({ text: 'Houston we have a problem' })
                    return this.state.text
                }
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#2d3436',  }}>
                <Text style={{fontSize: 25, padding: 10, color: '#fed330' }}> Типы переменных </Text>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.btn1} onPress={() => this.someFunc(this.state.number)}>
                        <Text style={styles.text}> {this.state.number}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={() => this.someFunc(this.state.string)}>
                        <Text style={styles.text}> {this.state.string}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3} onPress={() => this.someFunc(this.state.bool)}>
                        <Text > {this.state.bool}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn4} onPress={() => this.someFunc(this.state.null)}>
                        <Text > {this.state.null}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn5} onPress={() => this.someFunc(this.state.undf)}>
                        <Text > {this.state.undf}</Text>
                    </TouchableOpacity>
                    <Text style={styles.resText}> {this.state.text}</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: '#2d3436',flexDirection: 'row', paddingTop: 50, alignContent: 'flex-end'}}>
                    <TouchableOpacity style={styles.btn6} >
                        <Text > Go to previous lesson</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn6} >
                        <Text > Go to next lesson</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2d3436',
        padding: 10
    },
    btn1: {
        flex: 1,
        backgroundColor: '#00cec9',
        marginBottom: 10,
        height: 15,
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
    },
    btn2: {
        flex: 1,
        backgroundColor: '#fab1a0',
        marginBottom: 10,
        borderRadius: 15,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        fontSize: 25
    },
    btn3: {
        flex: 1,
        backgroundColor: '#55efc4',
        marginBottom: 10,
        height: 15,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
    btn4: {
        flex: 1,
        backgroundColor: '#636e72',
        marginBottom: 10,
        height: 15,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
    btn5: {
        flex: 1,
        backgroundColor: '#d63031',
        marginBottom: 10,
        height: 15,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
    btn6: {
        flex: 1,
        backgroundColor: '#fed330',
        marginBottom: 10,
        height: 15,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30,
    },
    resText: {
        backgroundColor: '#ffeaa7',
        fontSize: 40,
        borderRadius: 15
    },
})


