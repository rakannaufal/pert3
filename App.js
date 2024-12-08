import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import ProfileScreen from "./src/pages/profile";
import Constants from "expo-constants";
import LifeCycle from "./src/components/lifecycle/index";
import { useState } from "react";

export default function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ProfileScreen />
      {showLifeCycle && <LifeCycle />}
      <Button
        title="Toggle LifeCycle component"
        onPress={() => setShowLifeCycle(!showLifeCycle)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
