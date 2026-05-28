import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Text } from 'react-native-elements';

import GeneralStyles from '../GeneralStyles'
import Colors from '../constants/Colors';

import { formatDateMMDDYY, getLowestPrice, getHighestPrice, getRecentPrice } from '../HelperFunctions';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const PriceCard = ({ Link }) => {
    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------
    const returnCompanyImage = () => {
        switch (Link.Company) {
            case 'Amazon':
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="amazon" size={24} color={Colors.Secondary} />
                    </View>
                )
            case 'Best Buy':
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png'}
                            style={{ width: 50, height: 50, objectFit: 'contain', alignSelf: 'center', borderRadius: 10 }}
                        />
                    </View>
                )


            default:
                break;
        }
    }




    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <View style={GeneralStyles.PriceCard}>
                <View style={GeneralStyles.GenericRow}>
                    {returnCompanyImage()}

                    <View style={{ flex: 6 }}>
                        <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                            {Link.Company}
                        </Text>

                        <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                            Last Updated - {formatDateMMDDYY({ dateInput: Link.LastUpdatedDttm })}
                        </Text>

                        <View style={GeneralStyles.GenericRow}>
                            <View style={[GeneralStyles.GenericCard, { backgroundColor: Colors.Success }]}>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    Best
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    ${getLowestPrice(Link.PriceHistory).Price}
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    {formatDateMMDDYY({ dateInput: getLowestPrice(Link.PriceHistory).Dttm })}
                                </Text>
                            </View>

                            <View style={[GeneralStyles.GenericCard, { backgroundColor: Colors.Danger }]}>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    Current
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    ${getRecentPrice(Link.PriceHistory).Price}
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    {formatDateMMDDYY({ dateInput: getRecentPrice(Link.PriceHistory).Dttm })}
                                </Text>
                            </View>

                            <View style={[GeneralStyles.GenericCard, { backgroundColor: Colors.Fail }]}>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    Worst
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    ${getHighestPrice(Link.PriceHistory).Price}
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    {formatDateMMDDYY({ dateInput: getHighestPrice(Link.PriceHistory).Dttm })}
                                </Text>
                            </View>
                        </View>

                        <View style={GeneralStyles.GenericRow}>
                            <View style={[GeneralStyles.GenericCard, { backgroundColor: Colors.Danger }]}>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    Average
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    ${getLowestPrice(Link.PriceHistory).Price}
                                </Text>
                            </View>

                            <View style={[GeneralStyles.GenericCard, { backgroundColor: Colors.Danger }]}>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    Frequent
                                </Text>
                                <Text style={[GeneralStyles.GenericText, { textAlign: 'center' }]}>
                                    ${getRecentPrice(Link.PriceHistory).Price}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({

})

export default PriceCard;