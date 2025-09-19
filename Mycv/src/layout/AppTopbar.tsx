import React from 'react';
import '../styles/layout/main.css';
import perfil from '../assets/8b0ce28b-ef55-4764-b1ec-6d51ea0ca015.jpeg'

export default function AppTopbar() {
    return (
        <div className="layout-topbar">
            <figure>
                <img src={perfil} alt="Desarrollador FullS" className='layout-topbar-perfil'/>
                <figcaption>Desarrollador FullS.</figcaption>
            </figure>
            <h2>Desarrollador</h2>
            <h1>Yhon J. Ochoa Mayorga</h1>
        </div>
    )
}
