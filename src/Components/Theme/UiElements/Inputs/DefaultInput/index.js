import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {DefaultInputTypes} from './types';
import tailwind from 'tailwind-rn';
import Colors from '../../../Colors';

const DefaultInput = (props: DefaultInputTypes & TextInputProps) => {

    const {
        themeSize: size = 'xs',
        themeColor: color = 'input',
        themeBorderColor: borderColor = 'transparent',
        themeTextColor: textColor = 'inputText',
        onChangeText,
        placeholder,
        defaultValue
    } = props;

    const sizes = {
        xs: 151,
        sm: 183,
        md: 256,
        lg: 328,
    }

    return (
        <View>
            <TextInput
                onChangeText={onChangeText && onChangeText}
                placeholder={placeholder && placeholder}
                defaultValue={defaultValue && defaultValue}
                style={{
                    backgroundColor: Colors[color],
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: Colors[borderColor],
                    width: sizes[size],
                    height: 40,
                    borderRadius: 10,
                    color: Colors[textColor],
                    paddingHorizontal: 10
                }}
            />
        </View>
    )
};

export {DefaultInput};