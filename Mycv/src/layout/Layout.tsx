import React from 'react'
import type { ChildContainerProps } from '../types/layout';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import '../styles/layout/main.css';
import imsg from '../assets/ufo-svgrepo-com.png';

export default function Layout({ children }: ChildContainerProps) {
    const [visibleMenu, setVisibleMenu] = React.useState(false);

    return (
        <React.Fragment>
            <div className='layout-wrapper'>
                <AppTopbar setVisibleMenu={setVisibleMenu} />
                <div className="layout-sidebar" style={{ display: visibleMenu ? 'block' : 'none' }}>
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">
                        <img src={imsg} alt="pruebas" />
                        {children}</div>
                    <AppFooter />
                </div>
            </div>
        </React.Fragment>
    )
}
