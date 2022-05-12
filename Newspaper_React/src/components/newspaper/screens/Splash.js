import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Splash(props) {
    const { navigation } = props;
    setTimeout(() => {
        navigation.navigate('OnboardingNewspaper');
    }, 3000)
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{ uri: "https://cdn.dribbble.com/users/31833/screenshots/1190424/newspaper.gif" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#758DE6',
        justifyContent: 'center'
    }
})