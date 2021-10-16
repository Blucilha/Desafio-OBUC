import React, { useEffect, useState } from "react";
import './Table.css';
import Form from "./Form";

function Table(){
    const arrLocaisTrabalho = sessionStorage.getItem('arrLocaisTrabalho');
    const getWorkPlacesJson = JSON.parse(arrLocaisTrabalho);

    const [info, setInfo] = useState(getWorkPlacesJson);

    const createRowsTable = () => {
        if(info.length === 0) {
            return (
                <p>Sem dados disponíveis</p>
            )
        }
        return info.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{ element.building }</td>
                    <td>{ element.workPlace }</td>
                    <td>
                        <button>a</button>
                        <button>b</button>
                    </td>
                </tr>
            )
        })
    }

    useEffect(() => {
        setInfo(getWorkPlacesJson)
    }, [getWorkPlacesJson]);

    return(
        <div>
            <Form />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Prédio</th>
                        <th>Local de Trabalho</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { createRowsTable() }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
