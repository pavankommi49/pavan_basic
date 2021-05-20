import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const UseReducerEx=()=>{

    const [number,setNumber]=useState(0)

    const pressHandler=(number)=>{
        setNumber(number-1)
    }


    return(
        <View>
            <Button title="-1" onPress={pressHandler()}/>
            <Text>{number}</Text>
            <Button title="+1" onPress={()=>setNumber(number+1)}/>
        </View>
    )
}