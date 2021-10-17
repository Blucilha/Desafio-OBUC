import React from "react";
import './styles/Navbar.css';
import { AiOutlineSetting } from 'react-icons/ai';

function Navbar(){
	return (
		<aside className='bar-lateral'>
			<nav id='nav-bar'>
				<p><AiOutlineSetting /> Administração</p>
				<a className='link' href='http://localhost:3000/'>Administradores</a>
				<a className='link' href='http://localhost:3000/'>Áreas</a>
				<a className='link' href='http://localhost:3000/'>Locais de Trabalho</a>
				<a className='link' href='http://localhost:3000/'>Habilidades</a>
				<a className='link' href='http://localhost:3000/'>Log</a>
				<a className='link' href='http://localhost:3000/'>Responsáveis</a>
			</nav>
		</aside>
	)
}

export default Navbar;
