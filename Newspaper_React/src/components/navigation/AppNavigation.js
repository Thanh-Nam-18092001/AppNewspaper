import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NewspaperNavigation from "../newspaper/NewspaperNavigation";

export default function AppNavigation(props) {
    return (
        <NavigationContainer>
            {<NewspaperNavigation />}
        </NavigationContainer>
    )
}