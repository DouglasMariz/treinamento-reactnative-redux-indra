import React, {useEffect, useCallback, useState} from 'react';
import {
    View,
    Text
} from 'react-native';
import tailwind from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {
    DefaultButton,
    DefaultInput
} from '~/Components/Theme';

const Home = (props) => {
    const store = useSelector(store => store);
    const dispath = useDispatch();
    const navigation = useNavigation();

    const initialStateForm = {
        nome: '',
        cpf: '',
        logradouro: '',
        numero: '',
    };
    const [form, setForm] = useState(initialStateForm);
    const [posts, setPosts] = useState(null);
    const [exibir, setExibir] = useState(false);
    const teste = {
        cidade: 'jo',
        bairro: 'bla',
        numero: 0
    }

    /**
     * Esse useEffect oculta os dados toda vez que o state form for atualizado
     */
    useEffect(() => {
        setExibir(false);
    }, [form]);

    useEffect(() => {
        // console.log('effect');
        // console.log(store.HomeProvider)
    }, [store]);

    return (
        <View style={tailwind('p-4 h-full flex flex-col items-center justify-center bg-white')}>

            <View style={tailwind('p-4 w-full')}>
                <View style={tailwind('p-4 flex flex-col items-start justify-center rounded-xl bg-gray-100')}>
                    <View style={tailwind('flex flex-row items-center justify-center')}>
                        <Text style={tailwind('p-1 font-bold')}>Nome: </Text>
                        <Text style={tailwind('p-1')}>{form.nome}</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center justify-center')}>
                        <Text style={tailwind('p-1 font-bold')}>Cpf: </Text>
                        <Text style={tailwind('p-1')}>{form.cpf}</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center justify-center')}>
                        <Text style={tailwind('p-1 font-bold')}>Logradouro: </Text>
                        <Text style={tailwind('p-1')}>{form.logradouro}</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center justify-center')}>
                        <Text style={tailwind('p-1 font-bold')}>Número: </Text>
                        <Text style={tailwind('p-1')}>{form.numero}</Text>
                    </View>
                </View>
            </View>

            <View style={tailwind('p-4 flex flex-col justify-center')}>

                <View style={tailwind('p-1')}>
                    <DefaultInput
                        onChangeText={(value) => {
                            setForm(form => ({
                                ...form,
                                nome: value
                            }));
                        }}
                        defaultValue={form.nome}
                        placeholder={'Nome'}
                    />
                </View>
                <View style={tailwind('p-1')}>
                    <DefaultInput
                        onChangeText={(value) => {
                            setForm(form => ({
                                ...form,
                                cpf: value
                            }));
                        }}
                        defaultValue={form.cpf}
                        placeholder={'CPF'}
                        keyboardType={"numeric"}
                    />
                </View>
                <View style={tailwind('p-1 flex flex-row justify-around')}>
                    <View style={tailwind('w-2/3')}>
                        <DefaultInput
                            onChangeText={(value) => {
                                setForm(form => ({
                                    ...form,
                                    logradouro: value
                                }));
                            }}
                            defaultValue={form.logradouro}
                            placeholder={'Logradouro'}
                        />
                    </View>
                    <View style={tailwind('w-1/3')}>
                        <DefaultInput
                            onChangeText={(value) => {
                                setForm(form => ({
                                    ...form,
                                    numero: value
                                }));
                            }}
                            defaultValue={form.numero}
                            placeholder={'Numero'}
                            keyboardType={"numeric"}
                        />
                    </View>
                </View>
            </View>

            <View style={tailwind('p-4 w-full h-40 flex flex-col items-center justify-around')}>
                <DefaultButton
                    themeText={'Salvar dados'}
                    themeSize={"xs"}
                    themeColor={"primary"}
                    onPress={() => {
                        dispath({
                            type: 'setData',
                            payload: {nome: form.nome}
                        });
                        setForm(initialStateForm);
                    }}
                />
                <DefaultButton
                    themeText={'Ver Posts'}
                    themeSize={"xs"}
                    themeColor={"primary"}
                    onPress={() => {
                        navigation.navigate('Posts');
                    }}
                />
            </View>

        </View>
    )
}

export default Home;
