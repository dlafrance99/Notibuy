import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';

import GeneralStyles from '../GeneralStyles'
import Colors from '../constants/Colors';
import Header from '../components/Header';
import WishListCard from '../components/WishListCard';

import { Context as WishListContext } from '../context/WishListContext';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const HomeScreen = ({ navigation }) => {
    //State------------------------------------------------------


    //Context----------------------------------------------------
    const { state: { WishList } } = useContext(WishListContext)

    //Functions--------------------------------------------------

    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <View style={GeneralStyles.Wrapper}>
                <LinearGradient
                    colors={[Colors.Primary, Colors.Gray]}
                    locations={[0.01, 0.99]}
                    style={[
                        {
                            backgroundColor: Colors.Black,
                            borderRadius: 20,
                            height: SCREEN_HEIGHT,
                            justifyContent: 'center',
                        }]}
                >
                    <Header
                        Title='Wish List'
                    />
                    <View style={GeneralStyles.Content}>
                        {WishList.map((Wish, index) => {
                            return (
                                <WishListCard
                                    key={Wish._id}
                                    Wish={Wish}
                                />
                            )
                        })}
                    </View>
                </LinearGradient>
            </View>
        </>
    )
}
const styles = StyleSheet.create({

})

export default HomeScreen;