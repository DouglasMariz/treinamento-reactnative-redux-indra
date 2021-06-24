import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {DefaultInputTypes} from './types';
import tailwind from 'tailwind-rn';
import Colors from '../../../Colors';

const DefaultInput = (props: DefaultInputTypes & TextInputProps) => {

    const {
        themeSize: size = 'full',
        themeColor: color = 'input',
        themeBorderColor: borderColor = 'transparent',
        themeTextColor: textColor = 'inputText',
    } = props;

    const sizes = {
        xs: 151,
        sm: 183,
        md: 256,
        lg: 328,
        full: '100%'
    }

    return (
        <View>
            <TextInput
                style={{
                    ...tailwind('h-10 border-2 border-solid rounded-xl pl-3 pr-3'),
                    backgroundColor: Colors[color],
                    borderColor: Colors[borderColor],
                    width: sizes[size],
                    color: Colors[textColor],
                }}
                {...props}
            />
        </View>
    )
};

export {DefaultInput};