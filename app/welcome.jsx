import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { wp, hp } from '../helpers/common'

const Welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* welcome image */}
                <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.jpg')} />

                {/* title */}
                <View>
                    <Text>SmartRooms</Text>
                    <Text>Giải Pháp Toàn Diện Cho Thuê Nhà và Ký Hợp Đồng Thông Minh"</Text>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignItems: 'center',
        borderRadius: 60
    }
})