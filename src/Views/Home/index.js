import React, {useEffect, useState} from 'react';
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

    /**
     * Esse useEffect oculta os dados toda vez que o state form for atualizado
     */
    useEffect(() => {
        setExibir(false);
    }, [form]);

    return (
        <View style={tailwind('p-4 h-full flex flex-col items-center justify-start')}>
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