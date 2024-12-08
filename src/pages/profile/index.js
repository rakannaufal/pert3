import { ScrollView, StyleSheet, View } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerProfile";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileNavBar />
      <ScrollView>
        <ProfileHeader />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ProfileScreen;
