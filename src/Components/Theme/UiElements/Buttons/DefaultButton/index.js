import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import {DefaultButtonTypes} from './types';

const DefaultButton = (props: DefaultButtonTypes) => {

    const {
        size: size = 'xs',
        color: color = '#01CF7D'
    } = props;

    const sizes = {
        xs: 151,
        sm: 183,
        md: 256,
        lg: 328,
    }

    return (
        <TouchableOpacity style={{
            width: sizes[size],
            height: 40,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
        }}>
            <Text style={styles.text}>
                Button Text
            </Text>
        </TouchableOpacity>
    )
}

export {DefaultButton};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        backgroundColor: '#01CF7D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        fontStyle: 'bold',
        color: '#fff'
    }
});