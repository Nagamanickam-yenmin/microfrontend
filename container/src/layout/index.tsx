import React, { ReactNode } from 'react';
import Header from "../components/header";
import SideBar from '../components/sideBar';
import { LayoutProps } from '../type/layoutType';

const Layout = ({ children, showLayout = true }: LayoutProps) => {
    if (!showLayout) {
        return <>{children}</>;
    }

    return (
        <div className='layout'>
            <SideBar />
            <div className='body'>
                <Header />  
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
