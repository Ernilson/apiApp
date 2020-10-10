import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Index from './src/Index';
import Edit from './src/Edit';

const AppNavigator = createSwitchNavigator({
    Index: Index,
    Edit: Edit
},
    {
        initialRouteName: 'Index',
    }
)

export default createAppContainer(AppNavigator);

//------------------------------------------------------------------

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Paramentros from './src/Parametro';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Paramentros />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
});