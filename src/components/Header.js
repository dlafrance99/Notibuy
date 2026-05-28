import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import GeneralStyles from '../GeneralStyles'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Header = ({ Title }) => {
    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <Text style={GeneralStyles.HeaderText}>
                {Title}
            </Text>
        </>
    )
}
const styles = StyleSheet.create({

})

export default Header;