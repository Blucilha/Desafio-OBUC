import React from 'react';
import './App.css';
import ProviderContext from './context/ProviderContext';
import Header from './components/Header';
import TableWorkPlace from './components/Table';

function App() {
  return (
    <ProviderContext>
      <Header />
      <TableWorkPlace />
    </ProviderContext>
  );
}

export default App;
