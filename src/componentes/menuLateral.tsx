'use client'

import React, { useState, useRef, ChangeEvent  } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuLateralProps {
    setActiveComponent: (component: string) => void;
}

export default function MenuLateral({ setActiveComponent }: MenuLateralProps) {

    // Tipagem do estado da imagem
    const [image, setImage] = useState<string | null>(null);
    // Referência para o input de arquivo
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Função para lidar com o upload da imagem
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    // Função para acionar o clique no input de arquivo
    const handleDivClick = () => {
        fileInputRef.current?.click();
    };

    const [isPrivadoOpen, setIsPrivadoOpen] = useState(false);
    const [isEventosOpen, setIsEventosOpen] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className='border-black border-1-4 shadow-2xl shadow-black h-screen w-1/5 flex flex-col py-5'>
            <div className='h-1/6 w-full flex'>
                <div className='h-full w-1/2 flex items-center justify-center'>
                <div
                onClick={handleDivClick}
                className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 cursor-pointer flex items-center justify-center border-black border-2"
            >
                {image ? (
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-gray-500">Click to upload</span>
                )}
            </div>

            {/* Campo de upload de imagem escondido */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="hidden"
            />
                </div>
                <div className='h-full w-1/2 flex flex-col items-center justify-center '>
                    <h1 className='text-center font-bold text-xl mt-5'>Gustavo Romão</h1>
                    <h1 onClick={handleLoginClick} className='cursor-pointer text-red-800 font-semibold pt-4'>Exit</h1>
                </div>
            </div>
            <div>
            <div>
                <ul className='h-full w-full flex flex-col pt-10'>
                    <li className='font-bold text-2xl pl-4'>
                    <button 
                        onClick={() => setIsPrivadoOpen(!isPrivadoOpen)}>
                        Principal
                        </button>
                        {isPrivadoOpen && (
                        <ul className='pl-4 font-semibold text-xl'>
                            <li onClick={() => setActiveComponent('home')}>Home</li>
                            <li onClick={() => setActiveComponent('calendar')}>Calendário</li>
                            <li onClick={() => setActiveComponent('task')}>Tarefas</li>
                            <li onClick={() => setActiveComponent('lembretes')}>Lembretes</li>
                        </ul>
                        )}
                    </li>
                    <li className='font-bold text-2xl pt-4 pl-4'>
                    <button 
                        onClick={() => setIsEventosOpen(!isEventosOpen)}>
                        Eventos
                        </button>
                        {isEventosOpen && (
                        <ul className='pl-4 font-semibold text-xl'>
                            <li>WorkShop Java Alemanha</li>
                            <li>Viagem a Espanha</li>
                        </ul>
                        )}
                    </li>
                </ul>
            </div>
            </div>
                       
        </div>
    );
}