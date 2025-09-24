import React from 'react'
import type { ChildContainerProps } from '../types/layout';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import '../styles/layout/main.css';
import Sky from '../components/Sky';

export default function Layout({ children }: ChildContainerProps) {
    const [visibleMenu, setVisibleMenu] = React.useState(false);

    return (
        <React.Fragment>
            <Sky />
            <div className='layout-wrapper cursor'>
                <div className='layout-topbar-content'>
                    <AppTopbar setVisibleMenu={setVisibleMenu} />
                </div>
                <div className="layout-sidebar" style={{ display: visibleMenu ? 'block' : 'none' }}>
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">
                        {children}</div>
                    <AppFooter />
                </div>
            </div>
        </React.Fragment>
    )
}
