import React from 'react';
import './App.css';
import { DataContextProvider } from "./store";
import Main from './components/Main';

function App() {
  return (
    <DataContextProvider>
      <Main />
    </DataContextProvider>
  );
}

export default App;
