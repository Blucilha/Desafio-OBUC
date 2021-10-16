import React, { useContext, useState } from "react";
import Table from 'react-bootstrap/Table'
import FormAddInfo from "./Form";
import myContext from "../context/CreateContext";

function TableWorkPlace(){
    const { workPlaces, setWorkPlaces } = useContext(myContext);

    const clickBtnDelete = (index) => {
        const deleteWorkPlace = workPlaces.filter((element, ind) => {
                if(ind !== index) {
                    return element
                }
            });
        setWorkPlaces(deleteWorkPlace); 
    }

    const createRowsTable = () => {
        if(workPlaces.length === 0) {
            return (
                <p>Sem dados disponíveis</p>
            )
        }
        return workPlaces.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{ element.building }</td>
                    <td>{ element.workPlace }</td>
                    <td>
                        <button>edit</button>
                        <button
                            type='button'
                            onClick={ () => clickBtnDelete(index) }
                        >
                            del
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <div>
            <FormAddInfo />
            <Table bordered>
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
            </Table>
        </div>
    )
}

export default TableWorkPlace;
