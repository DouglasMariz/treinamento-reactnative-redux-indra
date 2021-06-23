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

    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        logradouro: '',
        numero: '',
    });

    const [exibir, setExibir] = useState(false);

    return (
        <View style={tailwind('p-4 h-full flex flex-col items-center justify-start')}>
            <View style={tailwind('p-4 flex flex-col items-center justify-center')}>
                <View style={tailwind('p-1')}>
                    <DefaultInput
                        themeSize={'lg'}
                        onChangeText={(value) => {
                        }}
                        defaultValue={form.nome}
                        placeholder={'Nome'}
                    />
                </View>
                <View style={tailwind('p-1')}>
                    <DefaultInput
                        themeSize={'lg'}
                        onChangeText={(value) => {
                        }}
                        defaultValue={form.cpf}
                        placeholder={'CPF'}
                    />
                </View>
                <View style={tailwind('p-1 flex flex-row items-center justify-around')}>
                    <View style={tailwind('w-2/5')}>
                        <DefaultInput
                            onChangeText={(value) => {
                            }}
                            defaultValue={form.logradouro}
                            placeholder={'Logradouro'}
                        />
                    </View>
                    <View style={tailwind('w-1/4')}>
                        <DefaultInput
                            onChangeText={(value) => {
                            }}
                            defaultValue={form.numero}
                            placeholder={'Numero'}
                        />
                    </View>
                </View>
            </View>

            <View style={tailwind('p-4 w-full flex flex-row items-center justify-around')}>
                <DefaultButton
                    themeText={'Salvar'}
                    themeSize={"xs"}
                    themeColor={"primary"}
                    onPress={() => {
                        setExibir(true);
                    }}
                />
            </View>

            {
                exibir &&
                <View style={tailwind('p-4 h-full w-full flex flex-col items-center justify-center')}>
                    <Text style={tailwind('p-1')}>{form.nome}</Text>
                    <Text style={tailwind('p-1')}>{form.cpf}</Text>
                    <Text style={tailwind('p-1')}>{form.logradouro}</Text>
                    <Text style={tailwind('p-1')}>{form.numero}</Text>
                </View>
            }

        </View>
    )
}

export default Home;