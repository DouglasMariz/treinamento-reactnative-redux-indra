import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DefaultButton from './Components/Theme/Buttons/DefaultButton';

const App = (props) => {
    const [jaca, setJaca] = useState(0);

    useEffect(() => {
        console.log(jaca)
    }, [jaca]);

    useEffect(() => {
        console.log('mounted')
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => {
                    setJaca(jaca + 1);
                }}
            >
                <Text>+1</Text>
            </TouchableOpacity>

            <Text>Total de Jacas: {jaca}</Text>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAdd: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
