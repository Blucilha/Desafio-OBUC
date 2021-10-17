import React from "react";
import './styles/Header.css';
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';

function Header(){
    return (
        <header id='header'>
            <h3>Título da Página Principal</h3>
            <nav id='header-nav'>
                <a href='http://localhost:3000/' className='link-header'>
                    <HiOutlineHome />
                </a>
                <div className='border'></div>
                <a href='http://localhost:3000/' className='link-header'>
                    <AiOutlineUser />
                </a>
                <div id='user-header'>
                    <h5>Usuário</h5>
                    <h6>Administrador</h6>
                </div>
            </nav>
        </header>
    )
}

export default Header;
