import React, {Component} from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import Header from './header';
import Footer from './footer';


class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Text style={styles.content}>test body</Text>
                <Footer/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1F1F1',
        ... Platform.select({
            ios: { paddingTop:30 },
            })
    },
    content: {
        flex: 1
    }
});

export default App;