import React, { useState, useContext } from "react";
import myContext from "../context/CreateContext";
import '../App.css';

const RANGE_BUILDING = [1, 2, 3, 4];

function FormAddInfo(){
    const { workPlaces, setWorkPlaces } = useContext(myContext);

    const [onSelect, setOnSelect] = useState('');
    const [onInput, setOnInput] = useState('');

    const onChangeStatus = ({ target }) => {
        const { name, value } = target;

        if((name === 'select') && value !== '-') {
            setOnSelect(value);
        } else if(name === 'input') {
            setOnInput(value);
        }
    }

    const onButtonAdd = (e) => {
        e.preventDefault();
        const workPlaceSingle = {
            building: onSelect,
            workplace: onInput
        };
        setWorkPlaces([...workPlaces, workPlaceSingle]);
    }

    const optionsBuilding = () => {
        return RANGE_BUILDING.map((element) => {
            const value = `Prédio ${ element }`;
            return (
                <option
                    key={element}
                    value={ value }
                >
                    { value }
                </option>
            )
        }) 
    }

    return (
        <form className='form'>
            <div className='column'>
                <label htmlFor='select'>Prédio</label>
                <select
                    name='select'
                    id='select'
                    defaultValue='-'
                    onChange={ onChangeStatus }
                >
                    <option value='-'></option>
                    { optionsBuilding() }
                </select>
            </div>
            <div className='column'>
                <label htmlFor='input'>Local de Trabalho</label>
                <input
                    name='input'
                    id='input'
                    type='text'
                    onChange={ onChangeStatus }
                />
            </div>
            
            <button
                id='button-add'
                type='button'
                onClick={ onButtonAdd }
            >
            </button>
        </form>
    )
}

export default FormAddInfo;
