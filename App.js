import React from 'react';
import { Text, View } from 'react-native';
import { UseContextExample } from './src/UseContextExample';

export const Message = React.createContext();

export default function App() {  

  const contextValue="pavankommi"

  return (
   <View>
     <Text>Pavan </Text>
   </View>
  );
}

