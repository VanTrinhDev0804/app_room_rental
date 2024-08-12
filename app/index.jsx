import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function index() {
    const router = useRouter();

    return (
        <View>
            <Text>index</Text>
            <Button title=" welcome" onPress={() => router.push('welcome')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})