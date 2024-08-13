import { View, Text, StatusBar, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { wp, hp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* welcome image */}
                <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.jpg')} />

                {/* title */}
                <View>
                    <Text style={styles.title} >SmartRooms</Text>
                    <Text style={styles.puchline} >Giải Pháp Cho Thuê Nhà và Ký Hợp Đồng Thông Minh</Text>
                </View>
                {/* footer */}
                <View style={styles.footer}>
                    <Button
                        title='Bắt đầu'
                        buttonStyle={{ arginHorizontal: wp(3) }}
                        onPress={() => { router.push('signUp') }}
                    />

                    <View style={styles.botomTextContainer}>
                        <Text style={styles.loginText}>
                            Bạn đã có tài khoản!
                        </Text>
                        <Pressable onPress={() => router.push('login')}>
                            <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.bold }]} >Đăng nhập</Text>

                        </Pressable>
                    </View>
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
        borderRadius: 60,
        marginHorizontal: wp(3)
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold,
    },
    puchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    },
    footer: {
        gap: 30,
        width: '100%'
    },
    botomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText: {
        fontSize: hp(1.6),
        color: theme.colors.text,
        textAlign: 'center'
    }


})