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
                themeText={'Adicionar ao Carrinho'}
                themeSize={"xs"}
                themeColor={"primary"}
                onPress={() => {
                    console.log('add');
                }}
            />
            <DefaultButton
                themeText={'Finalizar Compra'}
                themeSize={"xs"}
                themeColor={"success"}
                onPress={() => {
                    console.log('finalizar');
                }}
            />
        </View>
    )
}

export default Home;