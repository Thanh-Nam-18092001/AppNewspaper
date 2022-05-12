import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigation from "./src/components/navigation/AppNavigation";
import { NewspaperContextProvider } from "./src/components/newspaper/NewspaperContext";

export default function App() {
  return (
    <NewspaperContextProvider>
      <AppNavigation />
    </NewspaperContextProvider>
  );
}
