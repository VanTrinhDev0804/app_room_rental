import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { hp, wp } from "../helpers/common";



const login = () => {

  const router = useRouter()
  return (
    <ScreenWrapper>
        <StatusBar style="dark"/>
        <View style={styles.container}>
          <BackButton router={router}/>
        </View>

        {/* welcome */}
        <View>
          <Text style= {styles.welcomeText}>Chào mừng</Text>
          <Text tyle= {styles.welcomeText}>Bạn trở lại</Text>
        </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container:{
    flex : 1, 
    gap: 45, 
    paddingHorizontal: wp(5)
  },
  welcomeText: {
    color: theme.colors.text,
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
},
});
