import React,{Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            domState : "normal",
            hasCameraPermissions : null,
            scanned : false,
            scannedData : "" 
        }
    }
    getCameraPremissions = async (domState)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({hasCameraPermissions : status === "granted", domState : domState, scanned : false})
    }
    handleBarCodeScanned = async ({ type, data})=>{
        this.setState({scannedData : data, domState : "normal", scanned : "true"})
    }
    render(){
        const{domState, hasCameraPermissions, scanned, scannedData} = this.state;
        if(domState === scanner){
            return <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned} style = {StyleSheet.absoluteFillObject}/> 
        }
        return(
            <View style={styles.container}>
                <Text style={styles.text} >{ hasCameraPermissions ? scannedData : "Request For Camera Permissions"}</Text>

                <TouchableOpacity style={styles.button} onPress={()=>{this.getCameraPremissions("scanner")}} >
                    <Text style={styles.buttonText} > Scan QR Code </Text>
                </TouchableOpacity>

            </View>
        )
    
    }
}

const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#5653D4" },
        text: { color: "#ffff", fontSize: 30 },
        button: { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 },
        buttonText: { color: "blue", fontSize: 26 },
    })