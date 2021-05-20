import React, { useEffect,useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

export const Rendering=()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b478ea3e34a593295bd2dbe40d3abbd3",{
            method:'POST',
            body:JSON.stringify({
                page:3,
                size:50
            })
        })
        .then(res=>res.json())
        .then(data=>setData(data.results))
    })

    return(
        <View>
            
        <FlatList
            data={data}
            renderItem={({item})=>(
                <Text>{item.original_title}</Text>
            )}
        />
        </View>
    )
}