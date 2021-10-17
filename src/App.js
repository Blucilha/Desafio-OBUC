import React from 'react';
import './App.css';
import ProviderContext from './context/ProviderContext';
import Header from './components/Header';
import Content from './components/Content';

function App() {
	return (
		<ProviderContext>
			<Header />
			<Content />
		</ProviderContext>
	);
}

export default App;
