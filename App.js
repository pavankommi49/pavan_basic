import React from 'react';
import { UseContextExample } from './src/UseContextExample';

export const Message = React.createContext();

export default function App() {  

  const contextValue="pavankommi"

  return (
    <Message.Provider value={contextValue}>
      <UseContextExample/>
    </Message.Provider>
  );
}

