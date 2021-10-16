import React from 'react';
import './App.css';
import ProviderContext from './context/ProviderContext';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <ProviderContext>
      <Header />
      <Table />
    </ProviderContext>
  );
}

export default App;
