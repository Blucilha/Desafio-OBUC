import React, { useState, useEffect } from 'react';
import myContext from './CreateContext';

function ProviderContext({ children }) {
    const [workPlaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        const stringfyWorkPlaces = JSON.stringify(workPlaces);
        sessionStorage.setItem('arrLocaisTrabalho', stringfyWorkPlaces);
    }, [workPlaces]);

    const context = {
        workPlaces,
        setWorkPlaces,
    }

    return (
        <myContext.Provider value={ context }>
            { children }
        </myContext.Provider>
    )
}

export default ProviderContext;
