import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';

import {
    DefaultButton
} from '~/Components/Theme';

const Home = (props) => {

    return (
        <View style={styles.container}>
            <DefaultButton
                size={"lg"}
            />
        </View>
    )
}

export default Home;