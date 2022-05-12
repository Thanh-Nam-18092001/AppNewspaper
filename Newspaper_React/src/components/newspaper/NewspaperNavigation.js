import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Splash from "./screens/Splash";
import OnboardingNewspaper from "./screens/OnboardingNewspaper";
import Newspaper from '../newspaper/screens/Newspaper';
import Detail from '../newspaper/screens/Detail';

export default function NewspaperNavigation(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnboardingNewspaper" component={OnboardingNewspaper} />
            <Stack.Screen name="Newspaper" component={Newspaper} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})