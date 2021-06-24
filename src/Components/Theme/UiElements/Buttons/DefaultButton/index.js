import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text
} from 'react-native';
import Colors from '../../../Colors';
import styles from './styles';
import tailwind from 'tailwind-rn';

import {DefaultButtonTypes} from './types';

const DefaultButton = (props: DefaultButtonTypes & TouchableOpacityProps) => {

    const {
        themeText: text,
        themeSize: size = 'xs',
        themeColor: color = 'success',
    } = props;

    const sizes = {
        xs: 151,
        sm: 183,
        md: 256,
        lg: 328,
    }

    return (
        <TouchableOpacity
            style={{
                ...tailwind('flex items-center justify-center rounded-xl'),
                width: sizes[size],
                height: 40,
                backgroundColor: Colors[color]
            }}
            {...props}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export {DefaultButton};
