import '../styles/layout/topbar.css';
import React from 'react';
import perfil from '../assets/8b0ce28b-ef55-4764-b1ec-6d51ea0ca.png';
import type { propsTopbar } from '../types/layout';

export default function AppTopbar(props: propsTopbar) {
    const { setVisibleMenu } = props;
    const [open, setOpen] = React.useState(false);

    function handleToggleMenu() {
        setVisibleMenu(prev => {
            setOpen(!prev);
            return !prev;
        });
    }
    return (
        <div className="layout-topbar">
            <div className='layout-topbar-menu'>
                <button className='layout-topbar-button cursor' onClick={handleToggleMenu}>
                    <i className={open ? "icon-menu active" : "icon-menu"}></i>
                </button>
            </div>
            <div className='layout-topbar-logo'>
                <figure className='layout-topbar-figure'>
                    <a href="https://github.com/YhonJ8a" className='cursor'>
                        <img src={perfil} alt="Desarrollador FullS" className='layout-topbar-perfil' />
                        <figcaption className='layout-topbar-figcaption'>
                            Yhon J. Ochoa
                        </figcaption>
                    </a>
                </figure>
                <div className='layout-topbar-titulo'>
                    <h1>Yhon J. Ochoa Mayorga</h1>
                    <p>Desarrollador Full Stack</p>
                </div>
            </div>
        </div>
    )
}
