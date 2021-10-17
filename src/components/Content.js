import React from "react";
import './styles/Content.css';
import Navbar from "./Navbar";
import TableWorkPlace from "./Table";

function Content(){
    return (
        <div className='content'>
            <Navbar />
			<TableWorkPlace />
        </div>
    )
}

export default Content;
