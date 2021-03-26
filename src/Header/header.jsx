import React from 'react';
import './header.css';
import logo from '../Images/PikPng.com_anonymous-mask-png_1125985.png'


export default function Header({Header}) {
    return (
        <header className = {'header'}>
            <a href="#" className = {'logo_link'}>
                <img src = {logo} alt="photo"  className = {'logo'} />
            </a>

            <nav className = {'menu'}>
                <ul className = {'menu_list'}>
                    <li className = {'menu_list_item'} >
                        <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B1%D1%83%D0%B3%D0%B0%D0%B9-5556241b1/" className = {'menu_list_link'}>Linkedin</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="https://github.com/Never91" className = {'menu_list_link'}>Github</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="https://sites.google.com/d/1Y3-Om72rGRb2pKNQRiUbTVeOz-Wkeq0q/p/1XEhl-cFXIjqG8U-f3XbEs43KD1GpyPSY/edit" className = {'menu_list_link'}>Google sites</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="https://trello.com/" className = {'menu_list_link'}>Trello</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="https://miro.com/" className = {'menu_list_link'}>Miro</a>  
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
