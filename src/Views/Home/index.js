import React, {useState} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';
import tailwind from 'tailwind-rn';

import {
    DefaultButton,
    DefaultInput
} from '~/Components/Theme';

const Home = (props) => {

    const [nome, setNome] = useState('');
    const [exibir, setExibir] = useState(false);

    return (
        <View style={tailwind('h-full flex flex-col items-center justify-center')}>
            <View style={tailwind('p-4 flex flex-col items-center justify-center')}>
                {
                    exibir &&
                    <Text>{nome}</Text>
                }
                <DefaultInput
                    themeSize={'lg'}
                    onChangeText={(value) => {
                        setNome(value);
                    }}
                    placeholder={'Nome'}
                />
            </View>

            <View style={tailwind('p-4 w-full flex flex-row items-center justify-around')}>
                <DefaultButton
                    themeText={'Exibir Nome'}
                    themeSize={"xs"}
                    themeColor={"primary"}
                    onPress={() => {
                        setExibir(true);
                    }}
                />
                <DefaultButton
                    themeText={'Ocultar Nome'}
                    themeSize={"xs"}
                    themeColor={"primary"}
                    onPress={() => {
                        setExibir(false);
                    }}
                />
            </View>
        </View>
    )
}

export default Home;