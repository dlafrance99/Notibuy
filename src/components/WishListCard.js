import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import GeneralStyles from '../GeneralStyles'

import FontAwesome from '@expo/vector-icons/FontAwesome';

import PriceCard from './PriceCard';

import { formatDateMMDDYY, getLowestPrice, getHighestPrice, getRecentPrice } from '../HelperFunctions';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const WishListCard = ({ Wish }) => {
    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <View style={GeneralStyles.WishListCard}>
                <Text style={[GeneralStyles.GenericText, { textAlign: 'center', fontSize: 25 }]}>
                    {Wish.NickName}
                </Text>

                {Wish.LinksToWatch
                    .sort((a, b) => {
                        const getMostRecentPrice = (link) => {
                            if (!link.PriceHistory?.length) {
                                return Infinity;
                            }

                            const mostRecent = link.PriceHistory.reduce((latest, current) => {
                                return new Date(current.Dttm) > new Date(latest.Dttm)
                                    ? current
                                    : latest;
                            });

                            return mostRecent.Price;
                        };

                        return getMostRecentPrice(a) - getMostRecentPrice(b);
                    })
                    .map((Link) => {
                        return (
                            <PriceCard
                                key={Link.Website}
                                Link={Link}
                            />
                        );
                    })}
            </View>
        </>
    )
}
const styles = StyleSheet.create({

})

export default WishListCard;