import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage'


const WishListReducer = (state, action) => {
    switch (action.type) {
        case 'UpdateGolferFilters':
            return { ...state, GolferFilters: action.payload };
        default:
            return state;
    }
};

const APIEXAMPLE = (dispatch) => {
    return async () => {
        console.log('Trying to Collect Pros info')
        try {
            const response = await CTPGolferAPI.get('/Golfer/APIEXAMPLE')

            if (response.data) {
                return response.data
            }
        }
        catch (e) {
            console.log(`Error Posting PuttPracDiscStats ${e}`)
        }
    }
}

const UpdateGolferFilters = (dispatch) => {
    return (value) => {
        dispatch({ type: 'UpdateGolferFilters', payload: value })
    }
}


const ResetGolferContextVariables = (dispatch) => {
    return async () => {
        dispatch({
            type: 'ResetGolfersList', payload: {
                Headline: 'Headline right here',
                Source: 'Source right here',
                Content: 'The content of this story goes right here.',
                Dttm: new Date(1994, 2, 5, 15, 30),
                Likes: 0,
                Nices: 0,
                Comments: []
            }
        })
    }
}

export const { Provider, Context } = createDataContext(
    WishListReducer,
    {
        ResetGolferContextVariables,
        UpdateGolferFilters,
    },
    {
        WishList: [
            {
                _id: '123456789',
                ItemName: 'Nintendo Switch™ 2: Choose Your Game Bundle with Mario Kart™ World Switch 2',
                NickName: 'Nintendo Switch 2 Bundle',
                LinksToWatch: [
                    {
                        Company: 'Amazon',
                        Website: 'https://www.amazon.com/Nintendo-Switch-Choose-Your-Bundle-2/dp/B0H2BZ94ML/ref=sr_1_4?crid=BNAGZM9J61L1&dib=eyJ2IjoiMSJ9.hAFNQu6GaVFo18xZqRww31R4D5N5li_JlVkIHw0-Ilwajp-7sU08h1xnaHp7T_xciovQO6E1-W-pt9y6USnyEQVEhiHWTYOH8yZqNI7JyinydKyazQpCyxX_5eIknyR6-D7Ifb5xwZHOcYx2tMC7JXeTvxiJq5PQhYvLwFPjnV82_ydBbRn1wLmXpuZuRdrpReDanN6zMBqeKFB-dOnvRkGc8dT25ujo139_wfRmftg.AHUM4grJGZAjvtE72zAfP50mZWJa8U4XO7sNasO3HnU&dib_tag=se&keywords=nintendo%2Bswitch%2B2&qid=1779996858&sprefix=nintendo%2Bs%2Caps%2C242&sr=8-4&th=1',
                        CurrentPrice: 578.99,
                        PriceHistory: [
                            {
                                Dttm: new Date(),
                                Price: 578.99
                            },
                            {
                                Dttm: new Date(2026, 4, 24, 15, 30),
                                Price: 577.99
                            },
                        ],
                        LastUpdatedDttm: new Date()
                    },
                    {
                        Company: 'Best Buy',
                        Website: 'https://www.bestbuy.com/product/switch-2-choose-your-game-bundle/J7GSL57WQR',
                        CurrentPrice: 499.99,
                        PriceHistory: [
                            {
                                Dttm: new Date(),
                                Price: 499.99
                            },
                            {
                                Dttm: new Date(2026, 4, 24, 15, 30),
                                Price: 577.99
                            },
                        ],
                        LastUpdatedDttm: new Date()
                    }
                ],
                RepeatPurchase: false,
                StartWatchDttm: new Date(2026, 4, 24, 15, 30),
                AlertLessThan: 489.99,
                InterestRating: 8
            }
        ]
    }
)