import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = ({ route }) => {
    const { order } = route.params;
    const orderDetails = JSON.stringify(order); // Converting the order details into a string

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scan this QR code to view the order</Text>
            <QRCode
                value={orderDetails} // Generating the QR code based on order details
                size={200}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3F00', // Setting the background color to orange
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
    },
});

// navigate.js or within the component

export const navigateToQRCodeScreen = (navigation, order) => {
    navigation.navigate('QRCodeScreen', { order }); // Passing the 'order' as a parameter
  };
  
export default QRCodeScreen;
