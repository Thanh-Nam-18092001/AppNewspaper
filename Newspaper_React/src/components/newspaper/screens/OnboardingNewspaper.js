import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingNewspaper(props) {
    const { navigation } = props;
    return (
        <Onboarding
            skipToPage={2}
            onDone={() => navigation.navigate('Newspaper')}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image style={styles.image} source={{ uri: 'https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif' }} />,
                    title: <Text style={styles.title}>WELCOME</Text>,
                    subtitle: <Text style={styles.subtitle}>Come to our newspaper app</Text>,
                },
                {
                    backgroundColor: 'white',
                    image: <Image style={styles.image} source={{ uri: 'https://cdn.dribbble.com/users/957405/screenshots/2788591/newspaper.gif' }} />,
                    title: <Text style={styles.title}>We always update information daily</Text>,
                    subtitle: <Text style={styles.subtitle}>Meeting all the needs of users</Text>,
                },
                {
                    backgroundColor: 'white',
                    image: <Image style={styles.image} source={{ uri: 'https://www.animatedimages.org/data/media/152/animated-newspaper-image-0026.gif' }} />,
                    title: <Text style={styles.title}>Newspaper app always welcome everyone</Text>,
                    subtitle: <Text style={styles.subtitle}>Please come inside</Text>,
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: 'black',
        marginTop: 8
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#27B6D7'
    },
    image: {
        width: "90%",
        height: 250,
        marginTop: -150
    }
})