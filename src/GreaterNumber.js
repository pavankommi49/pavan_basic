import React, { useContext, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const GreaterNumber=()=>{

    const name = useRef()
    const value=React.useContext(value)

    return(
        <View>
            <TouchableOpacity>
                <Text onPress={()=>name.current.focus()}>Name:</Text>
            </TouchableOpacity>
            <TextInput placeholder={value} ref={name}></TextInput>
        </View>
    )
}