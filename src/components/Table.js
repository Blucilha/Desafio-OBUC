import React, { useContext, useState } from "react";
import Table from 'react-bootstrap/Table'
import FormAddInfo from "./Form";
import myContext from "../context/CreateContext";

function TableWorkPlace(){
    const { workPlaces, setWorkPlaces } = useContext(myContext);

    const [editInfo, setEditInfo] = useState({ number: '', bool: false });
    const [infoEdit, setInfoEdit] = useState({ building: '', workplace: '' });

    const clickBtnDelete = (index) => {
        const deleteWorkPlace = workPlaces.filter((element, ind) => {
                if(ind !== index) {
                    return element
                }
            });
        setWorkPlaces(deleteWorkPlace); 
    }

    const clickBtnEdit = (index, element) => {
        setEditInfo({ number: index, bool: true});
        setInfoEdit({ building: element.building, workplace: element.workplace });
    }

    const confirmEditBtn = (index, arr) => {
        setInfoEdit({ number: '', bool: false });
        console.log(arr);

        const editWorkPlace = arr.map((element, ind) => {
            if(index === ind) {
                return {
                    ...element,
                    building: infoEdit.building,
                    workplace: infoEdit.workplace
                };
            }
            return element;
        });
        setWorkPlaces(editWorkPlace)
        setEditInfo({...editInfo, number: '', bool: false});
    }

    const cancelEditBtn = () => {
        setEditInfo({...editInfo, bool: false});
    }

    const onChangeEdit = ({ target }) => {
        const { name, value } = target;
        if(name === 'select-edit'){
            setInfoEdit({ ...infoEdit, building: value });
        } else if( name === 'input-edit' ){
            setInfoEdit({ ...infoEdit, workplace: value });
        }
    }
    const rowsTable = (index, element) => {
        return (
            <tr key={index}>
            <td>{ element.building }</td>
            <td>{ element.workplace }</td>
            <td>
                <button
                    type='button'
                    onClick={ () => clickBtnEdit(index, element) }
                >
                    edit
                </button>
                <button
                    type='button'
                    onClick={ () => clickBtnDelete(index) }
                >
                    delete
                </button>
            </td>
        </tr>
        )
    }

    const rowEdit = (index, element, arr) => {
        return (
            <tr key={ index }>
                <td>
                    <select
                        name='select-edit'
                        onChange={ onChangeEdit }
                        defaultValue={ element.building }
                    >
                        <option value='Prédio 1'>Prédio 1</option>
                        <option value='Prédio 2'>Prédio 2</option>
                        <option value='Prédio 3'>Prédio 3</option>
                        <option value='Prédio 4'>Prédio 4</option>
                    </select>
                </td>
                <td>
                    <input
                        name='input-edit'
                        type='text'
                        onChange={ onChangeEdit }
                        defaultValue={ element.workplace }
                    />
                </td>
                <td>
                    <button
                        type='button'
                        onClick={ () => confirmEditBtn(index, arr) }
                    >
                        OK
                    </button>
                    <button
                        type='button'
                        onClick={ () => cancelEditBtn() }
                    >
                        Cancel
                    </button>
                </td>
            </tr>
        )
    }

    const createRowsTable = () => {
        if(workPlaces.length === 0) {
            return (
                <tr>
                    <td>Sem dados disponíveis</td> 
                </tr>
            )
        }
        return workPlaces.map((element, index, arr) => {
            if(editInfo.bool && index === editInfo.number) {
                return (
                    rowEdit(index, element, arr)
                )
            }
            return (
                rowsTable(index, element)
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
