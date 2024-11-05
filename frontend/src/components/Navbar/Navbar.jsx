import React, { useContext, useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { BsBasket2Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('menu')
    const { totalCartAmount } = useContext(StoreContext)
    return (
        <div className='navbar'>
            <Link to='/'><h1 className='logo'>Quickbite</h1></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact-Us</a>
            </ul>
            <div className="navbar-right">
                <CiSearch className='icons' size={25} />
                <div className="navbar-search-icon">
                    <Link to='/cart'><BsBasket2Fill className='icons' size={25} /></Link>
                    <div className={totalCartAmount() > 1 ? 'dot' : ''}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign-In</button>
            </div>
        </div>
    )
}

export default Navbar