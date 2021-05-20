import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import {Message} from '../App'

export const UseContextExample=()=>{

    const msg=useContext(Message)

    return(
        <View>
            <Text>{msg}</Text>
        </View>
    )
}