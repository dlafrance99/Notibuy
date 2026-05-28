import { StyleSheet, Dimensions } from 'react-native';
import Colors from './constants/Colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const GeneralStyles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        backgroundColor: Colors.Black,
    },
    HeaderText: {
        fontSize: 25,
        fontFamily: 'Verdana-Bold',
        marginTop: 50,
        color: Colors.White,
        textAlign: 'center'
    },
    Content: {
        flex: 1,
    },
    WishListCard: {
        backgroundColor: Colors.Gray,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5

    },
    GenericText: {
        fontSize: 16,
        fontFamily: 'Verdana-Bold',
        color: Colors.White,
    },
    PriceCard: {
        backgroundColor: Colors.Black,
        borderRadius: 10,
        marginHorizontal: 5,
        paddingBottom: 10,
        marginVertical: 5
    },
    PriceCardWrapper: {
        paddingVertical: 10,
        borderColor: 'red', borderWidth: 2
    },
    GenericRow: {
        flexDirection: 'row',
        marginTop: 5
    },
    GenericCard: {
        borderRadius: 10,
        minHeight: 10,
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 5
    }
});

export default GeneralStyles;