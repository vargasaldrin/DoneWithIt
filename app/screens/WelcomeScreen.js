import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logoIcon}
                />
                <Text>Sell What you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.logoutButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 50,
    },
    logoIcon: {
        width: 100,
        height: 100,
    },
    logoutButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ECDC4",
    },
});

export default WelcomeScreen;
