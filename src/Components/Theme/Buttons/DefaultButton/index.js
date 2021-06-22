import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import styles from './styles';

const DefaultButton = (props) => {

    const {
        list,
        children
    } = props;

    const listButtons = (list) => (
        <>
            {
                list &&
                list.map((value, index) => (
                    <TouchableOpacity style={styles.buttonAdd}>
                        <Text>{value}</Text>
                    </TouchableOpacity>
                ))
            }
        </>
    );

    const button = (children) => (
        <>
            {
                children &&
                <TouchableOpacity style={styles.buttonAdd}>
                    {children}
                </TouchableOpacity>
            }
        </>
    );

    return (
        <>
            {listButtons(list)}
            {button(children)}
        </>
    );
}

export default DefaultButton;
