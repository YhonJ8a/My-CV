import React from 'react'
import type { ChildContainerProps } from '../types/layout';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import '../styles/layout/main.css';

export default function Layout({ children }: ChildContainerProps) {
    return (
        <React.Fragment>
            <div className='layout-wrapper'>
                <AppTopbar />
                <div className="layout-sidebar">
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{children}</div>
                    <AppFooter />
                </div>
            </div>
        </React.Fragment>
    )
}
