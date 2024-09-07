'use client'

import React, { useState } from 'react';
import MenuLateral from '../componentes/menuLateral.tsx';  // Verifique se o nome da pasta e do arquivo estão corretos
import Calendar from '../componentes/calendar.tsx';         // Verifique se o nome da pasta e do arquivo estão corretos
import Home from '../componentes/home.tsx';                 // Verifique se o nome da pasta e do arquivo estão corretos



export default function Dashboard() {

    const [activeComponent, setActiveComponent] = useState('home');

    const renderContent = () => {
        switch (activeComponent) {
            case 'calendar' : return <Calendar />;
            default : return <Home />    
        }
    };


    return (
        <div className='flex'>
            <MenuLateral setActiveComponent={setActiveComponent} />
            <div className='w-4/5'>
                {renderContent()}
            </div>
        </div>
    )
}