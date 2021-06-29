import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import tailwind from 'tailwind-rn';
import {DefaultButton} from "~/Components/Theme";

const Login = (props) => {

    console.log(props);

    const navigation = useNavigation();

    return (
        <View style={tailwind('h-full w-full flex items-center justify-center')}>
            <Text>
                View Login
            </Text>
            <DefaultButton
                themeText={'Home'}
                themeSize={"xs"}
                themeColor={"primary"}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Login;
